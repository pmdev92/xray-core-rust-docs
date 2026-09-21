---
title: TLS Transport
lang: en-US
---

# TLS Transport

TLS transport provides transport layer encryption using standard TLS certificates. It supports server name indication (SNI), early data (0-RTT), and ALPN protocols.

## TLSObject

```json
{
  "server_name": "",
  "verify": true,
  "is_early_data": false,
  "early_data_len": 2000,
  "alpn": [],
  "pinned_peer_cert_sha256": null,
  "verify_peer_cert_by_name": null
}
```

### Parameters

> **`server_name`**: *string*
> - **Optional**: No
> - **Description**: The server SNI (Server Name Indication). Used to identify the server during the TLS handshake.

> **`verify`**: *bool*
> - **Optional**: Yes
> - **Default value**: `true`
> - **Description**: Whether to verify TLS certificates. When `true`, standard verification applies and `pinned_peer_cert_sha256`/`verify_peer_cert_by_name` are applied if set to arrays; when `false`, all verification is fully disabled and these fields are ignored.

> **`is_early_data`**: *bool*
> - **Optional**: Yes
> - **Default value**: `false`
> - **Description**: Whether to enable TLS early data (0-RTT). This allows faster connection establishment by reusing session tickets from previous connections.

> **`early_data_len`**: *number*
> - **Optional**: Yes
> - **Default value**: `2000`
> - **Description**: The maximum length of TLS early data (in bytes). Only applicable when `is_early_data` is `true`.

> **`alpn`**: `[string]`
> - **Optional**: Yes
> - **Default value**: `null`
> - **Description**: An array of strings specifying the ALPN (Application-Layer Protocol Negotiation) values used in TLS handshakes. Common values include `"h2"` (HTTP/2) and `"http/1.1"`.

> **`pinned_peer_cert_sha256`**: `[string]` | `null`
> - **Optional**: Yes
> - **Default value**: `null`
> - **Description**: Array of SHA-256 hashes of allowed peer certificates. When `null` (default) standard verification applies; only when set to array (and `verify` is `true`) do pinned hashes apply. If `verify` is `false`, all verification is disabled regardless.

> **`verify_peer_cert_by_name`**: `[string]` | `null`
> - **Optional**: Yes
> - **Default value**: `null`
> - **Description**: Array of valid DNS names for peer certificate verification (SAN/CN); arbitrary/non-DNS strings are not allowed. When `null` (default) standard name verification applies; only when set to array (and `verify` is `true`) do these names apply. If `verify` is `false`, all verification is disabled regardless.

### Features

- ✅ Early Data (0-RTT)
- ✅ XTLS supported
- ✅ ALPN support
- ✅ SNI support
