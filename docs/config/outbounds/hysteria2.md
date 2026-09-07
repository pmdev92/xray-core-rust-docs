---
title: Hysteria2 Outbound
lang: en-US
---

# Hysteria2 Outbound

Hysteria2 is a QUIC-based protocol designed for high-performance proxy connections with built-in obfuscation and bandwidth management.

Hysteria2 uses the QUIC transport protocol and supports various obfuscation types and bandwidth limiting features.

## OutboundConfigurationObject

```json
{
  "address": "127.0.0.1",
  "port": 4080,
  "password": "...",
  "obfs_type": "",
  "obfs_password": "",
  "tls_config": {},
  "hop_ports": "",
  "hop_intervals": 10,
  "up_bandwidth": 10000000,
  "down_bandwidth": 10000000,
  "quic_max_idle_timeout": 30,
  "quic_max_keep_alive_period": 10,
  "gecko_min_packet_len": 0,
  "gecko_max_packet_len": 0
}
```

### Parameters

> **`address`**: *string*
> - **Optional**: No
> - **Description**: The server address.

> **`port`**: *number*
> - **Optional**: No
> - **Description**: The server port number.

> **`password`**: *string*
> - **Optional**: No
> - **Description**: The password of the Hysteria2 server.

> **`obfs_type`**: `""` | `"salamander"`
> - **Optional**: Yes
> - **Default value**: `""`
> - **Description**: The obfuscation type. Empty string means no obfuscation. `salamander` provides salamander obfuscation.

> **`obfs_password`**: *string*
> - **Optional**: Yes
> - **Default value**: `""`
> - **Description**: The obfuscation password used when `obfs_type` is set.

> **`tls_config`**: [TlsHysteria2Object](#tlshysteria2object)
> - **Optional**: No
> - **Description**: TLS configuration for the Hysteria2 connection.

> **`hop_ports`**: *string*
> - **Optional**: Yes
> - **Description**: The hop ports for multi-hop routing configuration.

> **`hop_intervals`**: *u32*
> - **Optional**: Yes
> - **Description**: The interval between hops in seconds.

> **`up_bandwidth`**: *u64*
> - **Optional**: Yes
> - **Description**: The upload bandwidth limit in bytes per second.

> **`down_bandwidth`**: *u64*
> - **Optional**: Yes
> - **Description**: The download bandwidth limit in bytes per second.

> **`quic_max_idle_timeout`**: *u64*
> - **Optional**: Yes
> - **Description**: The maximum idle timeout for QUIC connections in seconds.

> **`quic_max_keep_alive_period`**: *u64*
> - **Optional**: Yes
> - **Description**: The maximum keep-alive period for QUIC connections in seconds.

> **`gecko_min_packet_len`**: *usize*
> - **Optional**: Yes
> - **Description**: Minimum packet length for Gecko obfuscation mode.

> **`gecko_max_packet_len`**: *usize*
> - **Optional**: Yes
> - **Description**: Maximum packet length for Gecko obfuscation mode.

### TlsHysteria2Object

```json
{
  "server_name": "...",
  "verify": true
}
```

> **`server_name`**: *string*
> - **Optional**: No
> - **Description**: The server SNI (Server Name Indication).

> **`verify`**: *bool*
> - **Optional**: Yes
> - **Default value**: `true`
> - **Description**: Whether to verify TLS certificates. Setting to `false` allows insecure TLS connections.

### Features

- ✅ TCP support
- ✅ UDP support
- ✅ Chainable
- ✅ Built-in obfuscation (Salamander, Gecko)
- ✅ Bandwidth management
- ✅ Multi-hop support
