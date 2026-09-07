---
title: Inbound Proxy
lang: en-US
---

# Inbound Proxy

Inbound connections are used to receive incoming data and the available protocols are listed below.

## InboundObject

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
> - **Optional**: Yes
> - **Default value**: `""`
> - **Description**: The identifier of this inbound connection, used to locate this connection in other configurations (router rules, detours, etc.).

> **`protocol`**: `"socks"` | `"http"` | `"tun"`
> - **Optional**: No
> - **Description**: The connection protocol name. Available protocols: SOCKS5, HTTP.

> `settings`: InboundConfigurationObject
> - **Optional**: No
> - **Description**: The specific configuration content depends on the protocol. See the respective protocol documentation for details.

### Available Inbounds

- [Socks5](../inbounds/socks.md) - SOCKS5 inbound protocol (compatible with SOCKS5)
- [HTTP](../inbounds/http.md) - HTTP inbound protocol

> **Note**: The `tun` protocol is currently in development and not yet fully implemented.
