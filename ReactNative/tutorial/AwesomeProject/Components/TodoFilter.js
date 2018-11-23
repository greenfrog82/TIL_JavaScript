import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements'
import { connect } from 'react-redux';

import { filterTodo } from '../Actions/TodoFilterAction';

class TodoFilter extends Component {
  constructor () {
    super()
    this.updateIndex = this.updateIndex.bind(this)
  }
  
  updateIndex (selectedIndex) {
    this.props.filterTodo(selectedIndex);
  }
  
  render () {
    const buttons = ['All', 'TODO', 'Completed']
    // const { selectedIndex } = this.
  
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={this.props.selectedIndex}
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

const mapStateToProps = state => ({
  selectedIndex: state.todos.visible_type
})

const mapDispatchToPros = {
  filterTodo
}

export default connect(mapStateToProps, mapDispatchToPros)(TodoFilter);