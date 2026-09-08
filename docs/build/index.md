---
title: Build Overview
lang: en-US
---

# Build Overview

Xray Core Rust supports building across desktop and mobile platforms.

## Platforms

| Platform | Output | Build Script / Command |
|----------|--------|------------------------|
| **Desktop** (Linux, macOS, Windows) | `xray_bin` binary | `cargo build --release -p xray_bin` |
| **iOS** | `LibXrayCoreRust.xcframework` | `./xray_scripts/apple_build.sh` |
| **Android** | `LibXrayCoreRust.aar` | `./xray_scripts/android_build.sh` |

## Quick Navigation

| Guide | Description |
|-------|-------------|
| [Build](/build/build) | Full build instructions for all platforms |
| [Run](/build/run) | Running the binary with config, verbose mode, version |
| [iOS Library](/build/ios) | Using the generated `.xcframework` |
| [Android Library](/build/android) | Using the generated `.aar` |

## Dependencies

- **Desktop:** Rust, OS-specific compiler tools
- **iOS:** Xcode with command line tools
- **Android:** Android SDK + NDK `28.2.13676358`