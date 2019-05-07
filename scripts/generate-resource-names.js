const fs = require("fs");
const request = require("request");

const API_VERSION = process.argv[2];
const OUT_FILE = process.argv[3];

const DISCOVERY_URL = `https://googleads.googleapis.com/$discovery/rest?version=${API_VERSION}`;
const RESOURCES = `GoogleAdsGoogleads${API_VERSION.toUpperCase()}Resources__`;
const COMMON = `GoogleAdsGoogleads${API_VERSION.toUpperCase()}Common__`;

const stream = fs.createWriteStream(OUT_FILE);

async function main() {
  console.log("Fetching resources from discovery api..");
  const schema = await getDiscoverySchema();

  stream.write(`export enum ResourceUrlName {`);

  console.log("Compiling resource names..");
  for (const type in schema.schemas) {
    if (type.includes(RESOURCES)) {
      writeResourceName(schema.schemas[type], RESOURCES);
    }
    if (type.includes(COMMON)) {
      writeResourceName(schema.schemas[type], COMMON);
    }
  }

  stream.write(`}`);
  stream.end();
  console.log(`Generated resource names at ${OUT_FILE}`);
}

function writeResourceName(entity, type) {
  if (entity.properties.resourceName) {
    const { description } = entity.properties.resourceName;

    const descriptionTrimmed = description.split("\n`")[1].replace(/(\r\n|\n|\r)/gm, "");
    const customerDelim = `customers/{customer_id}/`;

    if (descriptionTrimmed && descriptionTrimmed.includes(customerDelim)) {
      const resourceUrlName = descriptionTrimmed.split(customerDelim)[1].split("/")[0];
      const resourceName = entity.id.replace(type, "");

      stream.write(`\n// ${descriptionTrimmed}`);
      stream.write(`\n${resourceName} = "${resourceUrlName}",\n`);
      return;
    }

    if (descriptionTrimmed) {
      const resourceUrlName = descriptionTrimmed.split("/")[0];

      stream.write(`\n// ${descriptionTrimmed}`);
      stream.write(`\n${entity.id.replace(type, "")} = "${resourceUrlName}",\n`);
    }
  }
}

function getDiscoverySchema() {
  return new Promise((resolve, reject) => {
    request(DISCOVERY_URL, (err, res, body) => {
      if (err) reject(err);
      else resolve(JSON.parse(body));
    });
  });
}

try {
  main();
} catch (err) {
  console.log("Error compiling resource names:");
  console.log(err);
}
