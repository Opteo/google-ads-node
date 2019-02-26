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

export function formatCallResults(resultsList: any[], fieldMask: FieldMask) {
  const parsedResults: any[] = [];
  const { pathsList } = fieldMask;

  for (const result of resultsList) {
    const parsedEntity: any = {};

    for (const path of pathsList) {
      const nodes = path.split(".");
      const firstPath = nodes[0];

      nodes.shift();

      if (!parsedEntity[firstPath]) {
        parsedEntity[firstPath] = {};
        if (result[firstPath].hasOwnProperty("resourceName")) {
          parsedEntity[firstPath].resourceName = result[firstPath].resourceName;
        }
      }

      for (const node of nodes) {
        parsedEntity[firstPath][node] = result[firstPath][node].value;
      }
    }

    parsedResults.push(parsedEntity);
  }

  return parsedResults;
}

// function getNestedObject(obj: any, path: string[]) {
//   let index = 0;
//   const length = path.length;

//   while (obj != null && index < length) {
//     obj = obj[path[index++]];
//   }
//   return index && index === length ? obj : undefined;
// }
