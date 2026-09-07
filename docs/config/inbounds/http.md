---
title: HTTP Inbound
lang: en-US
---

# HTTP Inbound

The HTTP inbound protocol implements an HTTP-based proxy server.

The HTTP inbound is most useful for listening on a local network or local machine to provide proxy services to other programs.

> **Tip**: HTTP proxy can only proxy TCP protocol and cannot handle protocols based on UDP.

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

- ✅ TCP support only
- ❌ UDP not supported
