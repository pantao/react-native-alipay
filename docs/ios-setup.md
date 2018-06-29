# IOS 配置流程

1. 在 XCode 项目导航工具中，右击 `Libraries` -> `Add Files to [项目名称]`，选择 `node_modules/pantao/react-native-alipay`，选择并添加 `RCTAlipay.xcodeproj`；

2. 选择你的项目，进入 `Build Phases` -> `Link Binary With Libraries`，添加以下库：

    - `libc++.tbd`
    - `libz.tbd`
    - `CFNetwork.framework`
    - `CoreGraphics.framework`
    - `CoreMotion.framework`
    - `CoreTelephony.framework`
    - `CoreText.framework`
    - `Foundation.framework`
    - `QuartzCore.framework`
    - `SystemConfiguration.framework`
    - `UIKit.framework`
    - `libRCTAlipay.a`

3. 在 `Targets` -> `Info` -> `Custom iOS Target Properties` 中添加 `alipay` 至 `LSApplicationQueriesSchemes` ，或许直接编辑 `Info.plist` 文件 ，添加以下内容：

    ```xml
    <key>LSApplicationQueriesSchemes</key>
    <array>
      <string>alipay</string> <!-- Add this line -->
    </array>
    ```

4. 打开 `AppDelegate.m` 文件，在 `AppDelegate` 中实现以下两个方法：

    ```objective-c
    // ...
    #import <React/RCTLinkingManager.h>

    @implementation AppDelegate

    // ...

    - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
      sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
    {
      return [RCTLinkingManager application:application openURL:url
                          sourceApplication:sourceApplication annotation:annotation];
    }

    - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
                options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options
    {
      return [RCTLinkingManager application:application openURL:url options:options];
    }

    @end
    ```

5. 在 `Info` -> `URL Types` 中，添加一个新的 `url type`，`Identifier` 设置为 `ailpay`，在 `URL Schemes` 中设置一个唯一ID（任何合法字符串均可）