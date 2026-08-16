# Vless Outbound

VLESS is a stateless lightweight transport protocol, which is divided into inbound and outbound parts, and can be used as a bridge between Xray clients and servers.

Unlike VMess, VLESS does not rely on system time, and the authentication method is also UUID.


## OutboundConfigurationObject

```json
{
  "address": "127.0.0.1",
  "port": 4080,
  "id": "...",
  "flow": "...",
  "encryption": "..."
}
```

> **`address`**: *string*
- **Optional**: No
- **Description**: The server address.


> **`port`**: *number*
- **Optional**: No
- **Description**: The server port.


> **`id`**: *string*
- **Optional**: No
- **Description**: The user id of vless server.

> **`flow`**: `""` | `"none"` | `"xtls-rprx-vision"` | `"xtls-rprx-vision-udp443"` 
- **Optional**: Yes
- **Default value**: `""`
- **Description**: Flow control mode, used to select the XTLS algorithm.

> **`encryption`**: *string* 
- **Optional**: Yes
- **Default value**: `""`
- **Description**: [VLESS Encryption](https://github.com/XTLS/Xray-core/pull/5067) settings.

This field can be used in one of the following forms:

> 1. **`"none"` | `""`**
>    - Both values disable VLESS Encryption.
> 2. **Detailed VLESS Encryption configuration**
>    - `mlkem768x25519plus.native.0rtt.100-111-1111.75-0-111.50-0-3333.ptjHQxBQxTJ9MWr2cd5qWIflBSACHOevTauCQwa_71U`
> ::: details Detailed configuration
> Its format is a detailed configuration string of fields connected by `.`.<br>
> For example: `mlkem768x25519plus.native.0rtt.100-111-1111.75-0-111.50-0-3333.ptjHQxBQxTJ9MWr2cd5qWIflBSACHOevTauCQwa_71U`. This document will refer to the separate parts separated by dots as "blocks".
> - **The 1st block** is the handshake method. Currently, there is only `mlkem768x25519plus`. Requires consistency between server and client.
> - **The 2nd block** is the traffic appearance. Options are `native`/`xorpub`/`random`, corresponding to: raw format packet / raw format + obfuscated public key part / fully random numbers (similar to VMESS/Shadowsocks). Requires consistency between server and client.
> - **The 3rd block** is session resumption. Choosing `0rtt` will follow the server settings to attempt to use previously generated tickets to skip the handshake for fast connection (can be manually disabled by the server). Choosing `1rtt` will force a 1-RTT handshake process.
> - Following blocks are **padding**. After the connection is established, the client sends some garbage data to obfuscate length characteristics. It does not need to be the same as the server (the corresponding part in the inbound is the padding sent from the server to the client). It is a variable-length part with the format `padding.delay.padding` + `(.delay.padding)` × n (multiple padding blocks can be inserted, requiring a delay block between two padding blocks). For example, you can write a very long `padding.delay.padding.delay.padding.delay.padding.delay.padding.delay.padding`.
>   1. `padding` format is `probability-min-max`. E.g., `100-111-1111` means 100% probability to send a padding of length 111~1111.
>   2. `delay` format is also `probability-min-max`. E.g., `75-0-111` means 75% probability to wait 0~111 milliseconds.
>
>   - The first padding block has special requirements: probability must be 100% and minimum length greater than 0. If no padding exists, the core automatically uses `100-111-1111.75-0-111.50-0-3333` as the padding setting.
>
> - **The last block** will be recognized by the core as the parameter used to authenticate the server. It must correspond to the server. `mlkem768` belongs to post-quantum algorithms, preventing (future) client parameter leaks from allowing quantum computers to crack the private key and impersonate the server. This parameter is only used for verification; the handshake process is post-quantum secure regardless, and existing encrypted data cannot be decrypted by future quantum computers.
> :::