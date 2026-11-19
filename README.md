# Appetize for AI agents

Agent skills and plugins for [Appetize](https://appetize.io), which runs iOS
and Android apps on cloud simulators and emulators.

## The `appetize` skill

Teaches a coding agent to run, inspect and control a mobile app with the
[`appetize` CLI](https://docs.appetize.io/ai-agents). The skill is a thin
pointer: it has the agent install the CLI and load the guide with
`appetize skill get`, so the guide always matches the installed CLI version.

## Install

With [`skills`](https://skills.sh):

```bash
npx skills add appetizeio/ai
```

With the [GitHub CLI](https://cli.github.com):

```bash
gh skill install appetizeio/ai
```

Both install the skill for the coding agents you choose, such as Claude Code,
Codex, Cursor and GitHub Copilot.

## License

[MIT](LICENSE)
