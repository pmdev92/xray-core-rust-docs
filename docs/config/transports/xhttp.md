# XhttpObject

```json
{
  "host": "...",
  "path": "...",
  "mode": "...",
  "extra": {
    "headers": {},
    "no_grpc_header": false,
    "x_padding_bytes": "100-1000",
    "x_padding_obfs_mode": false,
    "x_padding_key": "...",
    "x_padding_header": "...",
    "x_padding_placement": "...",
    "x_padding_method": "...",
    "sc_max_each_post_bytes": "...",
    "sc_min_posts_interval_ms": "...",
    "uplink_http_method": "...",
    "uplink_data_placement": "...",
    "uplink_data_key": "...",
    "uplink_chunk_size": "...",
    "session_placement": "...",
    "session_key": "...",
    "seq_placement": "...",
    "seq_key": "...",
    "xmux": {
      "max_concurrency": "...",
      "max_connections": "...",
      "c_max_reuse_times": "...",
      "h_max_request_times": "...",
      "h_max_reusable_secs": "...",
      "h_keep_alive_period": 0
    },
    "download_settings": {
      "address": "...",
      "port": 443,
      "transport": "...",
      "security": "...",
      "tls_settings": {},
      "reality_settings": {},
      "x_http_settings": {}
    }
  }
}
```

## Parameters

> **`host`**: *string*
>
> - **Optional**: Yes
> - **Default value**: `""`
> - **Description**: XHTTP host.

> **`path`**: *string*
>
> - **Optional**: Yes
> - **Default value**: `"/"`
> - **Description**: XHTTP path.

> **`mode`**: `"auto"` | `"packet-up"` | `"stream-up"` | `"stream-one"`
>
> - **Optional**: Yes
> - **Default value**: `"auto"`
> - **Description**: XHTTP mode.

