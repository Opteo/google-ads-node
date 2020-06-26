import * as protobufHelpers from "google-protobuf/google/protobuf/field_mask_pb";
import { Client, CallOptions } from "grpc";
import camelCase from "lodash.camelcase";
import get from "lodash.get";
import set from "lodash.set";
import { GoogleAdsRow } from "./resources";

import * as structs from "./struct";

const NON_MUTABLE_METHOD_PREFIXES = ["Get", "List", "Generate", "Search"];

// Based on https://github.com/leaves4j/grpc-promisify/blob/master/src/index.js
export function promisifyServiceClient(client: Client) {
  Object.keys(Object.getPrototypeOf(client)).forEach((functionName: string) => {
    if (functionName.charAt(0) === "$" || functionName.charAt(0) === "_") {
      return;
    }
    const originalFunction = (client as any)[functionName];

    (client as any)[functionName] = (request: any, callback: any) => {
      if (callback && typeof callback === "function") {
        return originalFunction.call(client, request, (error: any, response: any) => {
          callback(error, response);
        });
      }

      return new Promise((resolve, reject) => {
        originalFunction.call(client, request, (error: any, response: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        });
      });
    };
  });
}

function getNestedValue(path: string, data: GoogleAdsRow): any {
  const value = get(data, path) ?? get(data, `${path}List`);
  const typeOfValue = typeof value;

  if (typeOfValue === "undefined") {
    return value;
  }

  // Return raw values
  if (typeOfValue === "number" || typeOfValue === "string" || typeOfValue === "boolean") {
    return value;
  }

  // Get value from google.protobuf { value } objects
  const isValue =
    typeOfValue === "object"
      ? value.hasOwnProperty("value") && Object.keys(value).length === 1
      : false;
  if (isValue) {
    return value.value;
  }

  // Recursively get values from arrays
  if (Array.isArray(value)) {
    const childRows = [];
    for (const childRow of value) {
      const newRow: { [key: string]: any } = {};
      const childKeys = Object.keys(childRow);

      for (const childKey of childKeys) {
        const newChildVal: any = getNestedValue(childKey, childRow);

        if (childKey === "value" && childKeys.length === 1) {
          childRows.push(newChildVal);
        } else {
          newRow[childKey] = newChildVal;
        }
      }
      if (Object.keys(newRow).length !== 0) {
        childRows.push(newRow);
      }
    }
    return childRows;
  }

  // Recursively get values from objects
  const childObj: { [key: string]: any } = {};
  for (const childKey in value) {
    if (value.hasOwnProperty(childKey)) {
      const childValue = getNestedValue(childKey, value);
      if (Array.isArray(childValue) && childKey.endsWith("List")) {
        childObj[childKey.replace("List", "")] = childValue;
      } else {
        childObj[childKey] = childValue;
      }
    }
  }
  return childObj;
}

export function formatCallResults(
  resultsList: GoogleAdsRow[],
  fieldMask: protobufHelpers.FieldMask.AsObject
) {
  // Hack to check if request is a get call (no entity prefix in fieldmask paths)
  // Required because of weird fieldmask inconsistencies where .value is added to each path
  // and to avoid removing fields actually called "value"
  const isGetRequest = fieldMask?.pathsList?.find(p => p === "resourceName");

  const len = resultsList.length;
  const camelCaseFieldMask = fieldMask ? fieldMask.pathsList.map(convertPathToCamelCase) : [];
  const fieldMaskLen = camelCaseFieldMask.length;
  const parsedResults = [];

  for (let i = 0; i < len; i++) {
    const row = resultsList[i];
    const parsedRow: { [key: string]: any } = {};

    for (let j = 0; j < fieldMaskLen; j++) {
      const path = camelCaseFieldMask[j];
      const value = getNestedValue(path, row);

      // Get the resource name of the entity
      const entity = path.split(".")[0] as keyof GoogleAdsRow;
      const resourceNameField = `${entity}.resourceName`;
      const resourceNameExistsOriginal = get(row, resourceNameField);
      const resourceNameExists = get(parsedRow, resourceNameField);

      // Set the resource name if required
      if (!resourceNameExists && resourceNameExistsOriginal) {
        const resourceName = get(row, resourceNameField);
        set(parsedRow, resourceNameField, resourceName);
      }

      if (typeof value !== "undefined") {
        set(parsedRow, formatPath(path, value, isGetRequest), value);
      }
    }
    parsedResults.push(parsedRow);
  }

  return parsedResults;
}

