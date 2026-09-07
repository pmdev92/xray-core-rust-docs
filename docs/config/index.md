---
title: Config Documentation
lang: en-US
---

# Overview

The configuration file of Xray Core Rust is in JSON format with the following structure:

```json
{
  "log": {},
  "observations": [],
  "inbounds": [],
  "outbounds": [],
  "router": {},
  "stats": {}
}
```

### Parameters

> **Log:** [LogObject](/config/log)
> - **Optional**: Yes
> - **Description**: Controls how Xray Core Rust generates and handles logs.

> **Observations:** [ObservationConfig](/config/observations)
> - **Optional**: Yes
> - **Description**: Configures traffic observation methods (Brust, Normal) for latency and load monitoring.

> **Inbounds:** [InboundObject](/config/inbounds/)
> - **Optional**: No
> - **Description**: An array of inbound connection configurations. Defines how Xray Core Rust accepts incoming connections from clients. Available protocols: SOCKS5, HTTP.

> **Outbounds:** [OutboundObject](/config/outbounds/)
> - **Optional**: No
> - **Description**: An array of outbound connection configurations. Defines how Xray Core Rust connects to destination servers. Each outbound must have a transport configured (except Freedom and Block). Available protocols: Freedom, Block, SOCKS5, VLESS, VMess, Trojan, ShadowSocks, TUIC, Hysteria2.

> **Router:** [RouterObject](/config/router)
> - **Optional**: Yes
> - **Description**: Controls traffic routing based on various rules and conditions. Supports rules and balancers.

> **Stats:** [StatsObject](/config/stats)
> - **Optional**: Yes
> - **Description**: Enables or disables traffic statistics.
