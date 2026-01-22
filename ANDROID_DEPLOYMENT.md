# Android Deployment Guide

This guide provides detailed instructions for building and deploying the Meal Planner app to Android devices and emulators.

## Prerequisites

### Required Software

1. **Node.js** (>= 18.x)
   ```bash
   node --version
   ```

2. **Java Development Kit (JDK)** (>= 17)
   ```bash
   java -version
   ```

3. **Android Studio** (latest version)
   - Download from [developer.android.com/studio](https://developer.android.com/studio)
   - Install Android SDK Platform 35
   - Install Android Build Tools 35.0.0

4. **Android SDK**
   - Set ANDROID_HOME environment variable
   - Add platform-tools to PATH

### Environment Setup

#### Windows
```bash
setx ANDROID_HOME "%LOCALAPPDATA%\Android\Sdk"
setx PATH "%PATH%;%LOCALAPPDATA%\Android\Sdk\platform-tools"
```

#### macOS/Linux
Add to `~/.bash_profile` or `~/.zshrc`:
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd meal-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Running on Android

### Option 1: Android Emulator

1. **Create an Android Virtual Device (AVD)**
   - Open Android Studio
   - Go to Tools → Device Manager
   - Click "Create Device"
   - Select a device (e.g., Pixel 6)
   - Download and select a system image (API 35 recommended)
   - Click "Finish"

2. **Start the emulator**
   - Launch the AVD from Android Studio Device Manager
   - Or use command line:
     ```bash
     emulator -avd <avd-name>
     ```

3. **Run the app**
   ```bash
   npm run android
   ```

### Option 2: Physical Android Device

1. **Enable Developer Options on your device**
   - Go to Settings → About Phone
   - Tap "Build Number" 7 times
   - Go back to Settings → System → Developer Options
   - Enable "USB Debugging"

2. **Connect your device**
   - Connect via USB cable
   - Allow USB debugging when prompted

3. **Verify device connection**
   ```bash
   adb devices
   ```

4. **Run the app**
   ```bash
   npm run android
   ```

## Building for Release

### Generate a Release Key

1. **Create a keystore**
   ```bash
   keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   ```

2. **Store keystore securely**
   - Move the keystore to `android/app/`
   - **Never commit the keystore to version control**

### Configure Signing

1. **Create `android/gradle.properties` (if not exists)**
   ```properties
   MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
   MYAPP_RELEASE_KEY_ALIAS=my-key-alias
   MYAPP_RELEASE_STORE_PASSWORD=*****
   MYAPP_RELEASE_KEY_PASSWORD=*****
   ```

2. **Update `android/app/build.gradle`**
   Add release signing config:
   ```gradle
   android {
       ...
       signingConfigs {
           release {
               if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                   storeFile file(MYAPP_RELEASE_STORE_FILE)
                   storePassword MYAPP_RELEASE_STORE_PASSWORD
                   keyAlias MYAPP_RELEASE_KEY_ALIAS
                   keyPassword MYAPP_RELEASE_KEY_PASSWORD
               }
           }
       }
       buildTypes {
           release {
               ...
               signingConfig signingConfigs.release
           }
       }
   }
   ```

### Build Release APK

```bash
cd android
./gradlew assembleRelease
```

The APK will be at: `android/app/build/outputs/apk/release/app-release.apk`

### Build Android App Bundle (AAB)

For Google Play Store submission:

```bash
cd android
./gradlew bundleRelease
```

The AAB will be at: `android/app/build/outputs/bundle/release/app-release.aab`

## Troubleshooting

### Common Issues

#### Issue: "SDK location not found"
**Solution:** Set ANDROID_HOME environment variable correctly

#### Issue: "Could not resolve all dependencies"
**Solution:** 
- Check internet connection
- Run `./gradlew --refresh-dependencies`
- Clear gradle cache: `rm -rf ~/.gradle/caches/`

#### Issue: "Unable to load script"
**Solution:** 
- Ensure Metro bundler is running: `npm start`
- Clear Metro cache: `npm start -- --reset-cache`

#### Issue: "Device not detected"
**Solution:**
- Check USB debugging is enabled
- Try different USB cable/port
- Run `adb kill-server && adb start-server`

### Clean Build

If you encounter build issues, try:

```bash
cd android
./gradlew clean
cd ..
npm start -- --reset-cache
npm run android
```

## App Configuration

### App Name
The app name is set in `android/app/src/main/res/values/strings.xml`:
```xml
<string name="app_name">Meal Planner</string>
```

### Package Name
The package name is `com.mealplanner` (defined in `android/app/build.gradle`)

### App Icon
Replace icons in `android/app/src/main/res/mipmap-*/` with your custom icons

### Permissions
Add required permissions to `android/app/src/main/AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.CAMERA" />
<!-- Add other permissions as needed -->
```

## Publishing to Google Play Store

1. **Build a signed AAB**
   ```bash
   cd android
   ./gradlew bundleRelease
   ```

2. **Create a Google Play Console account**
   - Visit [play.google.com/console](https://play.google.com/console)
   - Pay one-time registration fee

3. **Create a new app**
   - Fill in app details
   - Upload screenshots and descriptions
   - Upload the AAB file
   - Complete content rating questionnaire
   - Set pricing and distribution

4. **Submit for review**

## Additional Resources

- [React Native Android Setup](https://reactnative.dev/docs/environment-setup)
- [Android Developer Documentation](https://developer.android.com/)
- [Publishing to Google Play](https://reactnative.dev/docs/signed-apk-android)

## Support

For issues specific to this project, please open an issue on GitHub.
