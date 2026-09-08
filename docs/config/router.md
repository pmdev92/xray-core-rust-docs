---
title: Router Configuration
lang: en-US
---

# Router Configuration

The router module sends inbound traffic through different outbound connections based on defined rules, enabling on-demand proxying.

A common use case is splitting domestic and foreign traffic. Xray Core Rust uses internal mechanisms to determine traffic origin and route it to appropriate outbound proxies.

## RoutingObject

`RoutingObject` corresponds to the `router` item in the configuration file.

```json
{
  "router": {
    "rules": [],
    "balancers": []
  }
}
```

### Parameters

**`rules`**: [RuleObject](/config/router#RuleObject)
- **Optional**: Yes
- **Description**: An array of routing rules. Rules are evaluated from top to bottom, and the first matching rule determines the outbound.

> **Tip**: When no rules match, traffic is sent through the first outbound by default.

**`balancers`**: [BalancerConfig](/config/router#BalancerConfig)
- **Optional**: Yes
- **Description**: An array of outbound balancer configurations for load-balanced traffic distribution.

### RuleObject

```json
{
  "protocol": ["..."],
  "network": ["..."],
  "port": "",
  "domain": ["..."],
  "ip": ["..."],
  "outbound_tag": "...",
  "balancer_tag": "..."
}
```

> **Warning**: When multiple attributes are specified simultaneously, all conditions must be met for the rule to take effect.

**`protocol`**: `["http" | "tls" | "quic" | "dns"]`
- **Optional**: Yes
- **Description**: Protocols detected via traffic sniffing (SNI, HTTP headers, QUIC packets, DNS queries).

**`network`**: `["tcp" | "udp"]`
- **Optional**: Yes
- **Description**: The transport layer network type. `tcp` for TCP connections (HTTP, HTTPS, WebSocket, etc.), `udp` for UDP connections (QUIC, DNS, etc.).

**`port`**: `string`
- **Optional**: Yes
- **Description**: Port matching supports single ports, ranges, and comma-separated lists:
  - Single port: `"80"`
  - Port range: `"80-443"` (includes both ends)
  - Multiple: `"80,443,8080-8089"`
  - Matching is exact: the connection's target port must equal one of the parsed values.

**`domain`**: `[string]`
- **Optional**: Yes
- **Description**: An array of domains to match. Supports multiple matching types via prefixes:
  - `keyword:` or plain text - partial match (contains)
  - `domain:` - subdomain match (ends with `.domain`)
  - `full:` - exact match
  - `regexp:` - regex pattern match
  -  GeoSITE lookup: `geo:CODE` - GeoSite database match (e.g., `"geo:IR"`)
  -  Custom GeoSITE lookup: `geo:FILE,CODE` - GeoSite database match (e.g., `"geo:path-to-geo-site,IR"`)

**`ip`**: `[string]`
- **Optional**: Yes
- **Description**: IP matching supports CIDR notation and GeoIP database lookups:
  - Single ip format: `"192.168.1.0"`
  - CIDR format: `"192.168.1.0/24"`
  - GeoIP lookup: `"geo:CODE"` (matches all IPs in country `CODE`)
  - Custom GeoIP file: `"geo:FILE,CODE"` (e.g., `"geo:path-to-geo-ip,IR"`)

**`outbound_tag`**: `string`
- **Optional**: Yes
- **Description**: The tag identifier of the target outbound connection.

**`balancer_tag`**: `string`
- **Optional**: Yes
- **Description**: The tag identifier of a balancer group. Use this instead of `outbound_tag` when using a balancer.

### BalancerConfig

```json
{
  "tag": "balancer-tag",
  "fallback_outbound_tag": "fallback-tag",
  "observatory_tag": "observation-tag",
  "outbound_selector": ["outbound1", "outbound2"],
  "strategy": {
    "method": "leastLoad",
    "settings": {}
  }
}
```

**`tag`**: `string`
- **Optional**: No
- **Description**: The identifier of the balancer.

**`fallback_outbound_tag`**: `string`
- **Optional**: No
- **Description**: The outbound tag used as fallback when all balancer options fail.

**`observatory_tag`**: `string`
- **Optional**: Yes
- **Description**: The observation tag used for latency measurement.

**`outbound_selector`**: `[string]`
- **Optional**: No
- **Description**: An array of outbound tags that the balancer selects from.

**`strategy`**: `BalancerStrategy`
- **Optional**: No
- **Description**: The load balancing strategy.

#### BalancerStrategy

**`method`**: `"least_load"` | `"least_ping"` | `"round_robin"` | `"random"`
- **Optional**: No
- **Description**: The balancing method. Available strategies:
  - `least_load` - Selects the outbound with the lowest load based on RTT and failure rates. Requires `settings` with `StrategyLeastLoadConfig`.
  - `least_ping` - Selects the outbound with the lowest ping time. No settings required.
  - `round_robin` - Cycles through outbounds in order. No settings required.
  - `random` - Randomly selects an outbound. No settings required.

**`settings`**: `object`
- **Optional**: Yes
- **Description**: Strategy-specific configuration settings. Required only for `least_load` strategy. Other strategies ignore this field.

### StrategyLeastLoadConfig

Required when `method` is `"least_load"`. This strategy selects the outbound with the lowest load based on RTT deviation and failure tolerance.

```json
{
  "costs": [
    {
      "regexp": true,
      "match": ".*",
      "value": 1.0
    }
  ],
  "baselines": ["..."],
  "expected": 4,
  "max_rtt": "5s",
  "tolerance": 0.1
}
```

**`costs`**: `[StrategyWeight]`
- **Optional**: Yes
- **Description**: Array of cost weights for outbound selection based on regex matching.

**`baselines`**: `[string]`
> - **Optional**: Yes
> - **Description**: An array of duration strings (e.g., `["100ms", "500ms"]`) used as RTT deviation cost baselines. Outbounds with a cost below the baseline threshold are preferred for selection.

> **`expected`**: `number`
> - **Optional**: Yes
> - **Description**: The number of outbounds to select from the sorted list. If `0` or unset, defaults to `1`. If `expected` is greater than available candidates, all candidates are returned.

**`max_rtt`**: `string`
> - **Optional**: Yes
> - **Description**: Maximum round-trip time threshold (e.g., `"500ms"`). Outbounds with RTT exceeding this value are excluded from selection.

**`tolerance`**: `number`
> - **Optional**: Yes
> - **Description**: The failure rate tolerance (0.0 to 1.0). Outbounds whose failure rate (fail/all) exceeds this threshold are excluded from selection.

#### StrategyWeight

**`regexp`**: `bool`
- **Optional**: No
- **Description**: Whether the match field is a regex pattern.

**`match`**: `string`
- **Optional**: No
- **Description**: The pattern to match against outbound tags.

**`value`**: `f64`
- **Optional**: No
- **Description**: The weight value associated with the match.
