import { combineReducers } from 'redux';

// sample how to import  reducers from  each  module
//import { reducer as authReducer } from "../modules/auth"

// Combine all the reducers
const rootReducer = combineReducers({ /*reducers name example  authReducers */ });

export default rootReducer;