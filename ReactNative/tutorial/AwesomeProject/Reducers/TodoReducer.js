import { combineReducers } from 'redux';

let key_generator = 3;

const INITIAL_STATE = [ 
      {
        'id': 'test1', 
        'done': false,
        'msg': 'test 1',
      },
      {
        'id': 'test2',
        'done': true,
        'msg': 'test 2',
      }
    ];

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      state[++key_generator] = action.playload;
      return state;
    default:
      return state
  }
};

export default combineReducers({
  todos: todoReducer,
});