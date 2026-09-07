---
title: gRPC Transport
lang: en-US
---

# gRPC Transport

gRPC transport uses the gRPC protocol for communication. It is commonly used with gRPC-based proxy services and supports service name-based routing.

## GrpcObject

```json
{
  "service_name": ""
}
```

### Parameters

> **`service_name`**: *string*
> - **Optional**: Yes
> - **Default value**: `""`
> - **Description**: The gRPC service name. Used to route gRPC requests to the correct service endpoint on the server.

> **Note**: The `host` and `path` parameters are implicitly set based on the gRPC protocol conventions.
