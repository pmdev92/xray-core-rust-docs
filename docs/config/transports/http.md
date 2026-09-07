---
title: HTTP/2 Transport
lang: en-US
---

# HTTP/2 Transport

HTTP/2 transport uses the HTTP/2 protocol for communication. It supports host and path-based routing.

## HttpObject

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
> - **Description**: The HTTP/2 host header. Used for virtual host routing on the server side.

> **`path`**: *string*
> - **Optional**: Yes
> - **Default value**: `"/"`
> - **Description**: The HTTP/2 path. Used to route HTTP/2 requests to the correct endpoint on the server.
