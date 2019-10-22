import * as protobufHelpers from "google-protobuf/google/protobuf/field_mask_pb";
import { Client } from "grpc";
import camelCase from "lodash.camelcase";
import get from "lodash.get";
import set from "lodash.set";
import snakeCase from "lodash.snakecase";

import * as structs from "./struct";

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

interface FieldMask {
  pathsList: string[];
}

export function formatCallResults(resultsList: any[], fieldMask: FieldMask | undefined) {
  const parsedResults: any[] = [];

  if (fieldMask) {
    const { pathsList } = fieldMask;
    for (const result of resultsList) {
      const parsedRow = parseNestedEntities(result, pathsList);
      parsedResults.push(parsedRow);
    }
  } else {
    for (const result of resultsList) {
      const parsedRow = parseNestedEntitiesNoPath(result);
      parsedResults.push(parsedRow);
    }
  }

  return parsedResults;
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
function convertPathToCamelCase(str: string) {
  return str.replace(/([-_][a-z])/gi, $1 => {
    return $1
      .toUpperCase()
      .replace("-", "")
      .replace("_", "");
  });
}

function parseNestedEntitiesNoPath(data: any, _structs = structs) {
  if (typeof data === "string" || typeof data === "number" || typeof data === "boolean") {
    return data;
  }

  const findMatchingStruct = (key: string) => {
    const capitalcase_key = key.charAt(0).toUpperCase() + key.slice(1);
    const snakecase_key = snakeCase(key);

    // We need both cases because the structs.ts file exports resources in CapitalCase,
    // but the keys inside each resource are in snake_case. parseNestedEntitiesNoPath() is
    // recursive, so we're not sure which one we'll need.

    // @ts-ignore
    return _structs[capitalcase_key] || _structs[snakecase_key];
  };

  const finalObject: any = {};

  Object.keys(data).map(key => {
    let displayKey = key;

    /*  
      This section regarding "matching structs" is designed to correctly
      trim keys that end in "List". Some of those keys are legit (such as userList)
      while others are bogus (such as pointsList). The bogus ones need trimming so
      that the final result returned to the user matches the format specified in the docs.

      This adds other layer of recusive complexity to this function, and I'm open to improvements.
    */
    let matching_struct = findMatchingStruct(displayKey);

    if (!matching_struct && key.endsWith("List")) {
      // Trim "List" only if bogus key
      displayKey = key.split("List")[0];
      matching_struct = findMatchingStruct(displayKey);
    }

    const entity = data[key];

    const isObject = typeof entity === "object";
    const isUndefined = typeof entity === "undefined";
    const isArray = Array.isArray(entity);
    // It needs its "value" unwrapped if it is an object and has "value" as its only key.
    const isValue = isObject
      ? entity.hasOwnProperty("value") && Object.keys(entity).length === 1
      : false;

    if (isUndefined) {
      return;
    }

    if (isArray) {
      finalObject[displayKey] = entity.map((item: any) => {
        // @ts-ignore
        const parsed = parseNestedEntitiesNoPath({ item }, { item: matching_struct });
        return parsed.item;
      });
    } else if (isValue) {
      finalObject[displayKey] = entity.value;
    } else if (isObject) {
      finalObject[displayKey] = parseNestedEntitiesNoPath(entity, matching_struct);
    } else {
      finalObject[displayKey] = entity;
    }
  });

  return finalObject;
}

// This function first parses the data without regard for the passed props,
// then plucks out the props that it actually cares about.
function parseNestedEntities(data: any, props: string[]) {
  const parsed_data = parseNestedEntitiesNoPath(data);

  const final_object = {};

  for (let path of props) {
    path = convertPathToCamelCase(path);

    // Pluck resource name if available
    const path_elements_trimmed = path.split(".");
    while (path_elements_trimmed.pop()) {
      path_elements_trimmed.push("resourceName");
      const rn_path = path_elements_trimmed.join(".");
      path_elements_trimmed.pop();
      if (get(parsed_data, rn_path)) {
        set(final_object, rn_path, get(parsed_data, rn_path));
      }
    }

    // And pluck the field specified in path
    const plucked_value = get(parsed_data, path);

    if (typeof plucked_value !== "undefined") {
      set(final_object, path, plucked_value);
    }
  }

  return final_object;
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
