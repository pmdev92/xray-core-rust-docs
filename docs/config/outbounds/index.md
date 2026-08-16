# Outbound Proxy

Outbound connections are used for sending data and can use any of the available protocols listed in [outbounds](#outbounds).

## OutboundObject

The `OutboundObject` corresponds to a subelement of the `Outbounds` item in the configuration file.

```json
{
  "outbounds": [
    {
      "tag": "identifier",
      "detour": "identifier",
      "protocol": "protocol_name",
      "settings": {},
      "stream_settings":{}
    }
  ]
}
```

### Parameters

> **`tag`**: *string*

- **Optional**: Yes
- **Default value**: `""`
- **Description**: The identifier of this outbound connection, used to locate this connection in other configurations.

> **`detour`**: *string*

- **Optional**: Yes
- **Default value**: `""`
- **Description**: The identifier of the target outbound connection for routing this outbound traffic.

> **`protocol`**: `"freedom"` | `"block"` |`"socks5"` | `"vless"` | `"vmess"` | `"trojan"` | `"shadowsocks"` | `"tuic"` | `"hysteria2"` 
- **Optional**: No
- **Description**: The connection protocol name.


> `settings`: OutboundConfigurationObject
- **Optional**: Yes
- **Description**: The specific configuration content varies depending on the protocol. See `OutboundConfigurationObject` in each protocol for details.


> `stream_settings`: [StreamSettingsObject](/config/transport/index.md)
- **Optional**: Yes
- **Description**: The underlying transport method is the way the current outbound connects with other side.

# Outbounds
- [Freedom](../outbounds/freedom.md)
- [Block](../outbounds/block.md)
- [Vless](../outbounds/vless.md)
- [Vmess](../outbounds/vmess.md)
- [Trojan](../outbounds/trojan.md)
- [ShadowSocks](../outbounds/shadowsocks.md)
- [Tuic](../outbounds/tuic.md)
- [Hysteria2](../outbounds/hysteria2.md)
