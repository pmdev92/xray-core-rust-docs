---
title: Outbound Proxy
lang: en-US
---

# Outbound Proxy

Outbound connections are used to send data and can use any of the available protocols listed below.

## OutboundObject

The `OutboundObject` corresponds to a subelement of the `outbounds` item in the configuration file.

```json
{
  "outbounds": [
    {
      "tag": "identifier",
      "detour": "identifier",
      "protocol": "protocol_name",
      "settings": {},
      "stream_settings": {}
    }
  ]
}
```

### Parameters

> **`tag`**: *string*
> - **Optional**: Yes
> - **Default value**: `""`
> - **Description**: The identifier of this outbound connection, used to locate it in other configurations (router rules, detours, etc.).

> **`detour`**: *string*
> - **Optional**: Yes
> - **Default value**: `""`
> - **Description**: The tag identifier of the target outbound connection for routing this outbound's traffic. Useful for chaining outbounds.

> **`protocol`**: `"freedom"` | `"block"` | `"socks5"` | `"vless"` | `"vmess"` | `"trojan"` | `"shadowsocks"` | `"tuic"` | `"hysteria2"`
> - **Optional**: No
> - **Description**: The connection protocol name. Each outbound must use one of the available protocols.

> **`settings`**: OutboundConfigurationObject
> - **Optional**: Yes
> - **Description**: The specific configuration content varies depending on the protocol. See `OutboundConfigurationObject` in each protocol for details. `freedom` and `block` outbounds have empty settings.

> **`stream_settings`**: [StreamSettingsObject](/config/transports/index.md)
> - **Optional**: Yes
> - **Description**: The transport configuration for the outbound connection. Required for most protocols except `freedom` and `block`. Specifies the underlying transport method (TCP, WebSocket, gRPC, etc.) and security (TLS, Reality).

### Available Outbounds

- [Freedom (Direct)](../outbounds/freedom.md) - Direct connection to destination
- [Block (Blackhole)](../outbounds/block.md) - Blocks all outbound traffic
- [Socks5](../outbounds/socks.md) - SOCKS5 outbound proxy
- [VLESS](../outbounds/vless.md) - Stateless lightweight transport
- [VMess](../outbounds/vmess.md) - Encrypted transport protocol
- [Trojan](../outbounds/trojan.md) - Trojan protocol
- [ShadowSocks](../outbounds/shadowsocks.md) - ShadowSocks protocol
- [TUIC](../outbounds/tuic.md) - TUIC protocol (QUIC-based)
- [Hysteria2](../outbounds/hysteria2.md) - Hysteria2 protocol (QUIC-based)