function formatPath(path: string, value: any, isGetRequest?: string): string {
  if (isGetRequest && path.endsWith(".value")) {
    return path.split(".value")[0];
  }
  if (path.endsWith("List") && Array.isArray(value)) {
    return path.split("List")[0];
  }
  return path;
}

export function convertToProtoFormat(
  data: any,
  type: any,
  resource_name: string,
  nested_path: string = ""
): any {
  const pb: any = {};

  const struct = (structs as any)[resource_name];
  if (!struct) {
    throw new Error(
      `Key "${nested_path.replace(".", "")}" not found in resource "${resource_name}"`
    );
  }

  for (const key of Object.keys(data)) {
    const displayKey = camelCase(key);
    const value = data[key];

    /* Resource names are string values, not a protobuf string instance, so just set the string value */
    if (displayKey === "resourceName") {
      pb[displayKey] = value;
      continue;
    }

    /* Build array of proto values */
    if (Array.isArray(value)) {
      pb[displayKey] = value.map((v: any) => {
        return unroll(v);
      });
      continue;
    }

    pb[displayKey] = unroll(value);

    function unroll(v: any) {
      return typeof v === "object"
        ? convertToProtoFormat(v, type, resource_name, `${nested_path}.${key}`)
        : toProtoValueFormat(v, struct, `${nested_path}.${key}`.replace(".", ""));
    }
  }

  return pb;
}

function toProtoValueFormat(value: any, struct: any, nested_path: string): any {
  const valueType = get(struct, nested_path);
  if (!valueType) {
    throw new Error(
      `Attempted to set value "${value}" on invalid path "${nested_path}" in resource`
    );
  }
  if (valueType.startsWith("enum_")) {
    return value;
  }
  return {
    value,
  };
}

/* This is different to lodash.camelCase as it leaves any periods (".") */
export function convertPathToCamelCase(str: string) {
  return str.replace(/([-_][a-z\d])/gi, $1 => {
    return $1
      .toUpperCase()
      .replace("-", "")
      .replace("_", "");
  });
}

function recursiveFieldMaskSearch(data: any) {
  const paths: string[] = [];

  for (const key of Object.keys(data)) {
    if (key === "resource_name") {
      continue;
    }
    const value = data[key];

    if (typeof value === "object" && !Array.isArray(value)) {
      const children = recursiveFieldMaskSearch(value);
      for (const child of children) {
        paths.push(`${key}.${child}`);
      }
      continue;
    }
    paths.push(key);
  }

  return paths;
}

export function getFieldMask(data: any): protobufHelpers.FieldMask {
  const fieldMask = new protobufHelpers.FieldMask();
  const paths = recursiveFieldMaskSearch(data);
  fieldMask.setPathsList(paths);
  return fieldMask;
}

export function getErrorLocationPath(location: any): string {
  if (!location || !location.hasOwnProperty("fieldPathElementsList")) {
    return "";
  }
  if (!Array.isArray(location.fieldPathElementsList) && location.fieldPathElementsList.length < 1) {
    return "";
  }

  const { fieldPathElementsList } = location;

  const paths = fieldPathElementsList.map((field: any) => {
    let path = field.fieldName;
    if (field.index && field.index.hasOwnProperty("value")) {
      path += `[${field.index.value}]`;
    }
    return path;
  });

  return paths.join(".");
}

export function isMutationRequest(interceptMessage: CallOptions): boolean {
  let isMutation = true;

  if (interceptMessage?.method_definition?.path) {
    const { path } = interceptMessage.method_definition;
    for (const prefix of NON_MUTABLE_METHOD_PREFIXES) {
      if (path.includes(prefix)) {
        isMutation = false;
        break;
      }
    }
  }

  return isMutation;
}

export function safeguardMutationProtobufRequest(message: any, next: Function) {
  // Force validation only for requests if the setValidateOnly method exists
  if (message?.setValidateOnly) {
    message.setValidateOnly(true);
    next(message);
    // If the request doesn't support validateOnly, we attempt to clear the operations list
  } else if (message?.clearOperationsList) {
    message.clearOperationsList();
    next(message);
    // Some request operations are called mutate_operations
  } else if (message?.clearMutateOperationsList) {
    message.clearMutateOperationsList();
    next(message);
  } else {
    // Otherwise, we just give up to prevent any unwanted mutations (this throws an error, shouldn't happen)
    throw new Error(
      `Prevent mutations mode is enabled, but the request couldn't be safeguarded, giving up.`
    );
  }
}
