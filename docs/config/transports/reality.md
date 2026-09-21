---
title: Reality Transport
lang: en-US
---

# Reality Transport

REALITY is an advanced encryption technology developed in-house by Xray. It provides higher security than vanilla TLS by using elliptic curve cryptography and key exchange algorithms.

REALITY works similarly to TLS in configuration but offers significantly enhanced security features including post-quantum resistance characteristics.

## RealityObject

```json
{
  "server_name": "",
  "public_key": "",
  "short_id": "",
  "version_x": "",
  "version_y": "",
  "version_z": "",
  "is_early_data": false,
  "early_data_len": 2000,
  "alpn": []
}
```

### Parameters

> **`server_name`**: *string*
> - **Optional**: No
> - **Description**: The server SNI (Server Name Indication). Used to identify the server during the TLS handshake.

> **`public_key`**: *string*
> - **Optional**: No
> - **Description**: The public key that corresponds to the private key on the server. This is the core cryptographic key used by REALITY.

> **`short_id`**: *string*
> - **Optional**: No
> - **Description**: The short ID used for bootstrapping. This is used in conjunction with the public key for connection identification.

> **`version_x`**: *number*
> - **Optional**: Yes
> - **Description**: Minimal accepted version of the Xray client (major version, specified in `x.y.z` format).

> **`version_y`**: *number*
> - **Optional**: Yes
> - **Description**: Minimal accepted version of the Xray client (minor version, specified in `x.y.z` format).

> **`version_z`**: *number*
> - **Optional**: Yes
> - **Description**: Minimal accepted version of the Xray client (patch version, specified in `x.y.z` format).

> **`is_early_data`**: *bool*
> - **Optional**: Yes
> - **Default value**: `false`
> - **Description**: Whether to enable TLS early data (0-RTT) for faster connection establishment.

> **`early_data_len`**: *number*
> - **Optional**: Yes
> - **Default value**: `2000`
> - **Description**: The maximum length of TLS early data (in bytes). Only applicable when `is_early_data` is `true`.

> **`alpn`**: `[string]`
> - **Optional**: Yes
> - **Default value**: `""`
> - **Description**: An array of strings specifying the ALPN values used in TLS handshakes.

> **Note**: REALITY is currently marked as "Needs Improvement" in the project roadmap, but is fully functional for production use.
