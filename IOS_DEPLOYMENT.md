# iOS Deployment Guide

This guide covers deploying the Meal Planner app to iOS devices.

## Prerequisites

### Required Software (macOS only)

1. **Xcode**
   - Download from Mac App Store
   - Version 14.0 or higher recommended
   - Install Command Line Tools:
     ```bash
     xcode-select --install
     ```

2. **CocoaPods**
   ```bash
   sudo gem install cocoapods
   ```

3. **Node.js**
   ```bash
   brew install node
   ```

## Initial iOS Setup

1. **Navigate to project directory**
   ```bash
   cd /path/to/meal-planner
   ```

2. **Install npm dependencies**
   ```bash
   npm install
   ```

3. **Install iOS dependencies**
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Development Build

### Running on iOS Simulator

1. **Start Metro bundler**
   ```bash
   npm start
   ```

2. **In a new terminal, run on simulator**
   ```bash
   npm run ios
   ```

3. **Or specify a device**
   ```bash
   npm run ios -- --simulator="iPhone 15 Pro"
   ```

### Running on Physical Device

1. **Open project in Xcode**
   ```bash
   open ios/MealPlanner.xcworkspace
   ```

2. **Configure Signing**
   - Select the MealPlanner target
   - Go to "Signing & Capabilities" tab
   - Select your development team
   - Xcode will automatically create provisioning profile

3. **Connect your iPhone/iPad**
   - Unlock the device
   - Trust the computer if prompted
   - Select your device in Xcode

4. **Build and Run**
   - Press ⌘+R or click the Run button
   - App will install and launch on device

## Production Build

### App Store Preparation

1. **Configure app information**
   - Update bundle identifier in `ios/MealPlanner/Info.plist`
   - Set version and build number

2. **Configure signing for release**
   - In Xcode, select Release configuration
   - Choose distribution certificate
   - Select App Store provisioning profile

3. **Archive the app**
   - In Xcode: Product → Archive
   - Wait for archive to complete

4. **Upload to App Store Connect**
   - In Organizer, select archive
   - Click "Distribute App"
   - Choose "App Store Connect"
   - Follow the upload wizard

### TestFlight Distribution

1. **Create archive** (as above)

2. **Upload to TestFlight**
   - Distribute App → App Store Connect
   - Select "Upload"
   - App will appear in TestFlight after processing

3. **Add testers**
   - In App Store Connect
   - Go to TestFlight tab
   - Add internal or external testers

## Configuration Files

### Info.plist

Key settings in `ios/MealPlanner/Info.plist`:
```xml
<key>CFBundleDisplayName</key>
<string>Meal Planner</string>
<key>CFBundleIdentifier</key>
<string>com.yourcompany.mealplanner</string>
<key>CFBundleVersion</key>
<string>1</string>
<key>CFBundleShortVersionString</key>
<string>1.0.0</string>
```

### App Icons

Place app icons in `ios/MealPlanner/Images.xcassets/AppIcon.appiconset/`

Required sizes:
- 20x20 (@2x, @3x)
- 29x29 (@2x, @3x)
- 40x40 (@2x, @3x)
- 60x60 (@2x, @3x)
- 1024x1024 (App Store)

### Launch Screen

Edit `ios/MealPlanner/LaunchScreen.storyboard` for custom launch screen.

## App Capabilities

Enable capabilities in Xcode → Signing & Capabilities:

### Common Capabilities for Meal Planning Apps
- **Push Notifications** - For meal reminders and grocery alerts
- **Background Modes** - For background data sync
- **Sign in with Apple** - For authentication
- **App Groups** - For data sharing

## Security Configuration

### App Transport Security

In `Info.plist`, configure ATS for secure connections:
```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <false/>
</dict>
```

### Permissions

Add permission descriptions:
```xml
<key>NSCameraUsageDescription</key>
<string>Camera access for taking recipe photos</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>Photo library access for recipe images</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>Location access to find nearby grocery stores</string>
```

## Build Optimization

### Release Build Settings

1. **Enable optimization**
   - Build Settings → Optimization Level → Fastest, Smallest [-Os]

2. **Strip debug symbols**
   - Build Settings → Strip Debug Symbols During Copy → Yes

3. **Enable bitcode** (if required by dependencies)
   - Build Settings → Enable Bitcode → Yes

## Troubleshooting

### Pod Install Issues

```bash
cd ios
rm -rf Pods
pod deintegrate
pod install
```

### Build Fails

```bash
# Clean build folder
cd ios
xcodebuild clean
rm -rf ~/Library/Developer/Xcode/DerivedData
cd ..
npm start -- --reset-cache
```

### Device Not Recognized

1. Restart Xcode
2. Unplug and replug device
3. Trust computer on device
4. Check device in Window → Devices and Simulators

### Code Signing Issues

1. Verify Apple Developer account is valid
2. Check certificate expiration
3. Regenerate provisioning profiles
4. Download and install in Xcode

## Continuous Integration

### Using GitHub Actions

Example workflow for iOS builds:

```yaml
name: iOS Build

on: [push, pull_request]

jobs:
  build:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Install pods
        run: cd ios && pod install
      - name: Build iOS
        run: npx react-native run-ios --configuration Release
```

### Using Fastlane

Install Fastlane:
```bash
sudo gem install fastlane
```

Initialize in ios directory:
```bash
cd ios
fastlane init
```

## App Store Submission Checklist

- [ ] App icons (all sizes)
- [ ] Launch screen
- [ ] Screenshots (all required device sizes)
- [ ] App description and keywords
- [ ] Privacy policy URL
- [ ] Support URL
- [ ] Age rating configured
- [ ] In-app purchases configured (if any)
- [ ] TestFlight testing completed
- [ ] Build uploaded and processing complete
- [ ] All required app information filled

## Resources

- [React Native iOS Guide](https://reactnative.dev/docs/running-on-device)
- [Xcode Documentation](https://developer.apple.com/xcode/)
- [App Store Connect](https://appstoreconnect.apple.com/)
- [iOS Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios)
