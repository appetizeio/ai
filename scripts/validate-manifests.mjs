// Checks that plugin manifests share a version and their icons exist.
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';

const MANIFESTS = [
  '.claude-plugin/plugin.json',
  '.codex-plugin/plugin.json',
  '.cursor-plugin/plugin.json',
];

const errors = [];
const versions = new Map();

for (const file of MANIFESTS.filter((path) => existsSync(path))) {
  const manifest = JSON.parse(await readFile(file, 'utf8'));
  versions.set(file, manifest.version);

  const icons = [
    manifest.icon,
    manifest.logo,
    manifest.interface?.logo,
    manifest.interface?.logoDark,
    manifest.interface?.composerIcon,
    manifest.interface?.composerIconDark,
  ];
  for (const icon of icons) {
    if (icon && !/^https?:/.test(icon) && !existsSync(icon)) {
      errors.push(`${file}: missing ${icon}`);
    }
  }
}

if (new Set(versions.values()).size > 1) {
  for (const [file, version] of versions) {
    errors.push(`${file}: version ${version} differs`);
  }
}

if (errors.length > 0) {
  for (const error of errors) console.error(error);
  process.exit(1);
}
console.log(`${versions.size} manifest(s) consistent`);
