---
title: Trojan Outbound
lang: en-US
---

# Trojan Outbound

Trojan is a protocol designed to disguise proxy traffic as HTTPS traffic, providing high compatibility with HTTPS servers.

## OutboundConfigurationObject

```json
{
  "address": "127.0.0.1",
  "port": 4080,
  "password": "..."
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
> - **Description**: The password of the Trojan server.

### Transport Requirement

> **Warning**: Trojan outbound requires a `stream_settings` with a transport protocol (TCP, WebSocket, gRPC, etc.) and TLS security configured.

### Features

- ✅ TCP support
- ✅ UDP support
- ✅ Chainable
- ✅ HTTPS disguise
