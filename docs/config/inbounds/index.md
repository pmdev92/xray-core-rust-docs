# Inbound Proxy

Inbound connections are used to receive incoming data and the available protocols are listed in [inbounds](#inbounds).

## Inbound Proxy

The `InboundObject` corresponds to a subelement of the `inbounds` item in the configuration file.

```json
{
  "inbounds": [
    {
      "tag": "identifier",
      "protocol": "protocol_name",
      "settings": {}
    }
  ]
}
```

### Parameters

> **`tag`**: *string*

- **Optional**: Yes
- **Default value**: `""`
- **Description**: The identifier of this inbound connection, used to locate this connection in other configurations.

> **`protocol`**: `"socks"` | `"http"`
- **Optional**: No
- **Description**: The connection protocol name.


> `settings`: InboundConfigurationObject
- **Optional**: No
- **Description**: The specific configuration content depends on the protocol. See `InboundConfigurationObject` in each protocol for details.


# Inbounds
  - [Socks](../inbounds/socks.md)
  - [HTTP](../inbounds/http.md)
