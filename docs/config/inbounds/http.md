# HTTP Inbound

HTTP protocol.

The more meaningful use of `http` inbound is to listen in a local network or on the local machine to provide local services for other programs.

::: tip TIP 1
`http proxy` can only proxy the TCP protocol and cannot handle protocols based on UDP.
:::


## InboundConfigurationObject

```json
{
  "listen": "127.0.0.1",
  "port": 4080
}
```

> **`listen`**: *string*
- **Optional**: No
- **Description**: The listening address, either an available IPV4 or IPV6 address.


> **`port`**: *number*
- **Optional**: No
- **Description**: The listening port number, either an available port number.
