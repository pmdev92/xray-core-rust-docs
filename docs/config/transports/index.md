---
title: Transports
lang: en-US
---

# Transports

Transports specify how Xray Core Rust communicates with peers. Both ends of a connection must use the same transport protocol to establish a successful connection.

## StreamSettingsObject

`StreamSettingsObject` corresponds to the `streamSettings` property in the inbound or outbound configuration. Each inbound or outbound can be configured with different transport methods using `streamSettings`.

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

> **`network`**: `"tcp"` | `"ws"` | `"http_upgrade"` | `"xhttp"` | `"http"` | `"grpc"` | `"reality"`
> - **Optional**: No
> - **Description**: The underlying transport protocol used by the data stream of the connection.

> **`security`**: `"none"` | `"tls"` | `"reality"`
> - **Optional**: No
> - **Description**: Whether to enable transport layer encryption. `"tls"` enables standard TLS, `"reality"` enables REALITY advanced encryption.

> **`tcp_settings`**: [TcpObject](./tcp.md)
> - **Optional**: Yes
> - **Description**: Configures the TCP transport with optional HTTP header obfuscation.

> **`ws_settings`**: [WebSocketObject](./websocket.md)
> - **Optional**: Yes
> - **Description**: Configures the WebSocket transport.

> **`http_upgrade_settings`**: [HttpUpgradeObject](./http-upgrade.md)
> - **Optional**: Yes
> - **Description**: Configures the HTTP Upgrade transport.

> **`xhttp_settings`**: [XHttpObject](./xhttp.md)
> - **Optional**: Yes
> - **Description**: Configures the XHTTP transport with advanced obfuscation options.

> **`http_settings`**: [HttpObject](./http.md)
> - **Optional**: Yes
> - **Description**: Configures the HTTP/2 transport.

> **`grpc_settings`**: [GrpcObject](./grpc.md)
> - **Optional**: Yes
> - **Description**: Configures the gRPC transport.

> **`tls_settings`**: [TLSObject](./tls.md)
> - **Optional**: Yes
> - **Description**: Configures TLS encryption settings.

> **`reality_settings`**: [RealityObject](./reality.md)
> - **Optional**: Yes
> - **Description**: Configures REALITY encryption settings. REALITY is an advanced encryption technology developed in-house, providing higher security than vanilla TLS.

### Transport & Security Combinations

| Network | Security | Description |
|---------|----------|-------------|
| `tcp` | `none` | Plain TCP connection |
| `tcp` | `tls` | TCP with TLS encryption |
| `tcp` | `reality` | TCP with REALITY encryption |
| `ws` | `none` | Plain WebSocket connection |
| `ws` | `tls` | WebSocket with TLS encryption |
| `ws` | `reality` | WebSocket with REALITY encryption |
| `http_upgrade` | `none` | Plain HTTP Upgrade |
| `http_upgrade` | `tls` | HTTP Upgrade with TLS |
| `http_upgrade` | `reality` | HTTP Upgrade with REALITY |
| `xhttp` | `none` | XHTTP without encryption |
| `xhttp` | `tls` | XHTTP with TLS |
| `xhttp` | `reality` | XHTTP with REALITY |
| `http` | `none` | HTTP/2 without encryption |
| `http` | `tls` | HTTP/2 with TLS |
| `http` | `reality` | HTTP/2 with REALITY |
| `grpc` | `none` | Plain gRPC connection |
| `grpc` | `tls` | gRPC with TLS encryption |
| `grpc` | `reality` | gRPC with REALITY encryption |
| `reality` | `reality` | Full REALITY transport |
