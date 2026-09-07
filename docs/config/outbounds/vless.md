---
title: VLESS Outbound
lang: en-US
---

# VLESS Outbound

VLESS is a stateless lightweight transport protocol, divided into inbound and outbound parts, used as a bridge between Xray clients and servers.

Unlike VMess, VLESS does not rely on system time. Authentication is done using UUID.

VLESS supports various flow modes including XTLS-Vision for enhanced security and obfuscation.

## OutboundConfigurationObject

```json
{
  "address": "127.0.0.1",
  "port": 4080,
  "id": "...",
  "flow": "",
  "encryption": ""
}
```

### Parameters

> **`address`**: *string*
> - **Optional**: No
> - **Description**: The server address.

> **`port`**: *number*
> - **Optional**: No
> - **Description**: The server port number.

> **`id`**: *string*
> - **Optional**: No
> - **Description**: The user UUID of the VLESS server.

> **`flow`**: `""` | `"none"` | `"xtls-rprx-vision"` | `"xtls-rprx-vision-udp443"`
> - **Optional**: Yes
> - **Default value**: `""`
> - **Description**: Flow control mode, used to select the XTLS algorithm. `xtls-rprx-vision` provides enhanced security. `xtls-rprx-vision-udp443` enables UDP 443 support.

> **`encryption`**: *string*
> - **Optional**: Yes
> - **Default value**: `""`
> - **Description**: VLESS encryption settings. Can be `"none"` or a detailed encryption configuration string.

#### VLESS Encryption Configuration

The encryption field can be configured in two ways:

**1. Simple (No Encryption)**
```
"none" or ""
```
Both values disable VLESS encryption.

**2. Detailed Encryption Configuration**

A detailed configuration string with fields separated by dots (`.`):
```
mlkem768x25519plus.native.0rtt.100-111-1111.75-0-111.50-0-3333.ptjHQxBQxTJ9MWr2cd5qWIflBSACHOevTauCQwa_71U
```

- **1st block** - Handshake method: `mlkem768x25519plus` (post-quantum key exchange). Must match server and client.
- **2nd block** - Traffic appearance: `native` (raw packets) | `xorpub` (obfuscated public key) | `random` (fully random, similar to VMess/Shadowsocks). Must match server and client.
- **3rd block** - Session resumption: `0rtt` (fast resumption) or `1rtt` (forced full handshake).
- **Padding blocks** - Optional post-connection obfuscation. Format: `probability-min-max.delay.delay`. First block must have 100% probability with min length > 0. Default: `100-111-1111.75-0-111.50-0-3333`.
- **Last block** - Server authentication parameter. Must match server. Uses post-quantum algorithms (`mlkem768`) to prevent future quantum computer attacks.

### Transport Requirement

> **Warning**: VLESS outbound requires a `stream_settings` with a transport protocol (TCP, WebSocket, gRPC, etc.) and security (TLS or Reality) configured.

### Features

- ✅ TCP support
- ✅ UDP support
- ✅ Flow modes (XTLS-Vision)
- ✅ Chainable
- ✅ Post-quantum encryption
