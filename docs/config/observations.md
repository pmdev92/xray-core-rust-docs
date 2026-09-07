---
title: Observations
lang: en-US
---

# Observations

Observations configure traffic monitoring methods for latency and load measurement. They are used by balancers to make intelligent routing decisions.

## ObservationConfig

`ObservationConfig` corresponds to items in the `observations` array of the configuration file.

```json
{
  "observations": [
    {
      "tag": "observation-tag",
      "method": "brust",
      "selector": ["outbound1", "outbound2"],
      "settings": {}
    }
  ]
}
```

### Parameters

> **`tag`**: *string*
> - **Optional**: Yes
> - **Description**: The identifier for this observation configuration.

> **`method`**: `"brust"` | `"normal"`
> - **Optional**: No
> - **Description**: The observation method to use.

> **`selector`**: `[string]`
> - **Optional**: No
> - **Description**: An array of outbound tag **prefixes** that this observation monitors. The selector uses prefix matching: each outbound tag must **start with** one of the selector prefixes to be included. For example, `["proxy_1", "proxy_2"]` matches outbounds whose tags start with `proxy_1` or `proxy_2`. To select all outbounds, use `["proxy_"]` (matches tags starting with `proxy_`) or provide all tag prefixes. This field is used by both observation methods and balancers to filter candidate outbounds.

> **`settings`**: object
> - **Optional**: Yes
> - **Description**: Method-specific settings. See below for details.

### Normal Observation

Normal observation uses periodic ping checks to monitor outbound latency.

```json
{
  "destination": "",
  "interval": "",
  "enable_concurrency": false
}
```

#### NormalObservationConfig

> **`destination`**: *string*
> - **Optional**: Yes
> - **Description**: The destination address for ping checks.

> **`interval`**: *string*
> - **Optional**: Yes
> - **Description**: The interval between ping checks (e.g., `"10s"`).

> **`enable_concurrency`**: *bool*
> - **Optional**: Yes
> - **Description**: Whether to enable concurrent ping checks.

### Brust Observation

Brust observation uses burst-based probing to measure outbound latency and connectivity.

```json
{
  "destination": "",
  "connectivity": "",
  "interval": "",
  "timeout": "",
  "sampling_count": 0
}
```

#### BrustObservationConfig

> **`destination`**: *string*
> - **Optional**: Yes
> - **Description**: The destination address for burst probing.

> **`connectivity`**: *string*
> - **Optional**: Yes
> - **Description**: Connectivity check configuration.

> **`interval`**: *string*
> - **Optional**: Yes
> - **Description**: The interval between probing rounds.

> **`timeout`**: *string*
> - **Optional**: Yes
> - **Description**: The timeout for each probe.

> **`sampling_count`**: *usize*
> - **Optional**: Yes
> - **Description**: The number of samples to collect during probing.
