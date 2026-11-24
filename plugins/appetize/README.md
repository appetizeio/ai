# Appetize plugin

Lets a coding agent run, inspect and control iOS and Android apps on
[Appetize](https://appetize.io) cloud simulators and emulators.

The plugin carries one skill, `appetize-cli`. The skill is a thin pointer: it
has the agent install the [`appetize` CLI](https://docs.appetize.io/ai-agents)
and load its guide with `appetize skill get`, so the guide always matches the
installed CLI version.

## Install

In Claude Code:

```text
/plugin install appetize --marketplace appetizeio/ai
```

See the [repo README](https://github.com/appetizeio/ai#install-the-plugin) for Codex and Cursor.

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
