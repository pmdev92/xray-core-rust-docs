---
title: TCP Transport
lang: en-US
---

# TCP Transport

TCP transport is the basic transport method. It supports optional HTTP header obfuscation to bypass simple DPI (Deep Packet Inspection) firewalls.

## TcpObject

```json
{
  "type": "none",
  "request": {}
}
```

### Parameters

> **`type`**: `"none"` | `"http"`
> - **Optional**: Yes
> - **Default value**: `"none"`
> - **Description**: Header obfuscation type. `none` means no obfuscation. `http` sends data wrapped in HTTP headers to bypass DPI.

> **`request`**: [TcpRequestObject](#tcprequestobject)
> - **Optional**: Yes
> - **Description**: The HTTP request configuration used when `type` is `"http"`.

### TcpRequestObject

```json
{
  "version": "1.1",
  "method": "GET",
  "path": "/",
  "headers": {}
}
```

> **`version`**: *string*
> - **Optional**: Yes
> - **Default value**: `"1.1"`
> - **Description**: HTTP version used in the request.

> **`method`**: *string*
> - **Optional**: Yes
> - **Default value**: `"GET"`
> - **Description**: HTTP method used in the request (GET, POST, etc.).

> **`path`**: *string*
> - **Optional**: Yes
> - **Default value**: `"/"`
> - **Description**: HTTP path used in the request.

> **`headers`**: *map {string, [string]}*
> - **Optional**: Yes
> - **Description**: HTTP headers as key-value pairs. Each key represents a header name, and the value is an array of strings for that header's values.
