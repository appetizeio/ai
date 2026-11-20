# Appetize for AI agents

Agent plugins and skills for [Appetize](https://appetize.io), which runs iOS
and Android apps on cloud simulators and emulators.

## Install the plugin

The `appetize` plugin bundles everything in this repo for a coding agent.

### Claude Code

Add this repo as a marketplace, then install the plugin from it:

```text
/plugin marketplace add appetizeio/ai
/plugin install appetize@appetize
```

### Codex

Add this repo as a marketplace:

```bash
codex plugin marketplace add appetizeio/ai
```

Then run `codex`, open `/plugins` and install `appetize`. Start a new session
to use it.

### Cursor

Install `appetize` from the Cursor Marketplace, or run this in chat:

```text
/add-plugin appetize
```

## Install a skill

For an agent without plugin support, install skills on their own.

With [`skills`](https://skills.sh):

```bash
npx skills add appetizeio/ai
```

With the [GitHub CLI](https://cli.github.com):

```bash
gh skill install appetizeio/ai
```

Both install for the coding agents you choose, such as Claude Code, Codex,
Cursor and GitHub Copilot.

## Skills

### `appetize-cli`

Teaches a coding agent to run, inspect and control a mobile app with the
[`appetize` CLI](https://docs.appetize.io/ai-agents). The skill is a thin
pointer: it has the agent install the CLI and load the guide with
`appetize skill get`, so the guide always matches the installed CLI version.

## License

[MIT](LICENSE)
