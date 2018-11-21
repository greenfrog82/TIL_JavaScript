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

# [Learn the Basic](https://facebook.github.io/react-native/docs/tutorial)

`React Native`가 `React`와 비슷하지만, 웹 콤포넌트가 아닌 네이비트 콤포넌트를 사용한다. 그래서 `React Native`의 기본 구조를 알아야하고, `React`의 `JSX`, `state`, `props`과 같은 기본적인 컨셉도 알아야한다.  
이제 `React Native`을 공부해보자.   

## Hello World

고대의 모든 프로그래밍 언어들과 같이 'Hello World'부터 출력해보자.  
`React Native`도 `React`와 동일한 `App.js`앱의 Entry Point이다. 따라서, 여기에 코드를 작성해주면된다.  
공식문서의 예제에는 CSS 적용을 안해두었지만, 내가 테스트했던 아이폰 모델(iPhone XR 12.1)의 경우 문자가 화면 상단으로 넘어가는 문제가 있어서 문자를 중앙에 표시하도록 CSS를 적용해두었다.  

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

그리고 `React`를 할때와의 차이점 하나는 번들링이 필요없어서 `Webpack`이 보이지 않는다는 것이다.  
일단 위와 같이 코드를 수정하면 에뮬레티에 바로 반영(Hot Reload)되는 것을 확인할 수 있다. 일단 편리하다. 

# Props

`Component`로 전달되는 파라메터를 `Props`라고한다.
`Props`는 `immutable`한 특징을 가지고 있다. 이러한 특징은 부모 콤포넌트의 `state`를 통해 전달 된 데이터를 자식 콤포넌트에서 임의로 변경하여 발생하게 되는 상태 관리의 어려움을 해결하기 위한것이다. 

다음 예제는 `Greeting`이라는 user defind component에 `name`이라는 `Props`를 전달하여 출력한다.

```javascript
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='종수' />
        <Greeting name='태원' />
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}
```

# State

`Component`는 자신의 상태값을 갖는다. 이 상태값을 변화에 따라 `Component`가 출력하는 정보가 변화한다.  
이러한 상태값을 `React`와 `React Native`는 `state`를 통해 관리한다. 그리고 이 상태값이 변경되면 해당 콤포넌트를 새로 그립니다. 

일반적으로, `state`는 `constructor`에서 초기화되고 변경을 원하는 곳에서 `setState` 메소드를 통해 변경할 수 있다.  

앞서 만들었던 `Greeting` 콤포넌트에 인삿말을 1초에 한번씩 번갈아가며 화면에 나타났다가 사라지도록해보자.  
이때 `state`에 인삿말이 화면에 출력될수 있는지 없는지에 대한 상태를 관리할 것이다. 

```javascript
class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = { isShowMsg: true }

    setInterval(() => {
      this.setState(previousState => {
        return { isShowMsg: !previousState.isShowMsg }
      })
    }, 1000);
  }

  render() {
    if (!this.state.isShowMsg)
      return null;
    
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}
```

# Style

위 코드에서 CSS를 적용하는 부분이 독특해보일 것이다. `React Native`에서는 CSS도 콤포넌트화해서 쓸 수 있다.   
적용된 CSS들은 기존에 '-'로 분리하던 부분을 CamelCase로 바꾼것이지 모두 CSS에 대응된다. 
