# Transport

Transports specify how Xray Core Rust communicates with peers.

Transports specify how to achieve stable data transmission. Both ends of a connection often need to specify the same transport protocol to successfully establish a connection. Like, if one end uses WebSocket, the other end must also use WebSocket, or else the connection cannot be established.

## StreamSettingsObject

`StreamSettingsObject` corresponds to the `streamSettings` property in the inbound or outbound config. Each inbound or outbound can be configured with different transports and can use `streamSettings` to specify local configs.

```json
{
  "network": "tcp",
  "security": "none",
  "tls_settings": {},
  "reality_settings": {},
  "tcp_settings": {},
  "ws_settings": {},
  "http_upgrade_settings": {},
  "xhttp_settings": {},
  "http_settings": {},
  "grpc_settings": {},
}
```

### Parameters

> **`network`**: `"tcp"` | `"xhttp"` |  `"ws"` | `"http_upgrade"` | `"grpc"` | `"http"`
- **Optional**: No
- **Description**: The underlying protocol of the transport used by the data stream of the connection.


> **`security`**: `"none"` | `"tls"` |  `"reality"` 
- **Optional**: No
- **Description**: Whether to enable transport layer encryption.


> **`tls_settings`**: [TLSObject](#TLSObject)
- **Optional**: Yes
- **Description**: Configures Tls.

> **`reality_settings`**: [RealityObject](#RealityObject)
- **Optional**: Yes
- **Description**: Configures REALITY. REALITY is a piece of advanced encryption technology developed in-house, with higher security than vanilla TLS, but configs of both are largely the same.


> **`tcp_settings`**: [TcpObject](#TcpObject)
- **Optional**: Yes
- **Description**: Configures the tcp transport.

> **`xhttp_settings`**: [XHttpObject](#XHttpObject)
- **Optional**: Yes
- **Description**: Configures the xhttp transport.

> **`http_upgrade_settings`**: [HttpUpgradeObject](#HttpUpgradeObject)
- **Optional**: Yes
- **Description**: Configures the http upgrade transport.

> **`ws_settings`**: [WebSocketObject](#WebSocketObject)
- **Optional**: Yes
- **Description**: Configures the websocket transport.

> **`grpc_settings`**: [GrpcObject](#GrpcObject)
- **Optional**: Yes
- **Description**: Configures the grpc transport.

> **`http_settings`**: [HttpObject](#HttpObject)
- **Optional**: Yes
- **Description**: Configures the http/2 transport.

## TLSObject

```json
{
  "server_name": "...",
  "verify": "...",
  "is_early_data": "...",
  "early_data_len": "...",
  "alpn": "...",
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




## RealityObject

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
  "alpn": "...",
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

## TcpObject

```json
{
  "type": "...",
  "request": {},
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
  "headers": "...",
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

## WebsocketObject

```json
{
  "host": "...",
  "path": "..."
}
```

### Parameters

> **`host`**: *string*
- **Optional**: Yes
- **Default value**: `""`
- **Description**: websocket host.

> **`path`**: *string*
- **Optional**: Yes
- **Default value**: `"/"`
- **Description**: websocket path.

## HttpUpgradeObject

```json
{
  "host": "...",
  "path": "..."
}
```

### Parameters

> **`host`**: *string*
- **Optional**: Yes
- **Default value**: `""`
- **Description**: http upgrade host.

> **`path`**: *string*
- **Optional**: Yes
- **Default value**: `"/"`
- **Description**: http upgrade path.

## XhttpObject

```json
{
  "host": "...",
  "path": "...",
  "mode": "...",
  "headers": {},
  "no_grpc_header": "...",
  "x_padding_bytes_min": "...",
  "x_padding_bytes_max": "...",
  "packet_up_interval_ms": "...",
}
```

### Parameters

> **`host`**: *string*
- **Optional**: Yes
- **Default value**: `""`
- **Description**: xhttp host.

> **`path`**: *string*
- **Optional**: Yes
- **Default value**: `"/"`
- **Description**: xhttp path.

> **`mode`**: `"auto"` | `"packet-up"` |  `"stream-up"` | `"stream-one"` 
- **Optional**: Yes
- **Default value**: `"auto"`
- **Description**: xhttp mode.

> **`headers`**: *map {string, [ string ]}*
- **Optional**: Yes
- **Description**: HTTP header, a key-value pair, each key represents the name of an HTTP header, and the corresponding value is an array.

> **`no_grpc_header`**: *bool*
- **Optional**: Yes
- **Default value**: `false`
- **Description**: Whether to send grpc header.

> **`x_padding_bytes_min`**: *number*
- **Optional**: Yes
- **Default value**: `100`
- **Description**: min padding lenght.

> **`x_padding_bytes_max`**: *number*
- **Optional**: Yes
- **Default value**: `1000`
- **Description**: max padding lenght.

> **`packet_up_interval_ms`**: *number*
- **Optional**: Yes
- **Default value**: `30`
- **Description**: packet up interval milli seconds.


## HttpObject

```json
{
  "host": "...",
  "path": "..."
}
```

### Parameters

> **`host`**: *string*
- **Optional**: Yes
- **Default value**: `""`
- **Description**: http/2 host.

> **`path`**: *string*
- **Optional**: Yes
- **Default value**: `"/"`
- **Description**: http/2 path.

## GrpcObject

```json
{
  "host": "...",
  "path": "..."
}
```

### Parameters

> **`service_name`**: *string*
- **Optional**: Yes
- **Default value**: `""`
- **Description**: grpc service name.
