---
title: SOCKS5 Outbound
lang: en-US
---

# SOCKS5 Outbound

The SOCKS5 outbound protocol implements the standard SOCKS5 protocol for proxying connections.

Supports TCP and UDP connections, as well as username/password authentication (AUTH).

## OutboundConfigurationObject

```json
{
  "address": "127.0.0.1",
  "port": 4080,
  "username": "...",
  "password": "..."
}
```

### Parameters

> **`address`**: *string*
> - **Optional**: No
> - **Description**: The SOCKS5 server address.

> **`port`**: *number*
> - **Optional**: No
> - **Description**: The SOCKS5 server port number.

> **`username`**: *string*
> - **Optional**: Yes
> - **Description**: Username for SOCKS5 authentication.

> **`password`**: *string*
> - **Optional**: Yes
> - **Description**: Password for SOCKS5 authentication.

### Features

- ✅ TCP support
- ✅ UDP support
- ✅ Authentication (user:password)
- ✅ Chainable
