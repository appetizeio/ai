# Appetize for AI agents

> [!WARNING]
> **Alpha.** The plugins and skills here have not been tested in every agent
> yet, and install steps may change. Please
> [report anything that does not work](https://github.com/appetizeio/ai/issues).

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

## What the plugin runs and sends

The plugin has no hooks, MCP servers or scripts of its own. Its skill tells
your agent to:

- install [`@appetize/cli`](https://www.npmjs.com/package/@appetize/cli) from
  npm with `npm install -g` if it is missing
- run `appetize` commands, which connect to
  [Appetize](https://appetize.io) to start cloud devices, upload app builds you
  choose and stream device screenshots, logs and network traffic back

The CLI uses `APPETIZE_API_TOKEN` from your environment when it is set. See the
[Appetize security and privacy page](https://appetize.io/security-privacy) for how Appetize
handles that data.

## License

[MIT](LICENSE)
