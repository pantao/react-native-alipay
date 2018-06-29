# Android 配置

1. 打开 `android/app/src/main/java/[...]/MainApplication.java`，添加 `new AlipayPackage()` 至 `getPackages()` 方法，像下面这样：

    ```java
    // ...

    import com.reactlibrary.AlipayPackage;

    public class MainApplication extends Application implements ReactApplication {

      private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        
        // ...

        @Override
        protected List<ReactPackage> getPackages() {
          return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new AlipayPackage() // Add this line
          );
        }
      };

      // ...
    }
    ```

2. 在 `android/settings.gradle` 文件中，添加以下行：

    ```
    include ':react-native-alipay'
    project(':react-native-alipay').projectDir = new File(rootProject.projectDir, '../node_modules/@0x5e/react-native-alipay/android')
    ```

3. 在 `android/app/build.gradle` 的 `dependencies` 中，添加以下行：

    ```
    compile project(':react-native-alipay')
    ```

4.  在 `android/app/proguard-rules.pro` 中添加以下行：

    ```
    -keep class com.alipay.** { *; }
    ```
