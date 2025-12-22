# Vmess Outbound

Vmess is an encrypted transport protocol commonly used as a bridge between Xray clients and servers.


## OutboundConfigurationObject

```json
{
  "address": "127.0.0.1",
  "port": 4080,
  "id": "...",
  "security": "...",
}
```

> **`address`**: *string*
- **Optional**: No
- **Description**: The server address.


> **`port`**: *number*
- **Optional**: No
- **Description**: The server port.


> **`id`**: *string*
- **Optional**: No
- **Description**: The user id of vmess server.

> **`security`**: `"none"` | `"zero"` | `"auto"` | `"aes-128-gcm"` | `"chacha20-poly1305"` 
- **Optional**: Yes
- **Default value**: `""`
- **Description**: The encryption method. The client will use the configured encryption method to send data, and the server will automatically recognize it without the need for configuration.