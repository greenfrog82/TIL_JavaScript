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
    let todos = this.props.todos.todos;
    switch(this.props.todos.visible_type) {
      case 1: 
        todos = this.props.todos.todos.filter(todo => !todo.done);
        break;
      case 2: 
        todos = this.props.todos.todos.filter(todo => todo.done);
        break;
      default:
        break;
    }

    console.log('----------- > TodoList render : ', todos);

    return (
      <List>
        <FlatList
          data={todos}
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