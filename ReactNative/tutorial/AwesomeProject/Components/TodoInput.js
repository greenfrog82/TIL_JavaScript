import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default class TodoInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Type here your todo item'></TextInput> 
        <Button title="Click" onPress={() => alert('test')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

