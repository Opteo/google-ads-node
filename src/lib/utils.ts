import protobufHelpers from "google-protobuf/google/protobuf/field_mask_pb";
import { Client } from "grpc";
import camelCase from "lodash.camelcase";
import get from "lodash.get";

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
  // console.log(require("util").inspect(resultsList, false, null));
  // console.log(resultsList);
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

function parseNestedEntitiesNoPath(data: any) {
  if (typeof data === "string" || typeof data === "number" || typeof data === "boolean") {
    return data;
  }

  const final_object = {} as any;
  Object.keys(data).map(key => {
    let displayKey = key;
    if (key.endsWith("List")) {
      displayKey = key.split("List")[0];
    }

    let entity = data[key];

    const isObject = typeof entity === "object";
    const isUndefined = typeof entity === "undefined";
    const isArray = Array.isArray(entity);
    const isValue = isObject ? entity.hasOwnProperty("value") : false;

    if (isUndefined) {
      return;
    }

    if (isArray) {
      final_object[displayKey] = entity.map((item: any) => {
        const parsed = parseNestedEntitiesNoPath({ item });

        return parsed.item;
      });
    } else if (isValue) {
      final_object[displayKey] = entity.value;
    } else if (isObject) {
      final_object[displayKey] = parseNestedEntitiesNoPath(entity);
    } else {
      final_object[displayKey] = entity;
    }
  });

  return final_object;
}

function parseNestedEntities(data: any, props: string[], parent: any = {}) {
  for (let path of props) {
    path = convertPathToCamelCase(path);

    let displayKey = path;
    if (path.endsWith("List")) {
      displayKey = path.split("List")[0];
    }

    if (path.includes(".")) {
      const splitPath = path.split(".");
      const firstProp = splitPath[0];
      const firstPropExists = parent.hasOwnProperty(firstProp);

      const remainingProps = splitPath.slice(1).join(".");
      const child = data[firstProp];

      if (!child) {
        continue;
      }

      if (!firstPropExists) {
        parent[firstProp] = {};
      }

      if (!parent[firstProp].resourceName && child.hasOwnProperty("resourceName")) {
        parent[firstProp].resourceName = child.resourceName;
      }

      parseNestedEntities(child, [remainingProps], parent[firstProp]);
    } else {
      let value = data[path];
      const isObject = typeof value === "object" && !Array.isArray(value);

      /* Case for array types where gRPC types append "List" (for some reason) */
      if (!value || typeof value === "undefined") {
        if (data[`${path}List`]) {
          value = data[`${path}List`];
        } else {
          continue;
        }
      }

      if (Array.isArray(value)) {
        value = value.map((item: any) => {
          return parseNestedEntitiesNoPath({ item }).item;
        });
      }

      parent[displayKey] = isObject ? value.value : value;
    }
  }

  return parent;
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
