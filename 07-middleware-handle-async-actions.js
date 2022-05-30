// Use Middleware to Handle Asynchronous Actions
/*
At some point you'll need to call asynchronous endpoints in your Redux app, 
so how do you handle these types of requests? Redux provides middleware 
designed specifically for this purpose, called Redux Thunk middleware.
To include Redux Thunk middleware, you pass it as an argument to Redux.applyMiddleware(). 
This statement is then provided as a second optional parameter to the createStore() function.
Then, to create an asynchronous action, you return a function in the action creator 
that takes dispatch as an argument. Within this function, 
you can dispatch actions and perform asynchronous requests.
In this example, an asynchronous request is simulated with a setTimeout() call. 
It's common to dispatch an action before initiating any asynchronous behavior 
so that your application state knows that some data is being requested 
(this state could display a loading icon, for instance). Then, once you receive the data, 
you dispatch another action which carries the data as a payload 
along with information that the action is completed.
Remember that you're passing dispatch as a parameter to this special action creator. 
This is what you'll use to dispatch your actions, you simply pass 
the action directly to dispatch and the middleware takes care of the rest.
*/

const ReduxThunk = require('redux-thunk').default;
const {createStore, applyMiddleware} = require('redux');

const REQUESTING_DATA = 'REQUESTING_DATA';
const RECEIVED_DATA = 'RECEIVED_DATA';

const requestingData = () => ({type: REQUESTING_DATA});
const receivedData = data => ({type: RECEIVED_DATA, users: data.users});

const handleAsync = () => {
    return function(dispatch) {
        dispatch(requestingData());

        setTimeout(function() {
            let data = {
                users: ['Jeff', 'William', 'Alice']
            };
            dispatch(receivedData(data));
        }, 2500);
    }
};

const defaultState = {
    fetching: false,
    users: []
};

const asyncDataReducer = (state = defaultState, action) => {
    switch(action.type) {
        case REQUESTING_DATA:
            return {
                fetching: true,
                users: []
            };
        case RECEIVED_DATA:
            return {
                fetching: false,
                users: action.users
            };
        default:
            return state;
    }
};

const store = createStore(
    asyncDataReducer,
    applyMiddleware(ReduxThunk)
);

console.log(store);
store.dispatch(handleAsync());
console.log(store.getState());
setTimeout(() => console.log(store.getState()), 2500);