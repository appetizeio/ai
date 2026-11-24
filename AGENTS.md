# AGENTS.md

## Validation

Run `pnpm install` once, then `pnpm validate` before you push. It checks the skills and every plugin manifest, and is the same check CI runs. `pnpm run` lists the individual `validate:*` scripts.

`schemas/cursor-plugin.schema.json` is an unmodified copy from `cursor/plugins` at commit `aaeb0ea`. Replace it with a newer copy to pick up schema changes; do not edit it.

## Versioning

Bump `version` only when users would have to download the plugin again to get the change: a skill changed, or a manifest field an agent or its marketplace reads changed. Do not bump for docs, CI, or adding a manifest for another agent.

When you bump, set every plugin manifest to the same value. Use semver: patch for wording, minor for a new skill or capability, major for a rename or removal.

Agents only pick up a change when the version changes, so a change that needs a bump and lacks one ships nothing.

Plugin manifests:

- `.claude-plugin/plugin.json`
- `.codex-plugin/plugin.json`
- `.cursor-plugin/plugin.json`

## Brand assets

`assets/` holds unmodified exports from the "Logos & design assets" shared drive, under Brand > Logo. Do not edit or redraw them; pull a new export instead.

`assets/marketplace/` holds images for directory and marketplace listings, which want a square logo on a background plate. `profile.png` is `Socials/Twitter Profile.png` from the same drive.
