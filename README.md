# xray-core-rust-docs

Implementation of the xray-core and sing-box cores in the Rust programming language, optimized for operating systems such as iOS, Android, and more.

## Overview

This project provides a complete documentation for the configuration of **Xray Core Rust**, a universal proxy platform written in Rust.

## Features

- ✅ Inbound Protocols: SOCKS5, HTTP
- ✅ Outbound Protocols: Block, Direct (Freedom), SOCKS5, ShadowSocks, Trojan, VLESS, VMess, Hysteria2, TUIC
- ✅ Transport Protocols: TCP, WebSocket, HTTP Upgrade, XHTTP, HTTP/2, gRPC
- ✅ Security Protocols: TLS, Reality
- ✅ Routing with rules and balancers
- ✅ Traffic Observation (Brust, Normal)
- ✅ Statistics
- ✅ Memory Optimized (iOS 50MB Memory Limit)
- ✅ Sniffing (QUIC, TLS, HTTP)
- ✅ GeoIP / GeoSite

## Quick Start

```bash
git clone https://github.com/pmdev92/xray-core-rust.git
cd xray-core-rust
cargo build
./target/debug/xray-core-rust run -c CONFIG_PATH
```

## Config Documentation

See the [Configuration Reference](/config) for detailed information about all configuration options.

## Credits

- [XTLS/Xray-core](https://github.com/XTLS/Xray-core)
- [SagerNet/sing-box](https://github.com/SagerNet/sing-box)
- [Qv2ray/v2ray-rust](https://github.com/Qv2ray/v2ray-rust)
