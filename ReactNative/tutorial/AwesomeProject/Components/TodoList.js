import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { List, CheckBox} from 'react-native-elements';
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props) {
      super(props)
      console.log('TodoList -------- > ', this.props.todos);
  }

  renderRow ({item}) {
   return (
    //  <ListItemv
    //    key={item.title}
    //    title={item.title}
    //    leftIcon={{name: item.icon}}
    //  />
    <CheckBox
      key={item.id} 
      title={item.msg}
      checked={item.done}
    />
   )
  }

  render () {
    return (
      <List>
        <FlatList
          data={this.props.todos}
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

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);