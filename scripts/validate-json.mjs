// Validates a JSON file against a JSON Schema file.
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { readFile } from 'node:fs/promises';

const [schemaFile, file] = process.argv.slice(2);

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(JSON.parse(await readFile(schemaFile, 'utf8')));

if (!validate(JSON.parse(await readFile(file, 'utf8')))) {
  for (const error of validate.errors) {
    console.error(`${file}${error.instancePath}: ${error.message}`);
  }
  process.exit(1);
}
console.log(`${file}: valid`);
