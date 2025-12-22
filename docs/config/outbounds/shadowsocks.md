# ShadoSocks Outbound

Shadowsocks protocol is compatible with most other implementations.


## OutboundConfigurationObject

```json
{
  "address": "127.0.0.1",
  "port": 4080,
  "password": "...",
  "method": "...",
  "uot": "...",
  "uot_version": "...",
  "uot_is_connect": "..."
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
- **Description**: The user password of shadowsocks server.

> **`method`**: *string*
- **Optional**: No
- **Description**: The user method of shadowsocks server.

> **`uot`**: *bool*
- **Optional**: Yes
- **Default value**: `false`
- **Description**: When enabled, UDP over TCP (UOT) will be used.

> **`uot_version`**: `1` | `2` 
- **Optional**: Yes
- **Default value**: `2`
- **Description**: UOT version.

> **`uot_is_connect`**: *bool*
- **Optional**: Yes
- **Default value**: `true`
- **Description**: UOT is connect.
