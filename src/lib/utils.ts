import { Client } from "grpc";

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

export function convertToProtoFormat(data: any): any {
  const pb: any = {};

  for (const key of Object.keys(data)) {
    const displayKey = toCamelCase(key);
    const value = data[key];
    pb[displayKey] =
      typeof value === "object" ? convertToProtoFormat(value) : toProtoValueFormat(value);
  }

  return pb;
}

function toProtoValueFormat(value: any): number | any {
  if (typeof value === "number") {
    return value;
  }
  return {
    value,
  };
}

function toCamelCase(str: string) {
  return str.replace(/([-_][a-z])/gi, $1 => {
    return $1
      .toUpperCase()
      .replace("-", "")
      .replace("_", "");
  });
}

function parseNestedEntitiesNoPath(data: any, parent: any = {}) {
  for (const key of Object.keys(data)) {
    let displayKey = key;
    if (key.endsWith("List")) {
      displayKey = key.split("List")[0];
    }

    const entity = data[key];
    const isObject = typeof entity === "object";
    const entityExists = parent.hasOwnProperty(key);
    const isValue = isObject ? entity.hasOwnProperty("value") : false;
    const keys = isObject ? Object.keys(entity) : [];

    if (!entityExists && isObject) {
      parent[displayKey] = {};
      if (entity.hasOwnProperty("resourceName")) {
        parent[displayKey].resourceName = entity.resourceName;
      }
    }

    if (isObject && !isValue && keys.length > 0) {
      parseNestedEntitiesNoPath(entity, parent[displayKey]);
    } else {
      const value = isValue ? entity.value : entity;
      if (typeof value !== "undefined") {
        parent[displayKey] = value;
      }
    }
  }

  return parent;
}

function parseNestedEntities(data: any, props: string[], parent: any = {}) {
  for (let path of props) {
    path = toCamelCase(path);

    let displayKey = path;
    if (path.endsWith("List")) {
      displayKey = path.split("List")[0];
    }

    if (path.includes(".")) {
      const splitPath = path.split(".");
      const firstProp = splitPath[0];
      const firstPropExists = parent.hasOwnProperty(firstProp);

      if (!firstPropExists) {
        parent[firstProp] = {};
      }

      const remainingProps = splitPath.slice(1).join(".");
      const child = data[firstProp];

      if (!parent[firstProp].resourceName && child.hasOwnProperty("resourceName")) {
        parent[firstProp].resourceName = child.resourceName;
      }

      parseNestedEntities(child, [remainingProps], parent[firstProp]);
    } else {
      let value = data[path];
      const isObject = typeof value === "object" && !Array.isArray(value);

      /* Case for array types where gRPC types append "List" (for some reason) */
      if (!value || typeof value === "undefined") {
        value = data[`${path}List`];
      }

      parent[displayKey] = isObject ? value.value : value;
    }
  }

  return parent;
}
