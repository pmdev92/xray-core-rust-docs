---
title: ShadowSocks Outbound
lang: en-US
---

# ShadowSocks Outbound

ShadowSocks is a lightweight encrypted proxy protocol compatible with most other implementations.

Supports various encryption methods and UDP over TCP (UOT) for improved UDP performance.

## OutboundConfigurationObject

```json
{
  "address": "127.0.0.1",
  "port": 4080,
  "password": "...",
  "method": "...",
  "uot": false,
  "uot_version": 2,
  "uot_is_connect": true
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
> - **Description**: The user password of the ShadowSocks server.

> **`method`**: *string*
> - **Optional**: No
> - **Description**: The encryption method of the ShadowSocks server. All encryption methods are supported.

> **`uot`**: *bool*
> - **Optional**: Yes
> - **Default value**: `false`
> - **Description**: When enabled, UDP over TCP (UOT) is used to improve UDP performance over TCP-based connections.

> **`uot_version`**: `1` | `2`
> - **Optional**: Yes
> - **Default value**: `2`
> - **Description**: UOT version. Version 1 and Version 2 are both supported.

> **`uot_is_connect`**: *bool*
> - **Optional**: Yes
> - **Default value**: `true`
> - **Description**: Whether to use connect mode for UOT.

### Features

- ✅ All encryption methods
- ✅ TCP support
- ✅ UDP support
- ✅ UOT V1 and V2
- ✅ Chainable
