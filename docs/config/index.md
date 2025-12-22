---
title: Config Documentation
lang: en-US
---

# Overview

The configuration file of Xray Core Rust is in JSON format with the following structure:

```json
{
  "log": {},
  "inbounds": [],
  "outbounds": [],
  "router": {}
}
```

### Parameters

>**Log:** [LogObject](/config/log)
- **Optional**: Yes
- **Description**: Controls how Xray Core Rust generates and handles logs.


> **Inbounds:** [InboundObject](/config/inbounds/)
- **Optional**: No
- **Description**: An array of inbound connection configurations. Defines how Xray Core Rust accepts incoming connections from clients.


> **Outbounds:** [OutboundObject](/config/outbounds/)
- **Optional**: No
- **Description**: An array of outbound connection configurations. Defines how Xray Core Rust connects to destination servers.

> **Router:** [RouterObject](/config/router)
- **Optional**: Yes
- **Description**: Controls traffic routing based on various rules and conditions.
