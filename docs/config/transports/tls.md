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
  "pinned_peer_cert_sha256": "",
  "verify_peer_cert_by_name": "",
  "ech_config_list": ""
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

> **`pinned_peer_cert_sha256`**: `[string]`
> - **Optional**: Yes
> - **Default value**: `null`
> - **Description**: Array of SHA-256 hashes of allowed peer certificates. When `null` (default) standard verification applies; only when set to array (and `verify` is `true`) do pinned hashes apply. If `verify` is `false`, all verification is disabled regardless.

> **`verify_peer_cert_by_name`**: `[string]`
> - **Optional**: Yes
> - **Default value**: `null`
> - **Description**: Array of valid DNS names for peer certificate verification (SAN/CN); arbitrary/non-DNS strings are not allowed. When `null` (default) standard name verification applies; only when set to array (and `verify` is `true`) do these names apply. If `verify` is `false`, all verification is disabled regardless.

 > **`ech_config_list`**: *string*
> - **Optional**: Yes
> - **Default value**: `null`
> - **Description**: Configures ECHConfig for Encrypted Client Hello. A non-empty value enables ECH to hide sensitive handshake information like SNI, enhancing privacy and preventing censorship detection.
>
> **Format 1 - Fixed Base64 ECHConfig**: Provide a direct Base64-encoded ECHConfig string for static configuration. The system decodes and applies this configuration to all connections without additional lookups. Example: `"AF7+DQBaAAAgACA51i3Ssu4wUMV4FNCc8iRX5J+YC4Bhigz9sacl2lCfSQAkAAEAAQABAAIAAQADAAIAAQACAAIAAgADAAMAAQADAAIAAwADAAtleGFtcGxlLmNvbQAA"`.
>
> **Format 2 - DNS Query**: Query ECHConfig dynamically from HTTPS records via DNS using the `server_name` field. Use format `protocol://host[:port][/path]` where protocol is one of: `udp://` (standard DNS), `tcp://` (TCP DNS), `tls://` (DNS-over-TLS), `https://` (DNS-over-HTTPS), `quic://` (DNS-over-QUIC), `h3://` (HTTP/3 DNS). The port is optional; default ports are 53 for UDP/TCP/QUIC and 443 for HTTPS/H3. The path is only used with HTTPS/H3 protocols (defaults to `/dns-query` if omitted). Examples: `udp://1.1.1.1`, `tcp://8.8.8.8:53`, `tls://one.one.one.one:853`, `https://dns.cloudflare.com/dns-query`, `quic://dns.adguard-dns.com:853`, `h3://dns.google:443/dns-query`. Optionally specify a dedicated domain for ECHConfig lookup using format `domain+protocol://host[:port][/path]`. Example: `example.com+https://dns.example.com/dns-query`. This queries the specified domain's HTTPS records instead of using `server_name`, useful for privacy (avoiding DNS analysis of target domain) or when HTTPS records with ECH are not published under the target domain itself.
>
> **Server Requirements**: Target server must support ECH and publish HTTPS records containing ECHConfigList in SVCB parameters. When using Format 2 (DNS Query), the target server must publish these HTTPS records so they can be queried. When using domain prefix, the alternative domain specified in the prefix must have properly configured HTTPS records with ECH configuration.

