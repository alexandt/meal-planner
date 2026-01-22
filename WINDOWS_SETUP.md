# Windows Development Guide

This guide covers setting up the development environment for the Meal Planner app on Windows.

## Prerequisites

### Required Software

1. **Node.js (v18 or higher)**
   - Download from: https://nodejs.org/
   - Choose the LTS version
   - Verify installation:
     ```cmd
     node --version
     npm --version
     ```

2. **Git for Windows**
   - Download from: https://git-scm.com/download/win
   - Use Git Bash for better command-line experience

3. **Visual Studio Code (Recommended)**
   - Download from: https://code.visualstudio.com/
   - Install recommended extensions:
     - React Native Tools
     - ESLint
     - Prettier
     - TypeScript and JavaScript Language Features

### Optional (for Android development)

4. **Android Studio**
   - Download from: https://developer.android.com/studio
   - Install Android SDK
   - Set up Android Virtual Device (AVD)

## Initial Setup

1. **Clone the repository**
   ```cmd
   git clone <repository-url>
   cd meal-planner
   ```

2. **Install project dependencies**
   ```cmd
   npm install
   ```

3. **Verify the setup**
   ```cmd
   npm run lint
   npm test
   ```

## Development Workflow

### Starting Development

1. **Start the Metro bundler**
   ```cmd
   npm start
   ```
   This will start the React Native development server.

2. **In a new terminal, run the app** (if testing on Android)
   ```cmd
   npm run android
   ```

### Code Editing

- Use VS Code for editing
- TypeScript will provide type checking
- ESLint will highlight code style issues
- Prettier will auto-format on save (if configured)

### Hot Reload

React Native supports hot reloading:
- Press `r` in the Metro terminal to reload
- Press `d` to open developer menu
- Changes to code will automatically refresh the app

## Building for iOS

Since you're developing on Windows, you cannot build iOS apps directly. You have two options:

### Option 1: Use macOS Machine or Cloud Service

1. **Transfer code to macOS** (via Git)
   ```bash
   git push origin main
   ```

2. **On macOS, pull and build**
   ```bash
   git pull origin main
   cd ios
   pod install
   cd ..
   npm run ios
   ```

### Option 2: Use Expo EAS (Cloud Build)

1. **Install Expo CLI**
   ```cmd
   npm install -g eas-cli
   ```

2. **Configure EAS**
   ```cmd
   eas build:configure
   ```

3. **Build for iOS in the cloud**
   ```cmd
   eas build --platform ios
   ```

## Testing on Windows

### Unit Tests
```cmd
npm test
```

### Linting
```cmd
npm run lint
```

### Type Checking
```cmd
npx tsc --noEmit
```

## Common Issues and Solutions

### Issue: Metro bundler won't start
**Solution:**
```cmd
npx react-native start --reset-cache
```

### Issue: Dependencies not installed correctly
**Solution:**
```cmd
rm -rf node_modules
npm install
```

### Issue: Port 8081 already in use
**Solution:**
```cmd
npx react-native start --port 8082
```

## IDE Configuration

### VS Code Settings

Add to `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Performance Tips

1. **Use TypeScript** for better IntelliSense
2. **Enable Fast Refresh** (enabled by default)
3. **Use React DevTools** for debugging
4. **Profile with Chrome DevTools**

## Next Steps

1. Start implementing your application features
2. Set up continuous integration (GitHub Actions, Azure Pipelines)
3. Configure code signing for iOS builds
4. Set up crash reporting and analytics
5. Implement automated testing

## Resources

- [React Native Documentation](https://reactnative.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [React Native on Windows Guide](https://microsoft.github.io/react-native-windows/)


