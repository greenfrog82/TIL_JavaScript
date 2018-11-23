import { combineReducers } from 'redux';

let key_generator = 3;

const INITIAL_STATE = [ 
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
    ];

const todoReducer = (state = INITIAL_STATE, action) => {
  console.log('------- > todoReducer');
  console.log('------ > ', action);

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: (++key_generator).toString(),
          done: false,
          msg: action.payload,
        }
      ]
    case 'UPDATE_TODO':
      return state.map(
        todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
      ) 
    default:
      return state
  }
};

export default combineReducers({
  todos: todoReducer,
});