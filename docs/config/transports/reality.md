# RealityObject

```json
{
  "server_name": "...",
  "verify": "...",
  "public_key" : "...",
  "short_id": "...",
  "version_x": "...",
  "version_y": "...",
  "version_z": "...",
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

> **`public_key`**: *string*
- **Optional**: No
- **Description**: The public key that corresponds to the private key on the server.

> **`short_id`**: *string*
- **Optional**: No
- **Description**: The bootstrapping path and query params of the spider.

> **`version_x`**: *number*
- **Optional**: Yes
- **Description**: Minimal accepted version of the Xray client, specified in `x.y.z`.

> **`version_y`**: *number*
- **Optional**: Yes
- **Description**: Minimal accepted version of the Xray client, specified in `x.y.z`.

> **`version_z`**: *number*
- **Optional**: Yes
- **Description**: Minimal accepted version of the Xray client, specified in `x.y.z`.

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
