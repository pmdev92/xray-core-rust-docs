---
title: VMess Outbound
lang: en-US
---

# VMess Outbound

VMess is an encrypted transport protocol commonly used as a bridge between Xray clients and servers.

VMess uses AEAD encryption for secure communication and supports various encryption methods.

## OutboundConfigurationObject

```json
{
  "address": "127.0.0.1",
  "port": 4080,
  "id": "...",
  "security": "auto"
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
> - **Description**: The user ID (UUID) of the VMess server.

> **`security`**: `"none"` | `"zero"` | `"auto"` | `"aes-128-gcm"` | `"chacha20-poly1305"`
> - **Optional**: Yes
> - **Default value**: `"auto"`
> - **Description**: The encryption method. The client uses the configured encryption method to send data, and the server automatically recognizes it. `auto` lets the server determine the encryption method. `zero` uses the zero-round-trip method. `none` disables encryption.

### Transport Requirement

> **Warning**: VMess outbound requires a `stream_settings` with a transport protocol (TCP, WebSocket, gRPC, etc.) and security (TLS or Reality) configured.

### Features

- ✅ AEAD encryption
- ✅ TCP support
- ✅ UDP support
- ✅ Chainable
