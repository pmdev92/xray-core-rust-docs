# Tuic Outbound

Tuic protocol.


## OutboundConfigurationObject

```json
{
  "address": "127.0.0.1",
  "port": 4080,
  "password": "...",
  "uuid": "...",
  "tls_config" : {},
  "heartbeat": "...",
  "congestion_control": "...",
  "udp_relay_mode": "..."
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
- **Description**: The user password of tuic server.

> **`uuid`**: *string*
- **Optional**: No
- **Description**: The user uuid of tuic server.


> **`tls_config`**: [TlsTuicObject](#tlstuicobject)
- **Optional**: No
- **Description**: Tls config of tuic connection.


> **`heartbeat`**: *string*
- **Optional**: Yes
- **Default value**: `10s`
- **Description**: Tuic heartbeat.

> **`congestion_control`**: `"bbr"` | `"cubic"` | `"newreno"`
- **Optional**: Yes
- **Default value**: `bbr`
- **Description**: Quic congestion control to use.

> **`udp_relay_mode`**: `"native"` | `"quic"`
- **Optional**: Yes
- **Default value**: `native`
- **Description**: Tuic udp relay mode to use.



## TlsTuicObject

```json
{
  "server_name": "...",
  "verify": "...",
  "alpn": "...",
  "disable_sni": "...",
  "zero_rtt" : "...",
}
```

> **`server_name`**: *string*
- **Optional**: No
- **Description**: The server sni.

> **`verify`**: *bool*
- **Optional**: Yes
- **Default value**: `true`
- **Description**: Whether to allow insecure Tls connections.

> **`alpn`**: *[ string ]*
- **Optional**: Yes
- **Default value**: ``
- **Description**: An array of strings specifying the ALPN values used in Tls handshakes.

> **`disable_sni`**: *bool*
- **Optional**: Yes
- **Default value**: `false`
- **Description**: Tls disable sni enable flag.

> **`zero_rtt`**: *bool*
- **Optional**: Yes
- **Default value**: `false`
- **Description**: Tls zero rtt enable flag.