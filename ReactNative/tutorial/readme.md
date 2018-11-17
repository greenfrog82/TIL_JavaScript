# Tutorial

`React Native`의 공식문서를 이를 공부해보자. 

# [Getting Started](https://facebook.github.io/react-native/docs/getting-started)

여기서는 `React Native`를 설치하고 첫 `React Native App`을 빌드해보도록 한다.   

`Expo`(https://expo.io/)는 `React Native` Application을 빌드학 위한 가장 쉬운 방법을 제공한다. `Expo`는 `React Native` Project를 시작하기 위해 `Xcode` 또는 `Android Studio`등 어떤 툴의 설치 또는 설정을 필요로하지 않는다.  

`Expo`는 다음 명령을 통해 설치한다.  

>$ npm install -g expo-cli

그런 다음 명령을 통해 새로운 `React Native` Project를 시작할 수 있다. 

>$ expo init [React Native Project Name]

위 명령을 이용해서 학습에 이용할 `AwesomeProject`를 생성하고 개발에 필요한 development server를 실행해보자.   

```sh
$ expo init AwesomeProject
? Choose a template: blank
[08:06:21] Downloading project files...
[08:06:24] Extracting project files...
[08:06:30] Customizing project...

Your project is ready at /Users/a201808045/github/TIL_JavaScript/ReactNative/tutorial/AwesomeProject
To get started, you can type:

  cd AwesomeProject
  expo start
$ cd AwesomeProject
$ expo start
[08:07:51] Starting project at /Users/a201808045/github/TIL_JavaScript/ReactNative/tutorial/AwesomeProject
[08:07:52] Expo DevTools is running at http://localhost:19002
[08:07:52] Opening DevTools in the browser... (press shift-d to disable)
[08:07:56] Starting Metro Bundler on port 19001.
[08:08:02] Tunnel ready.

  exp://192.168.35.251:19000

![Expo DevTools QR Code](./expo_start_qr.png)

To run the app with live reloading, choose one of:
  • Scan the QR code above with the Expo app (Android) or the Camera app (iOS).
  • Press a for Android emulator, or i for iOS simulator.
  • Press e to send a link to your phone with email/SMS.
  • Press s to sign in and enable more options.

Press ? to show a list of all available commands.
Logs for your project will appear below. Press Ctrl+C to exit.
```

일단 위와 같이 development server가 실행되면 휴대폰을 통해 해당 앱을 실행시켜 볼수도 있고, `xcode`를 통해 `iOS simulator`를 실행해 볼수도 있다. 아! 본 문서에서는 `iOS` 기준으로 설명한다.  

휴대폰으로 확인하는것은 불편하고 본 문서는 학습용이니 `xcode`를 통해 `iOS simulator`를 사용해서 앱을 확인해보자. `xcode`가 없다면 `App Store`를 통해 설치한 후 다음 명령을 통해 `iOS simulator`를 실행하자.





