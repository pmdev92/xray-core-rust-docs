# TLSObject

```json
{
  "server_name": "...",
  "verify": "...",
  "is_early_data": "...",
  "early_data_len": "...",
  "alpn": "..."
}
```

### Parameters

> **`server_name`**: *string*
- **Optional**: No
- **Description**: The server sni.

> **`verify`**: *bool*
- **Optional**: Yes
- **Default value**: `true`
- **Description**: Whether to allow insecure Tls connections.

> **`is_early_data`**: *bool*
- **Optional**: Yes
- **Default value**: `false`
- **Description**: Tls early data enable flag.

> **`early_data_len`**: *number*
- **Optional**: Yes
- **Default value**: `2000`
- **Description**: Tls early data lenght.

> **`alpn`**: *[ string ]*
- **Optional**: Yes
- **Default value**: ``
- **Description**: An array of strings specifying the ALPN values used in Tls handshakes.
