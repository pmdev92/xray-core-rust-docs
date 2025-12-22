# Vless Outbound

VLESS is a stateless lightweight transport protocol, which is divided into inbound and outbound parts, and can be used as a bridge between Xray clients and servers.

Unlike VMess, VLESS does not rely on system time, and the authentication method is also UUID.


## OutboundConfigurationObject

```json
{
  "address": "127.0.0.1",
  "port": 4080,
  "id": "...",
  "flow": "...",
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
- **Description**: The user id of vless server.

> **`flow`**: `""` | `"none"` | `"xtls-rprx-vision"` | `"xtls-rprx-vision-udp443"` 
- **Optional**: Yes
- **Default value**: `""`
- **Description**: Flow control mode, used to select the XTLS algorithm.