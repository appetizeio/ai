// Validates a JSON file against a JSON Schema given as a path or URL.
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { readFile } from 'node:fs/promises';

const [schemaSource, file] = process.argv.slice(2);

async function readSchema(source) {
  if (!/^https?:/.test(source)) {
    return JSON.parse(await readFile(source, 'utf8'));
  }
  const response = await fetch(source);
  if (!response.ok) {
    throw new Error(`${source}: HTTP ${response.status}`);
  }
  return response.json();
}

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(await readSchema(schemaSource));

if (!validate(JSON.parse(await readFile(file, 'utf8')))) {
  for (const error of validate.errors) {
    console.error(`${file}${error.instancePath}: ${error.message}`);
  }
  process.exit(1);
}
console.log(`${file}: valid`);
