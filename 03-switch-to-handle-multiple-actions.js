// Use a Switch Statement to Handle Multiple Actions
/*
You can tell the Redux store how to handle multiple action types. 
Say you are managing user authentication in your Redux store. 
You want to have a state representation for when users are logged in 
and when they are logged out. You represent this with a single state 
object with the property authenticated. You also need action creators 
that create actions corresponding to user login and user logout, 
along with the action objects themselves.
*/

const {createStore} = require('redux');

const defaultState = {
    authenticated: false
};

// A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used.
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
  
const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return {authenticated: true};
        case LOGOUT:
            return {authenticated: false};
        default:
            return console.log(state);
    }
};
  
const store = createStore(authReducer);
  
const loginUser = () => ({type: LOGIN});
  
const logoutUser = () => ({type: LOGOUT});