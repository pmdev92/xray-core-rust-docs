---
title: Android Library Usage
lang: en-US
---

# Android Library Usage

This guide explains how to use the **Xray Core Rust** Android library (`LibXrayCoreRust.aar`).

## Prerequisites

- Android Studio
- minSdkVersion 21+
- `LibXrayCoreRust.aar` built via `./xray_scripts/android_build.sh all`

## Installation

1. Copy `LibXrayCoreRust.aar` to `app/libs/`
2. Add to `app/build.gradle`:

```groovy
dependencies {
    implementation files('libs/LibXrayCoreRust.aar')
}
```

3. Add permissions to `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

## Available Functions

All functions are in the `com.xray.core.rust` package:

### initialize()

Initializes the native library and loads required JNI components. Must be called once before using any other functions.

```kotlin
initialize()
```

### initAssetPath(path: String)

Sets the directory path where GeoIP and GeoSite database files are located. These files are used for routing rules.

**Parameters:**
- `path: String` - Absolute path to the directory containing `geoip.dat` and `geosite.dat`

```kotlin
val assetPath = context.filesDir.path
initAssetPath(assetPath)
```

### startXrayCore(id: UInt, path: String, protector: ProtectFd)

Starts the Xray proxy core with the provided JSON configuration.

**Parameters:**
- `id: UInt` - Instance identifier (allows running multiple proxy instances)
- `path: String` - JSON configuration string
- `protector: ProtectFd` - Callback interface to protect sockets from VPN routing

```kotlin
val config = """{ "inbounds": [...], "outbounds": [...] }"""
startXrayCore(0u, config, protector)
```

### shutdownXrayCore(id: UInt)

Stops a running proxy instance.

**Parameters:**
- `id: UInt` - Instance identifier to stop

```kotlin
shutdownXrayCore(0u)
```

### startXrayLogger(isAllPackages: Boolean, logger: AndroidLogger)

Enables logging with a custom callback to receive log messages.

**Parameters:**
- `isAllPackages: Boolean` - `true` to log all packages, `false` to log only `xray_lib` package
- `logger: AndroidLogger` - Callback interface to receive log messages

```kotlin
startXrayLogger(false, object : AndroidLogger {
    override fun log(message: String) {
        Log.d("Xray", message)
    }
})
```

### xrayVersion(version: Version)

Retrieves the current version of the Xray core via callback.

**Parameters:**
- `version: Version` - Callback interface to receive version string

```kotlin
xrayVersion(object : Version {
    override fun version(version: String) {
        Log.i("Xray", "Version: $version")
    }
})
```

## Callback Interfaces

### ProtectFd

Protects socket file descriptors from being routed through the VPN, preventing routing loops.

```kotlin
interface ProtectFd {
    fun protect(id: ULong): Boolean
}
```

**Implementation:**
```kotlin
override fun protect(id: ULong): Boolean {
    return (context as? VpnService)?.protect(id.toInt()) ?: false
}
```

### AndroidLogger

Receives log messages from the native core.

```kotlin
interface AndroidLogger {
    fun log(message: String)
}
```

**Implementation:**
```kotlin
override fun log(message: String) {
    Log.d("Xray", message)
}
```

### Version

Receives the version string from the core.

```kotlin
interface Version {
    fun version(version: String)
}
```

**Implementation:**
```kotlin
override fun version(version: String) {
    Log.i("Xray", "Version: $version")
}
```

## Kotlin Example

```kotlin
import com.xray.core.rust.*

class XrayService(private val context: Context) : ProtectFd {
    
    private val proxyId: UInt = 0u
    
    fun initialize() {
        initialize()
        
        val assetPath = context.filesDir.path
        initAssetPath(assetPath)
        
        startXrayLogger(false, object : AndroidLogger {
            override fun log(message: String) {
                Log.d("Xray", message)
            }
        })
        
        xrayVersion(object : Version {
            override fun version(version: String) {
                Log.i("Xray", "Version: $version")
            }
        })
    }
    
    fun start(configJson: String) {
        startXrayCore(proxyId, configJson, this)
    }
    
    fun stop() {
        shutdownXrayCore(proxyId)
    }
    
    override fun protect(id: ULong): Boolean {
        return (context as? VpnService)?.protect(id.toInt()) ?: false
    }
}

// Usage
val service = XrayService(this)
service.initialize()
service.start(configJson)
```

## Java Example

```java
import com.xray.core.rust.*;

public class XrayService implements ProtectFd {
    
    private Context context;
    private int proxyId = 0;
    
    public XrayService(Context context) {
        this.context = context;
    }
    
    public void initialize() {
        XrayKt.initialize();
        
        String assetPath = context.getFilesDir().getPath();
        XrayKt.initAssetPath(assetPath);
        
        XrayKt.startXrayLogger(false, new AndroidLogger() {
            @Override
            public void log(String message) {
                Log.d("Xray", message);
            }
        });
        
        XrayKt.xrayVersion(new Version() {
            @Override
            public void version(String version) {
                Log.i("Xray", "Version: " + version);
            }
        });
    }
    
    public void start(String configJson) {
        XrayKt.startXrayCore(proxyId, configJson, this);
    }
    
    public void stop() {
        XrayKt.shutdownXrayCore(proxyId);
    }
    
    @Override
    public boolean protect(long id) {
        if (context instanceof VpnService) {
            return ((VpnService) context).protect((int) id);
        }
        return false;
    }
}
```

## Supported Architectures

The AAR includes native libraries for the following ABIs:

| ABI | Architecture | Devices |
|-----|-------------|---------|
| `arm64-v8a` | 64-bit ARM | Modern Android phones (2015+) |
| `armeabi-v7a` | 32-bit ARM | Older Android devices |
| `x86_64` | 64-bit x86 | Android emulators, tablets |
| `x86` | 32-bit x86 | Older emulators, Intel-based devices |

## Notes

- The `id` parameter allows running multiple proxy instances simultaneously
- Implement `ProtectFd.protect()` to prevent VPN routing loops
- GeoIP/GeoSite files are required for advanced routing rules
