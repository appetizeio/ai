# AGENTS.md

## Versioning

Every PR that changes a skill or a plugin manifest bumps `version` in every plugin manifest, to the same value. Use semver: patch for wording, minor for a new skill or capability, major for a rename or removal.

Agents only pick up a change when the version changes. A PR that forgets the bump ships nothing.

Plugin manifests:

- `.claude-plugin/plugin.json`