> **`extra`**: [XHttpExtraObject](#xhttpextraobject)
>
> - **Optional**: Yes
> - **Description**: Extra XHTTP settings.

## XHttpExtraObject

`XHttpExtraObject` contains additional XHTTP options.

```json
{
"headers": {},
"no_grpc_header": false,
"x_padding_bytes": "100-1000",
"x_padding_obfs_mode": false,
"x_padding_key": "...",
"x_padding_header": "...",
"x_padding_placement": "...",
"x_padding_method": "...",
"sc_max_each_post_bytes": "...",
"sc_min_posts_interval_ms": "...",
"uplink_http_method": "...",
"uplink_data_placement": "...",
"uplink_data_key": "...",
"uplink_chunk_size": "...",
"session_placement": "...",
"session_key": "...",
"seq_placement": "...",
"seq_key": "...",
"xmux": {},
"download_settings": {}
}
```
### Parameters

> **`headers`**: *map { string, string }*
>
> - **Optional**: Yes
> - **Description**: HTTP headers. Each key represents the name of an HTTP header, and each value is a string.

> **`no_grpc_header`**: *bool*
>
> - **Optional**: Yes
> - **Default value**: `false`
> - **Description**: Whether to omit the gRPC header.

> **`x_padding_bytes`**: *string*
>
> - **Optional**: Yes
> - **Description**: XHTTP padding byte range.

> **`x_padding_obfs_mode`**: *bool*
>
> - **Optional**: Yes
> - **Description**: Whether to enable XHTTP padding obfuscation mode.

> **`x_padding_key`**: *string*
>
> - **Optional**: Yes
> - **Description**: Key used for XHTTP padding data.

> **`x_padding_header`**: *string*
>
> - **Optional**: Yes
> - **Description**: Header used for XHTTP padding data.

> **`x_padding_placement`**: *string*
>
> - **Optional**: Yes
> - **Description**: Placement used for XHTTP padding data.

> **`x_padding_method`**: *string*
>
> - **Optional**: Yes
> - **Description**: Method used for XHTTP padding data.

> **`sc_max_each_post_bytes`**: *string*
>
> - **Optional**: Yes
> - **Description**: Maximum byte range for each split client POST request.

> **`sc_min_posts_interval_ms`**: *string*
>
> - **Optional**: Yes
> - **Description**: Minimum interval range between split client POST requests, in milliseconds.

> **`uplink_http_method`**: *string*
>
> - **Optional**: Yes
> - **Description**: HTTP method used for uplink requests.

> **`uplink_data_placement`**: *string*
>
> - **Optional**: Yes
> - **Description**: Placement used for uplink data.

> **`uplink_data_key`**: *string*
>
> - **Optional**: Yes
> - **Description**: Key used for uplink data.

> **`uplink_chunk_size`**: *string*
>
> - **Optional**: Yes
> - **Description**: Uplink chunk size range.

> **`session_placement`**: *string*
>
> - **Optional**: Yes
> - **Description**: Placement used for the session identifier.

> **`session_key`**: *string*
>
> - **Optional**: Yes
> - **Description**: Key used for the session identifier.

> **`seq_placement`**: *string*
>
> - **Optional**: Yes
> - **Description**: Placement used for the sequence value.

> **`seq_key`**: *string*
>
> - **Optional**: Yes
> - **Description**: Key used for the sequence value.

> **`xmux`**: [XmuxObject](#xmuxobject)
>
> - **Optional**: Yes
> - **Description**: XHTTP multiplexing settings.

> **`download_settings`**: [XHttpDownloadSettingsObject](#xhttpdownloadsettingsobject)
>
> - **Optional**: Yes
> - **Description**: XHTTP download-side connection settings.

## XmuxObject

`XmuxObject` configures XHTTP multiplexing behavior.
```json
{
"max_concurrency": "...",
"max_connections": "...",
"c_max_reuse_times": "...",
"h_max_request_times": "...",
"h_max_reusable_secs": "...",
"h_keep_alive_period": 0
}
```

### Parameters

> **`max_concurrency`**: *string*
>
> - **Optional**: Yes
> - **Description**: Maximum concurrency range.

> **`max_connections`**: *string*
>
> - **Optional**: Yes
> - **Description**: Maximum connection count range.

> **`c_max_reuse_times`**: *string*
>
> - **Optional**: Yes
> - **Description**: Maximum reuse count range for client connections.

> **`h_max_request_times`**: *string*
>
> - **Optional**: Yes
> - **Description**: Maximum request count range for HTTP connections.

> **`h_max_reusable_secs`**: *string*
>
> - **Optional**: Yes
> - **Description**: Maximum reusable duration range for HTTP connections, in seconds.

> **`h_keep_alive_period`**: *number*
>
> - **Optional**: Yes
> - **Description**: HTTP keep-alive period.

## XHttpDownloadSettingsObject

`XHttpDownloadSettingsObject` configures download-side XHTTP settings.

```json
{
"address": "...",
"port": 443,
"transport": "...",
"security": "...",
"tls_settings": {},
"reality_settings": {},
"x_http_settings": {}
}
```

### Parameters

> **`address`**: *string*
>
> - **Optional**: No
> - **Description**: Download-side server address.

> **`port`**: *number*
>
> - **Optional**: No
> - **Description**: Download-side server port.

> **`transport`**: *string*
>
> - **Optional**: No
> - **Description**: Download-side transport type.

> **`security`**: *string*
>
> - **Optional**: No
> - **Description**: Download-side security type.

> **`tls_settings`**: [TLSObject](./tls.md)
>
> - **Optional**: Yes
> - **Description**: Download-side TLS settings.

> **`reality_settings`**: [RealityObject](./reality.md)
>
> - **Optional**: Yes
> - **Description**: Download-side REALITY settings.

> **`x_http_settings`**: [XHttpObject](./xhttp.md)
>
> - **Optional**: Yes
> - **Description**: Download-side XHTTP settings.