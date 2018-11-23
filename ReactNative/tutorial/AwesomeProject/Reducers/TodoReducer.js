import { combineReducers } from 'redux';

let key_generator = 3;

const INITIAL_STATE = {
  visible_type: 0,
  todos: [ 
    {
      'id': '1', 
      'done': false,
      'msg': 'test 1',
    },
    {
      'id': '2',
      'done': true,
      'msg': 'test 2',
    }
  ]
}

const todoReducer = (state = INITIAL_STATE, action) => {
  console.log('------- > todoReducer');
  console.log('------ > ', action);

  switch (action.type) {
    case 'ADD_TODO':
      repo = { ...state, 'todos': [
          ...state.todos,
          {
            id: (++key_generator).toString(),
            done: false,
            msg: action.payload,
          }
        ]
      }
      return repo;
    case 'UPDATE_TODO':
      return { ...state, 'todos': state.todos.map(
        todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
      )}
    case 'FILTER_TODO':
      return { ...state, 'visible_type': action.visible_type }
    default:
      return state;
  }
};

export default combineReducers({
  todos: todoReducer,
});