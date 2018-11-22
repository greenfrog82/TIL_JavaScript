import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import TodoFilter from './Components/TodoFilter';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoList />
        <TodoInput />
        <TodoFilter />
      </View>

      // <View style={styles.container}>
      // <View>
      //   <View>
      //     {/* <FlatList style={flat_list_styles.container}  */}
      //   {/* <FlatList style={styles.container} */}
      //     <FlatList
      //       data={[
      //           {key: 'Devin'},
      //           {key: 'Jackson'},
      //           {key: 'James'},
      //           {key: 'Joel'},
      //           {key: 'John'},
      //           {key: 'Jillian'},
      //           {key: 'Jimmy'},
      //           {key: 'Julie'},
      //         ]} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} />
      //   </View>
      //   <View>
      //     <Text>Test</Text> 
      //     <Button onPress={() => { alert('test') }} title='Click' />
      //   </View>
      // </View>
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
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 50
  }
});