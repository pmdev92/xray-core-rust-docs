---
title: WebSocket Transport
lang: en-US
---

# WebSocket Transport

WebSocket transport wraps data in WebSocket frames, providing compatibility with systems that allow WebSocket connections.

## WebSocketObject

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
> - **Description**: The WebSocket host header. Used for virtual host routing on the server side.

> **`path`**: *string*
> - **Optional**: Yes
> - **Default value**: `"/"`
> - **Description**: The WebSocket path. Used to route WebSocket connections to the correct endpoint on the server.
