// Never Mutate State
/*
These final challenges describe several methods of enforcing the 
key principle of state immutability in Redux. Immutable state means 
that you never modify state directly, instead, you return a new copy of state.

If you took a snapshot of the state of a Redux app over time, 
you would see something like state 1, state 2, state 3,state 4, ... 
and so on where each state may be similar to the last, 
but each is a distinct piece of data. This immutability, in fact, 
is what provides such features as time-travel debugging that you may have heard about.

Redux does not actively enforce state immutability in its store or reducers, 
that responsibility falls on the programmer.  
*/

const {createStore} = require('redux');

const ADD_TO_DO = 'ADD_TO_DO';

const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code'
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return [...state, action.todo];
    default:
      return state;
  }
};

const addToDo = todo => ({type: ADD_TO_DO, todo});

const store = createStore(immutableReducer);
console.log(store.getState());
store.dispatch(addToDo("hooray"));
console.log(store.getState());