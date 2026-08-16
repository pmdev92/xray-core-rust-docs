# Router

The router module can send inbound data through different outbound connections according to different rules to achieve on-demand proxying.

A common use case is to split domestic and foreign traffic. Xray core rust can use its internal mechanisms to determine the traffic from different regions and then send them to different outbound proxies.


## RoutingObject

`RoutingObject` corresponds to the `router` item in the configuration file.

```json
{
  "router": {
    "rules": []
  }
}
```


### Parameters

**`rules`**: [[RuleObject](#ruleobject)]
- **Optional**: Yes
- **Description**: An array corresponding to a list of rules.

For each connection, the routing will judge these rules from top to bottom in order. When it encounters the first effective rule, it will forward the connection to the `outbound_tag` specified by the rule.

::: tip
When no rules match, the traffic is sent out by the first outbound by default.
:::


### RuleObject

```json
{
  "protocol": ["..."],
  "network": ["..."],
  "port": [],
  "domain": ["..."],
  "ip": ["..."],
  "outbound_tag": "..."
}
```

::: danger
When multiple attributes are specified at the same time, these attributes need to be satisfied **simultaneously** in order for the current rule to take effect.
:::

**`protocol`**: *[ '"http"' | '"tls"' | '"quic"' | '"dns"' ]*
- **Optional**: Yes
- **Description**: An array where each item represents a protocol. This rule will take effect when the protocol of the current connection matches any of the protocols in the array.

**`network`**: *[ '"udp"' | '"tcp"' ]*
- **Optional**: Yes
- **Description**: An array where each item represents a network. This rule will take effect when the network of the current connection matches any of the networks in the array.


**`port`**: *[ number ]*
- **Optional**: Yes
- **Description**: An array where each item represents a port. This rule will take effect when the port of the current connection matches any of the port in the array.

**`domain`**: *[ string ]*
- **Optional**: Yes
- **Description**: An array where each item represents a domain. This rule will take effect when the domain of the current connection matches any of the domain in the array.

**`ip`**: *[ string ]*
- **Optional**: Yes
- **Description**: An array where each item represents a ip. This rule will take effect when the ip of the current connection matches any of the ip in the array.

**`outbound_tag`**: *string*
- **Optional**: No
- **Description**: Corresponds to the identifier of an outbound.
