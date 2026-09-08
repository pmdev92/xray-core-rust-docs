---
title: Run
lang: en-US
---

# Run Guide

This guide explains how to run the Xray Core Rust binary on desktop platforms (Linux, macOS, Windows).

## Commands

The binary supports the following commands:

| Command | Description |
|---------|-------------|
| `run` | Run the proxy with a config file (default command) |
| `version` | Show the current version |

## Run

### Start with Default Config

If no argument is given, the binary defaults to the `run` command with `config.json`:

```bash
./target/release/xray_bin
```

This is equivalent to:

```bash
./target/release/xray_bin run -c config.json
```

### Start with a Specific Config

Use `-c` to specify a config file path:

```bash
./target/release/xray_bin run -c /path/to/config.json
```

### Verbose Logging

Add `-v` for verbose logging:

```bash
./target/release/xray_bin run -c config.json -v
```

### Show Version

```bash
./target/release/xray_bin version
```

Output:

```
xray core rust version is <VERSION>
```

## Development Mode

When developing, you can run directly with `cargo`:

```bash
# Default config (config.json)
cargo run

# With a specific config
cargo run -- run -c /path/to/config.json

# With verbose logging
cargo run -- run -c config.json -v

# Show version
cargo run -- version
```

## Config File

The binary reads a JSON config file at `config.json` by default. The config structure:

```json
{
  "log": {},
  "observations": [],
  "inbounds": [],
  "outbounds": [],
  "router": {},
  "stats": {}
}
```

## Error Handling

If the config file is not found, the binary prints:

```
can not open the config path in 'config.json'
```

Make sure the config file exists at the specified path.

## Stopping the Proxy

Press `Ctrl+C` to gracefully stop the proxy and shut down the core.