import fs from 'node:fs';
import { parseOpenApiCollection } from '@usebruno/app/src/utils/importers/openapi-collection.js';

async function main() {
  const spec =  fs.readFileSync("openapi.json")
  console.log("spec:\n%s\n", spec)
  const collection = await parseOpenApiCollection(spec)
  console.log("collection:\n%s\n", JSON.stringify(collection))
}

main().then(() => console.log('done...'))
