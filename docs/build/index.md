---
title: Build and Run
lang: en-US
---

# Build and Run

This guide explains how to build and run Xray Core Rust from source, as well as how to build release binaries and mobile libraries.

## Requirements

- Rust 
- Dependencies (for some platforms):
  - Linux: `llvm-dev`, `libclang-dev`, `clang`, `pkg-config`, `libssl-dev`, `protobuf-compiler`, `make`, `build-essential`
  - macOS: `llvm`, `protobuf` (via Homebrew)
  - Android build: `make`, `unzip`, `curl`, Android SDK + NDK

## Development Build

Clone and build the binary:

```bash
git clone https://github.com/pmdev92/xray-core-rust.git
cd xray-core-rust
cargo build
```

Run with a config file:

```bash
# Default command (run with config)
./target/debug/xray_bin

# Explicit run with config path
cargo run -- run -c /path/to/config.json

# Run with verbose logging
cargo run -- run -c config.json -v

# Show version
cargo run -- version
```

## Release Build

Build optimized release binary:

```bash
cargo build --release -p xray_bin
```

Cross-compile for Linux musl (static binary):

```bash
# Install cross
cargo install cross

# Build for Linux targets
cross build --release --target x86_64-unknown-linux-musl -p xray_bin
cross build --release --target aarch64-unknown-linux-musl -p xray_bin
```

Cross-compile for Windows:

```bash
cross build --release --target x86_64-pc-windows-gnu -p xray_bin
```

## Mobile Library Builds

### iOS (Apple Framework)

Requires macOS and Xcode:

```bash
./xray_scripts/apple_build.sh
```

Output: `./build/LibXrayCoreRust.xcframework`

### Android (AAR)

Requires Android SDK + NDK (`28.2.13676358`):

```bash
export ANDROID_HOME=/path/to/android/sdk
export ANDROID_NDK_HOME=/path/to/android/ndk/28.2.13676358
export OPENSSL_DIR=$(pkg-config --variable=prefix openssl)

./xray_scripts/android_build.sh all
```

Output: `./build/LibXrayCoreRust.aar`


Check formatting and tests:

```bash
cargo fmt --all -- --check
cargo check --workspace --all-targets
cargo test --workspace
```

## Config File Path

The binary expects a JSON config file at `config.json` by default. Use `-c` to specify a different path:

```bash
cargo run -- run -c my_config.json
```

If the config file is not found, the binary prints:

```
can not open the config path in 'config.json'
```

## Running Without Arguments

If called without subcommands, the binary defaults to the `run` command with `config.json`:

```bash
./target/debug/xray_bin
# Equivalent to:
# ./target/debug/xray_bin run -c config.json
```
