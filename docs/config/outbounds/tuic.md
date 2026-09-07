---
title: TUIC Outbound
lang: en-US
---

# TUIC Outbound

TUIC is a QUIC-based protocol that provides high-performance proxy connections with built-in encryption and congestion control.

TUIC uses the QUIC transport protocol and supports various congestion control algorithms and UDP relay modes.

## OutboundConfigurationObject

```json
{
  "address": "127.0.0.1",
  "port": 4080,
  "password": "...",
  "uuid": "...",
  "tls_config": {},
  "heartbeat": "10s",
  "congestion_control": "bbr",
  "udp_relay_mode": "native"
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
> - **Description**: The user password of the TUIC server.

> **`uuid`**: *string*
> - **Optional**: No
> - **Description**: The user UUID of the TUIC server.

> **`tls_config`**: [TlsTuicObject](#tlstuicobject)
> - **Optional**: No
> - **Description**: TLS configuration for the TUIC connection.

> **`heartbeat`**: *string*
> - **Optional**: Yes
> - **Default value**: `"10s"`
> - **Description**: TUIC heartbeat interval for maintaining the connection.

> **`congestion_control`**: `"bbr"` | `"cubic"` | `"newreno"`
> - **Optional**: Yes
> - **Default value**: `"bbr"`
> - **Description**: QUIC congestion control algorithm to use.

> **`udp_relay_mode`**: `"native"` | `"quic"`
> - **Optional**: Yes
> - **Default value**: `"native"`
> - **Description**: TUIC UDP relay mode. `native` uses native QUIC UDP relay, `quic` uses QUIC-based relay.

### TlsTuicObject

```json
{
  "server_name": "...",
  "verify": true,
  "alpn": [],
  "disable_sni": false,
  "zero_rtt": false
}
```

> **`server_name`**: *string*
> - **Optional**: No
> - **Description**: The server SNI (Server Name Indication).

> **`verify`**: *bool*
> - **Optional**: Yes
> - **Default value**: `true`
> - **Description**: Whether to verify TLS certificates. Setting to `false` allows insecure TLS connections.

> **`alpn`**: `[string]`
> - **Optional**: Yes
> - **Default value**: `""`
> - **Description**: An array of strings specifying the ALPN (Application-Layer Protocol Negotiation) values used in TLS handshakes.

> **`disable_sni`**: *bool*
> - **Optional**: Yes
> - **Default value**: `false`
> - **Description**: Whether to disable SNI (Server Name Indication) in TLS handshakes.

> **`zero_rtt`**: *bool*
> - **Optional**: Yes
> - **Default value**: `false`
> - **Description**: Whether to enable TLS 0-RTT (Zero Round Trip Time) resumption for faster connections.

### Features

- ✅ TCP support
- ✅ UDP support
- ✅ Chainable
- ✅ Built-in encryption
- ✅ Multiple congestion control algorithms
