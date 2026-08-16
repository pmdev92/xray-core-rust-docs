# TcpObject

```json
{
  "type": "...",
  "request": {}
}
```

### Parameters

> **`type`**:  `"none"` | `"http"`
- **Optional**: Yes
- **Default value**: `"none"`
- **Description**: header obfuscation.

> **`request`**: [TcpRequestObject](#TcpRequestObject)
- **Optional**: Yes
- **Description**: Whether to allow insecure Tls connections.

## TcpRequestObject

```json
{
  "version": "...",
  "method": "...",
  "path": "...",
  "headers": "..."
}
```

### Parameters

> **`version`**: *string*
- **Optional**: Yes
- **Default value**: `"1.1"`
- **Description**: HTTP version.

> **`method`**: *string*
- **Optional**: Yes
- **Default value**: `"GET"`
- **Description**: HTTP method.

> **`path`**: *string*
- **Optional**: Yes
- **Default value**: `"/"`
- **Description**: HTTP path.

> **`headers`**: *map {string, [ string ]}*
- **Optional**: Yes
- **Description**: HTTP header, a key-value pair, each key represents the name of an HTTP header, and the corresponding value is an array.
