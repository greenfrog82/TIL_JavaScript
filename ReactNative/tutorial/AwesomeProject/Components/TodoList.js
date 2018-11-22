import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { List, ListItem, CheckBox} from 'react-native-elements';

export default class InputTodo extends Component {
  constructor() {
    super()
    this.list = [
      {
        title: 'Appointments',
        icon: 'av-timer',
        flag: true,
      },
      {
        title: 'Trips',
        icon: 'flight-takeoff',
        flag: false,
      },
      {
        title: 'B-Trips',
        icon: 'flight-takeoff',
        flag: true,
      },
    ]
  }

  renderRow ({item}) {
   return (
    //  <ListItemv
    //    key={item.title}
    //    title={item.title}
    //    leftIcon={{name: item.icon}}
    //  />
    <CheckBox
      key={item.title} 
      title={item.title}
      checked={item.flag}
    />
   )
  }

  render () {
    return (
      <List>
        <FlatList
          data={this.list}
          renderItem={this.renderRow}
          keyExtractor={item => item.name}
        />
      </List>
    )
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