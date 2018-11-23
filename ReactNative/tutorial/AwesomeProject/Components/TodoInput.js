import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';
import { connect } from 'react-redux';

import { addTodo } from '../Actions/TodoInpuAction'

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Type here your todo item' onChangeText={text => this.setState({input: text})}></TextInput> 
        <Button title="Click" onPress={() => this.props.addTodo(this.state.input)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const mapDispatchToPros = {
  addTodo
}

export default connect(null, mapDispatchToPros)(TodoInput)