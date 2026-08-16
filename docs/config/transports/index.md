# Transports

Transports specify how Xray Core Rust communicates with peers.

Transports specify how to achieve stable data transmission. Both ends of a connection often need to specify the same transports protocol to successfully establish a connection. Like, if one end uses WebSocket, the other end must also use WebSocket, or else the connection cannot be established.

## StreamSettingsObject

`StreamSettingsObject` corresponds to the `streamSettings` property in the inbound or outbound config. Each inbound or outbound can be configured with different transport and can use `streamSettings` to specify local configs.

```json
{
  "network": "tcp",
  "security": "none",
  "tcp_settings": {},
  "ws_settings": {},
  "http_upgrade_settings": {},
  "xhttp_settings": {},
  "http_settings": {},
  "grpc_settings": {},
  "tls_settings": {},
  "reality_settings": {}
}
```

### Parameters

> **`network`**: `"tcp"` | `"xhttp"` |  `"ws"` | `"http_upgrade"` | `"grpc"` | `"http"`
- **Optional**: No
- **Description**: The underlying protocol of the transport used by the data stream of the connection.


> **`security`**: `"none"` | `"tls"` |  `"reality"` 
- **Optional**: No
- **Description**: Whether to enable transport layer encryption.

> **`tcp_settings`**: [TcpObject](./tcp.md)
- **Optional**: Yes
- **Description**: Configures the tcp transport.

> **`ws_settings`**: [WebSocketObject](./websocket.md)
- **Optional**: Yes
- **Description**: Configures the websocket transport.

> **`http_upgrade_settings`**: [HttpUpgradeObject](./http-upgrade.md)
- **Optional**: Yes
- **Description**: Configures the http upgrade transport.

> **`xhttp_settings`**: [XHttpObject](./xhttp.md))
- **Optional**: Yes
- **Description**: Configures the xhttp transport.

> **`http_settings`**: [HttpObject](./http.md)
- **Optional**: Yes
- **Description**: Configures the http/2 transport.

> **`grpc_settings`**: [GrpcObject](./grpc.md)
- **Optional**: Yes
- **Description**: Configures the grpc transport.

> **`tls_settings`**: [TLSObject](./tls.md)
- **Optional**: Yes
- **Description**: Configures Tls.

> **`reality_settings`**: [RealityObject](./reality.md)
- **Optional**: Yes
- **Description**: Configures REALITY. REALITY is a piece of advanced encryption technology developed in-house, with higher security than vanilla TLS, but configs of both are largely the same.

