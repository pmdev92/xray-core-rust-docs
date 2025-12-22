# SOCKS Inbound

The standard SOCKS protocol implementation is compatible with SOCKS5.

The use of `SOCKS` inbound is more meaningful in a local area network or local environment, where it can be used to listen for incoming connections and provide local services to other programs.

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
