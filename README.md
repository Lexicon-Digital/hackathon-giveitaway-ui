# Give It Away App
# Prerequisite

* XCode > 11.3.1
* Android Studio > 3.6
* Android SDK Setup > Android 8
* Ionic CLI > 6.12.4
* CocoaPods > 1.10.1

# CI/CD

TBD

# Running the application

1. Installing the dependencies

```
npm install
```

2. You can run the application from different environments
    
    Browser - Only UI features are available

    ```
    npm install
    ionic serve
    ```

    iOS Device Emulator

    ```
    npm run build
    npx cap sync
    npx cap open ios
    ```

    Android Device Emulator

    ```
    npm run build
    npx cap sync
    npx cap open android
    ```
