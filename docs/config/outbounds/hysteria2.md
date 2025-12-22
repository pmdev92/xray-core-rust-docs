# Hysteria2 Outbound

Hysteria2 protocol.

## OutboundConfigurationObject

```json
{
  "address": "127.0.0.1",
  "port": 4080,
  "password": "...",
  "obfs_type:": "...",
  "obfs_password:": "...",
  "tls_config" : {}
}
```

> **`address`**: *string*
- **Optional**: No
- **Description**: The server address.


> **`port`**: *number*
- **Optional**: No
- **Description**: The server port.

> **`password`**: *string*
- **Optional**: No
- **Description**: The user password of hysteria2 server.


> **`tls_config`**: [TlsHysteria2Object](#tlshysteria2object)
- **Optional**: No
- **Description**: Tls config of hysteria2 connection.


> **`heartbeat`**: *string*
- **Optional**: Yes
- **Default value**: `10s`
- **Description**: Tuic heartbeat.

> **`obfs_type`**: `""` | `"salamander"`
- **Optional**: Yes
- **Default value**: `bbr`
- **Description**: Hysteria2 obfs type.

> **`obfs_password`**: *string*
- **Optional**: Yes
- **Default value**: `""`
- **Description**: Hysteria2 obfs password.



## TlsHysteria2Object

```json
{
  "server_name": "...",
  "verify": "..."
}
```

> **`server_name`**: *string*
- **Optional**: No
- **Description**: The server sni.

> **`verify`**: *bool*
- **Optional**: Yes
- **Default value**: `true`
- **Description**: Whether to allow insecure Tls connections.
