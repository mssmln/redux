// Remove an Item from an Array

const {createStore} = require('redux');

const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
        case 'REMOVE_ITEM':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
            return state.slice(0, action.index).concat(state.slice(action.index + 1));    
        default:
            return state;
    }
};
  
const removeItem = index => {
    return {
        type: 'REMOVE_ITEM',
        index
    }
};
  
const store = createStore(immutableReducer);

console.log(store.getState());
store.dispatch(removeItem(2));
console.log(store.getState());