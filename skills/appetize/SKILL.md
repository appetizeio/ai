---
name: appetize
description: >-
  Run, inspect and control iOS/Android apps on Appetize cloud devices via the
  appetize CLI. Use when running, testing or debugging a mobile app build
  (.app/.apk) on a simulator/emulator — starting sessions, tapping/typing via
  selectors, taking screenshots. Reach for this whenever a task means exercising
  a mobile app on a real device rather than reading its source: verifying a UI
  change, reproducing a bug report, walking through a signup or checkout flow,
  or answering what is currently on screen — even if Appetize is not mentioned
  by name.
---

# Appetize

Drive an iOS or Android app on a cloud simulator or emulator with the
`appetize` CLI.

This skill only tells you how to load the guide. The CLI serves the guide
itself, so it always matches the installed version.

## 1. Check the CLI is installed

```bash
appetize --version
```

If that fails, install it. Node 22 or later is required.

```bash
npm install -g @appetize/cli
```

## 2. Load the guide before any other command

```bash
appetize skill get
```

Read all of it, then follow it. It ends with a list of topics to load for more
detail. Do not run any other `appetize` command first, and do not rely on what
you remember about the CLI: commands and flags change between releases.

If `appetize skill get` is not a known command, the CLI is too old. Upgrade it,
then load the guide:

```bash
npm install -g @appetize/cli@latest
```

If it is still unknown after upgrading, stop and tell the user.

Human-readable docs: https://docs.appetize.io/ai-agents
