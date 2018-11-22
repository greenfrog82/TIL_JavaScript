import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements'

export default class TodoFilter extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  render () {
    const buttons = ['All', 'TODO', 'Completed']
    const { selectedIndex } = this.state
  
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 100}}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});