---
title: HTTP Upgrade Transport
lang: en-US
---

# HTTP Upgrade Transport

HTTP Upgrade transport uses the HTTP Upgrade mechanism to establish a connection from HTTP to WebSocket. This is useful for bypassing firewalls that allow HTTP traffic.

## HttpUpgradeObject

```json
{
  "host": "",
  "path": "/"
}
```

### Parameters

> **`host`**: *string*
> - **Optional**: Yes
> - **Default value**: `""`
> - **Description**: The HTTP host header used in the upgrade request.

> **`path`**: *string*
> - **Optional**: Yes
> - **Default value**: `"/"`
> - **Description**: The HTTP path used in the upgrade request.
