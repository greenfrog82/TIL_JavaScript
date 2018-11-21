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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});