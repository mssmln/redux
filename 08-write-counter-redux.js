// Write a Counter with Redux

const {createStore} = require('redux');

const INCREMENT = 'INCREMENT'; 
const DECREMENT = 'DECREMENT'; 

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}; 

const incAction = () => ({type: INCREMENT}); 
const decAction = () => ({type: DECREMENT}); 

const store = createStore(counterReducer); 
console.log(store.getState());
store.dispatch(incAction());
store.dispatch(incAction());
store.dispatch(decAction());
console.log(store.getState());