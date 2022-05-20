// Register a Store Listener
/*
Another method you have access to on the Redux store object is store.subscribe(). 
This allows you to subscribe listener functions to the store, which are 
called whenever an action is dispatched against the store. 
One simple use for this method is to subscribe a function to 
your store that simply logs a message every time an action is 
received and the store is updated.
*/

const {createStore} = require('redux');
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(reducer);
let count = 0;

const listener = () => count += 1;
store.subscribe(listener);

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);