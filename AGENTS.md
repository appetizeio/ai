# AGENTS.md

## Versioning

Every PR that changes a skill, a plugin manifest or `assets/` bumps `version` in every plugin manifest, to the same value. Use semver: patch for wording, minor for a new skill or capability, major for a rename or removal.

Agents only pick up a change when the version changes. A PR that forgets the bump ships nothing.

Plugin manifests:

- `.claude-plugin/plugin.json`

## Brand assets

`assets/icon.svg` is the Appetize mark and `assets/icon.png` is its 1024px render. Use these for plugin manifests and directory submissions; do not add other copies.
