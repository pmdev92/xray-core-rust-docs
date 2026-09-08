---
title: Build
lang: en-US
---

# Build

Overview of building Xray Core Rust across platforms.

- **Desktop:** Linux, macOS, Windows → Executable binary (`xray_bin`)
- **Mobile:** iOS → `.xcframework`; Android → `.aar`
- **Development:** `cargo build`, `cargo run`

This guide explains how to build Xray Core Rust from source for different platforms.

## Prerequisites

### Install Rust

**Linux/macOS:**

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

**Windows:**

Download and run `rustup-init.exe` from https://www.rust-lang.org/tools/install, then restart your terminal.

Verify installation:

```bash
rustc --version
cargo --version
```

## Desktop Builds

### Linux

**Install dependencies:**

```bash
sudo apt-get update
sudo apt-get install -y llvm-dev libclang-dev clang pkg-config libssl-dev protobuf-compiler
```

**Build:**

```bash
git clone https://github.com/pmdev92/xray-core-rust.git
cd xray-core-rust
cargo build --release -p xray_bin
```

**Output:** `./target/release/xray_bin`

### macOS

No additional dependencies required, macOS provides the necessary compiler toolchain.

**Build:**

```bash
git clone https://github.com/pmdev92/xray-core-rust.git
cd xray-core-rust
cargo build --release -p xray_bin
```

**Output:** `./target/release/xray_bin`

### Windows

**Install dependencies:**

Download and install [Visual Studio](https://visualstudio.microsoft.com/) with the "Desktop development with C++" workload.

**Build:**

```bash
git clone https://github.com/pmdev92/xray-core-rust.git
cd xray-core-rust
cargo build --release -p xray_bin
```

**Output:** `.\target\release\xray_bin.exe`

## Mobile Builds

### iOS

**Requirements:**
- Xcode with command line tools
- Rust

The build script automatically installs required targets (`aarch64-apple-ios`, `x86_64-apple-ios`, `aarch64-apple-ios-sim`, `aarch64-apple-darwin`, `x86_64-apple-darwin`) and `cbindgen`.

**Build:**

```bash
git clone https://github.com/pmdev92/xray-core-rust.git
cd xray-core-rust
./xray_scripts/apple_build.sh
```

**Output:** `./build/LibXrayCoreRust.xcframework`

**Integration:** See [iOS Library Usage](/build/ios)

### Android

**Requirements:**
- Rust
- Android SDK
- Android NDK version: `28.2.13676358`

The build script (`android_build.sh`) automatically installs `cargo-ndk` and the required targets (`aarch64-linux-android`, `armv7-linux-androideabi`, `x86_64-linux-android`, `i686-linux-android`), and downloads `geoip.dat` and `geosite.dat` assets.

**Build:**

```bash
git clone https://github.com/pmdev92/xray-core-rust.git
cd xray-core-rust

export ANDROID_HOME=/path/to/android/sdk
export ANDROID_NDK_HOME=$ANDROID_HOME/ndk/28.2.13676358

./xray_scripts/android_build.sh all
```

**Output:** `./build/LibXrayCoreRust.aar`

**Integration:** See [Android Library Usage](/build/android)

## Run

See [Run Guide](/build/run) for detailed instructions on running the binary on desktop platforms.