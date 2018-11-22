import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';

export default class InputTodo extends Component {
  constructor() {
      super()
  }
  render() {
    return (
      <View>
        <FlatList style={styles.container} 
        data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
        ]}
        renderItem={({item}) => 
        <Text style={styles.item}>{item.key}</Text>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //   flex: 2,
    //   paddingTop: 50
  },
  item: {
      padding: 10,
      fontSize: 18,
      height: 44,
  },
});