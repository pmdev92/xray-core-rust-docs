---
title: Statistics
lang: en-US
---

# Statistics Configuration

Statistics configuration controls traffic statistics collection in Xray Core Rust.

## StatsObject

`StatsObject` corresponds to the `stats` item in the configuration file.

```json
{
  "stats": {
    "enable": true
  }
}
```

### Parameters

> **`enable`**: *bool*
> - **Optional**: Yes
> - **Default value**: `false`
> - **Description**: Whether to enable traffic statistics collection. When enabled, Xray Core Rust tracks  outbound traffic statistics.