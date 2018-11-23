import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { List, CheckBox} from 'react-native-elements';
import { connect } from 'react-redux';

import { updateTodo } from '../Actions/TodoListAction';


class TodoList extends Component {
  constructor(props) {
      super(props);
      console.log(this.props);
  }

  renderRow ({item}) {
    return (
     <CheckBox
       key={item.id} 
       title={item.msg}
       checked={item.done}
       onPress={() => this.props.updateTodo(item.id, !item.done)}
     />
    )
  }

  render () {
    console.log('----------- > TodoList render');
    return (
      <List>
        <FlatList
          data={this.props.todos}
          renderItem={this.renderRow.bind(this)}
          keyExtractor={(item, index) => index.toString()}
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

const mapDispatchToPros = {
  updateTodo
}

export default connect(mapStateToProps, mapDispatchToPros)(TodoList);