# Meal Planner

A cross-platform mobile application for meal planning, recipe management, and grocery shopping. This project supports both iOS and Android platforms.

## 🎯 Project Overview

This app provides a complete solution for managing your meals and groceries with three main features:
- **Recipe Building** - Create and organize your recipe collection
- **Meal Planning** - Plan your meals for the week
- **Grocery Lists** - Generate and manage shopping lists

## 🚀 Technology Stack

- **React Native 0.76.6** - Cross-platform mobile framework
- **TypeScript 5.0.4** - Type-safe JavaScript
- **React 18.3.1** - UI library
- **Jest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 💻 Development Environment

### Prerequisites

- **Node.js** >= 18.x
- **npm** or **yarn**
- For iOS deployment:
  - macOS machine with Xcode (for building iOS apps)
  - CocoaPods (for iOS dependencies)
- For Android deployment:
  - Android Studio with Android SDK
  - Java Development Kit (JDK) >= 17

### Windows Development Setup

1. **Install Node.js**
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd meal-planner
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the Metro bundler**
   ```bash
   npm start
   ```

## 📱 iOS Deployment

### Building for iOS

1. **On a macOS machine**, navigate to the ios directory:
   ```bash
   cd ios
   pod install
   cd ..
   ```

2. **Run on iOS simulator**
   ```bash
   npm run ios
   ```

3. **Build for iOS device**
   - Open `ios/MealPlanner.xcworkspace` in Xcode
   - Configure signing & capabilities
   - Select your device
   - Build and run (⌘+R)

## 🤖 Android Deployment

### Building for Android

1. **Set up Android development environment**
   - Install Android Studio
   - Set ANDROID_HOME environment variable
   - Install Android SDK Platform 35

2. **Run on Android emulator**
   ```bash
   npm run android
   ```

3. **Run on Android device**
   - Enable USB debugging on your device
   - Connect via USB
   - Run `npm run android`

For detailed Android setup and deployment instructions, see [ANDROID_DEPLOYMENT.md](ANDROID_DEPLOYMENT.md).

## 📂 Project Structure

```
meal-planner/
├── __tests__/          # Test files
│   └── App.test.tsx
├── android/            # Android native code and configuration
│   ├── app/            # Android app module
│   ├── gradle/         # Gradle wrapper
│   └── build.gradle    # Gradle build configuration
├── ios/                # iOS native code and configuration
│   ├── Podfile         # CocoaPods dependencies
│   └── .xcode.env      # Xcode environment configuration
├── App.tsx             # Main application component
├── index.js            # Application entry point
├── app.json            # App configuration
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
├── babel.config.js     # Babel configuration
├── metro.config.js     # Metro bundler configuration
├── jest.config.js      # Jest test configuration
├── .eslintrc.js        # ESLint configuration
└── .prettierrc.js      # Prettier configuration
```

## 🧪 Testing

Run tests with:
```bash
npm test
```

## 🔧 Available Scripts

- `npm start` - Start the Metro bundler
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator/device
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## 🏗️ Building Features

This framework is ready for implementing meal planning features:

### 1. Recipe Building
- Create and edit recipes
- Add ingredients with quantities
- Write step-by-step instructions
- Upload recipe photos
- Categorize with tags
- Rate and favorite recipes

### 2. Meal Planning
- Weekly/monthly calendar view
- Assign recipes to specific days
- Plan breakfast, lunch, dinner, snacks
- Nutritional information tracking
- Serving size adjustments
- Meal plan templates

### 3. Grocery Lists
- Auto-generate from meal plans
- Manual item addition
- Organize by store sections
- Check off items while shopping
- Price tracking
- Multiple list support
- Share lists with family

## 📋 Detailed Guides

- [Windows Setup Guide](WINDOWS_SETUP.md) - Detailed Windows development setup
- [iOS Deployment Guide](IOS_DEPLOYMENT.md) - Complete iOS deployment instructions
- [Android Deployment Guide](ANDROID_DEPLOYMENT.md) - Complete Android deployment instructions

## 📝 License

ISC

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and add tests for any new features.
