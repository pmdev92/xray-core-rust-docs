---
title: SOCKS5 Inbound
lang: en-US
---

# SOCKS5 Inbound

The SOCKS5 inbound protocol implements the standard SOCKS5 protocol for receiving incoming connections.

The SOCKS5 inbound is useful for local area network or local environments where it listens for incoming connections and provides local proxy services to other programs.

Supports TCP and UDP connections, as well as full cone NAT traversal. Authentication is currently in development.

## InboundConfigurationObject

```json
{
  "listen": "127.0.0.1",
  "port": 4080
}
```

### Parameters

> **`listen`**: *string*
> - **Optional**: No
> - **Description**: The listening address. Must be a valid IPv4 or IPv6 address.

> **`port`**: *number*
> - **Optional**: No
> - **Description**: The listening port number. Must be an available port number.

### Features

- ✅ TCP support
- ✅ UDP support
- ✅ Full Cone NAT
- 🚧 Authentication (in progress)
