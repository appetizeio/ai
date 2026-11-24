// Validates each skill's frontmatter against the Agent Skills spec.
import Ajv from 'ajv';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from 'yaml';

const SKILLS_DIR = 'plugins/appetize/skills';
const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;

const schema = JSON.parse(await readFile('schemas/skill.schema.json', 'utf8'));
const validate = new Ajv({ allErrors: true }).compile(schema);

const entries = await readdir(SKILLS_DIR, { withFileTypes: true });
const skills = entries.filter((entry) => entry.isDirectory());
const errors = [];

for (const { name } of skills) {
  const file = join(SKILLS_DIR, name, 'SKILL.md');
  const match = FRONTMATTER.exec(await readFile(file, 'utf8'));
  if (!match) {
    errors.push(`${file}: no frontmatter`);
    continue;
  }
  const frontmatter = parse(match[1]);
  if (!validate(frontmatter)) {
    for (const error of validate.errors) {
      errors.push(`${file}${error.instancePath}: ${error.message}`);
    }
  } else if (frontmatter.name !== name) {
    errors.push(`${file}: name must match its folder, ${name}`);
  }
}

if (skills.length === 0) errors.push(`${SKILLS_DIR}: no skills found`);

if (errors.length > 0) {
  for (const error of errors) console.error(error);
  process.exit(1);
}
console.log(`${skills.length} skill(s) valid`);
