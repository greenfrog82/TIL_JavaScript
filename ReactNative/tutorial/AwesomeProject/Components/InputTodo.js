import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class InputTodo extends Component {
  render() {
    return (
      // <View style={styles.container}>
      <View>
          <TextInput placeholder='Type here your todo item'></TextInput> 
          <Button title="Click" onPress={() => alert('test')}/>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
});