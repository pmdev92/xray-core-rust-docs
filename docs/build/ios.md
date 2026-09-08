---
title: iOS Library Usage
lang: en-US
---

# iOS Library Usage

This guide explains how to use the **Xray Core Rust** iOS framework (`LibXrayCoreRust.xcframework`).

## Prerequisites

- Xcode
- iOS 15.0+ deployment target
- `LibXrayCoreRust.xcframework` built via `./xray_scripts/apple_build.sh`

## Installation

1. Copy `LibXrayCoreRust.xcframework` to your project
2. In Xcode: **General** → **Frameworks, Libraries, and Embedded Content** → **+** → Add the framework
3. Set **Embed & Sign**

## Available Functions

The iOS framework exposes C functions via FFI.

### init_asset_path(path)

Sets the directory path where GeoIP and GeoSite database files are located.

**Parameters:**
- `path` - Absolute path to the asset directory

```swift
init_asset_path(assetPath)
```

### start_xray_core(id, config)

Starts the Xray proxy core with the provided JSON configuration.

**Parameters:**
- `id` - Instance identifier (allows running multiple instances)
- `config` - JSON configuration string

```swift
config.withCString { configPtr in
    start_xray_core(0, configPtr)
}
```

### shutdown_xray_core(id)

Stops a running proxy instance.

**Parameters:**
- `id` - Instance identifier to stop

```swift
shutdown_xray_core(0)
```

### request_check_xray_core(id)

Requests a connection check for the specified instance.

**Parameters:**
- `id` - Instance identifier

```swift
request_check_xray_core(0)
```

### get_xray_statistics(id)

Returns traffic statistics for the proxy instance.

**Parameters:**
- `id` - Instance identifier

**Returns:** Statistics struct with fields:
- `success` - Whether statistics are available
- `total_upload` - Total bytes uploaded
- `total_download` - Total bytes downloaded
- `duration_upload` - Upload duration in milliseconds
- `duration_download` - Download duration in milliseconds
- `duration` - Total duration in milliseconds

```swift
let result = get_xray_statistics(0)
if result.success {
    print("Upload: \(result.total_upload), Download: \(result.total_download)")
}
```

### start_xray_logger(is_all_packages, callback, ctx)

Enables logging with a callback to receive log messages.

**Parameters:**
- `is_all_packages` - `true` to log all packages, `false` to log only `xray_lib`
- `callback` - Callback to receive log messages
- `ctx` - User context pointer

```swift
start_xray_logger(false, { message, ctx in
    if let msg = message {
        print(String(cString: msg))
    }
}, nil)
```

### start_xray_crash(callback, ctx)

Enables crash reporter with a callback to receive crash information.

**Parameters:**
- `callback` - Callback to receive crash info
- `ctx` - User context pointer

```swift
start_xray_crash({ info, ctx in
    if let crashInfo = info {
        print(String(cString: crashInfo))
    }
}, nil)
```

### xray_version(callback)

Retrieves the current version of the Xray core.

**Parameters:**
- `callback` - Callback to receive version string

```swift
xray_version { versionPtr in
    if let version = versionPtr {
        print("Version: \(String(cString: version))")
    }
}
```

## Swift Example

```swift
import Foundation

class XrayProxy {
    private var id: UInt32 = 0
    
    func initialize(assetPath: String) {
        init_asset_path(assetPath)
        
        // Enable logging
        start_xray_logger(false, { message, ctx in
            if let msg = message {
                print("Xray: \(String(cString: msg))")
            }
        }, nil)
        
        // Enable crash reporter
        start_xray_crash({ info, ctx in
            if let crashInfo = info {
                print("Crash: \(String(cString: crashInfo))")
            }
        }, nil)
        
        // Get version
        xray_version { versionPtr in
            if let version = versionPtr {
                print("Xray Version: \(String(cString: version))")
            }
        }
    }
    
    func start(config: String) {
        config.withCString { configPtr in
            start_xray_core(id, configPtr)
        }
    }
    
    func stop() {
        shutdown_xray_core(id)
    }
    
    func checkConnection() {
        request_check_xray_core(id)
    }
    
    func getStats() -> (upload: UInt64, download: UInt64) {
        let result = get_xray_statistics(id)
        return (result.total_upload, result.total_download)
    }
}
```

## Objective-C Example

```objc
#import <LibXrayCoreRust/LibXrayCoreRust.h>

@interface XrayProxy : NSObject
@property (nonatomic, assign) UInt32 proxyId;
@end

@implementation XrayProxy

- (void)initializeWithAssetPath:(NSString *)assetPath {
    init_asset_path([assetPath UTF8String]);
    
    start_xray_logger(false, ^(const char *message, void *ctx) {
        if (message) {
            NSLog(@"Xray: %s", message);
        }
    }, nil);
    
    xray_version(^(const char *version) {
        if (version) {
            NSLog(@"Version: %s", version);
        }
    });
}

- (void)startWithConfig:(NSString *)config {
    start_xray_core(self.proxyId, [config UTF8String]);
}

- (void)stop {
    shutdown_xray_core(self.proxyId);
}

- (void)checkConnection {
    request_check_xray_core(self.proxyId);
}

- (void)getStatsWithCompletion:(void (^)(UInt64 upload, UInt64 download))completion {
    StatisticsResult result = get_xray_statistics(self.proxyId);
    if (result.success) {
        completion(result.total_upload, result.total_download);
    }
}

@end
```

## Supported Platforms

The XCFramework supports multiple Apple platforms:

| Platform | Architectures |
|----------|---------------|
| iOS | arm64, arm64e |
| iOS Simulator | arm64, x86_64 |
| macOS | arm64, x86_64 |
| macOS Catalyst | arm64, x86_64 |
| tvOS | arm64 |
| tvOS Simulator | arm64, x86_64 |
| watchOS | arm64 |
| watchOS Simulator | arm64 |

## Notes

- The `id` parameter allows running multiple proxy instances simultaneously
- Use statistics to monitor traffic usage
- Implement logging callback for debugging
- Crash reporter helps identify issues in production
