# Tutorial

`React Native`의 공식문서를 이를 공부해보자.   
본 문서에서는 `iOS` 기준으로 내용을 설명할 것이다. 

# [Getting Started](https://facebook.github.io/react-native/docs/getting-started)

여기서는 `React Native`를 설치하고 첫 `React Native App`을 빌드해보도록 한다.   

`Expo`(https://expo.io/)는 `React Native` Application을 빌드하기 위한 가장 쉬운 방법을 제공한다. `Expo`는 `React Native` Project를 시작하기 위해 `Xcode` 또는 `Android Studio`등 어떤 툴의 설치 또는 설정을 필요로하지 않는다. 

>여기서 한가지 궁금증이 생기는데, `Xcode`나 `Android Studio`에서 제공하는 에뮬레이터를 사용하지 않고 어떻게 개발중인 앱을 확인하냐이다. 
`Expo`는 기본적으로 휴대폰에 `Expo`앱을 설치하고 이를 통해 개발 중인 앱을 확인할 수 있는 방법을 제공한다. 만약, 개발자가 개발중인 앱을 휴대폰을 통해 확인하는 것이 불편한 경우(대개 개발중일 때는 그러할 것이다) `Xcode`나 `Android Studio`를 설치한 후 여기서 제공하는 에뮬레이터를 통해 개발중인 앱을 확인할 수 있다.

`Expo`는 다음 명령을 통해 설치한다.  

>$ npm install -g expo-cli

그런 다음 명령을 통해 새로운 `React Native` Project를 시작할 수 있다.  

>$ expo init [React Native Project Name]

Project를 생성한 후 해당 프로젝트 경로로 이동해서 다음 명령을 실행하면, 개발에 필요한 `Development Server(이하 dev server)`를 실행하게 된다.   
이 `dev server`를 통해 `Mobile Emulator`를 실행하고 모니터링 할 수 있다.  

>$ cd [React Native Project Name]
>$ expo start

위 명령을 이용해서 학습에 이용할 `AwesomeProject`를 생성하고 개발에 필요한 `dev server`를 실행해보자.   

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

`dev server`가 실행되면, 여기에 접속된 웹 브라우저를 하나 띄워준다.  
이 웹 브라우저를 통해 에뮬레이터도 실행할 수 있고, 해당 앱의 실행을 모니터링 할 수도 있다.

본 문서는 학습용이므로 에뮬레이터를 통해 학습용 앱을 확인하도록 하자. 
`Xcode`가 설치되어 있지 않다면 우선 설치한 후, 웹 브라우저(아래 그림)에서 `Run on iOS simulator`를 클릭하자. 그러면 에뮬레이터가 샐행되고 앱이 출력된다.   

![./dev_server.png](./dev_server.png)

위 방법 말고도 다음 명령들을 통해서도 에뮬레이터를 실행시킬 수 있다.  
다음 명령을 사용하면 해당 플랫폼의 에뮬레이터가 바로 실행되어서 좀 더 편리하다.

>$ npm run ios
>$ npm run android

