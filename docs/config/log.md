# Log Configuration

Log configuration controls how Xray Core Rust outputs logs.


## LogObject

LogObject corresponds to the `log` item in the configuration file.

```json
{
  "log": {
    "level": "trace"
  }
}
```


### Parameters

**`level`**: `"trace"` | `"debug"` | `"info"` | `"warning"` | `"error"` | `"none"`
- **Optional**: Yes
- **Default value**: `"trace"`
- **Description**: The log level for logs, indicating the information that needs to be recorded.

