import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import TodoFilter from './Components/TodoFilter';

import reducer from './Reducers/TodoReducer'

let store = createStore(reducer)
// store.dispatch(addTodo('test'));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoList />
          <TodoInput />
          <TodoFilter />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  }
});


