// Handle an Action in the Store
/*
After an action is created and dispatched, 
the Redux store needs to know how to respond to that action. 
This is the job of a reducer function. Reducers in Redux are 
responsible for the state modifications that take place in 
response to actions. A reducer takes state and action as arguments, 
and it always returns a new state. It is important to see that 
this is the only role of the reducer. It has no side effects — 
it never calls an API endpoint and it never has any hidden surprises. 
The reducer is simply a pure function that takes state and action, 
then returns new state.

Another key principle in Redux is that state is read-only. 
In other words, the reducer function must always return a 
new copy of state and never modify state directly. Redux does 
not enforce state immutability, however, you are responsible 
for enforcing it in the code of your reducer functions.
*/
const { createStore } = require('redux');

const defaultState = { login: false };

const reducer = (state = defaultState, action) => {
  if (action.type === 'LOGIN') {
    return console.log({login: true});
  } else {
    return console.log(state);
  }
};

const store = createStore(reducer);
console.log(store);

const loginAction = () => ({ type: 'LOGIN' });