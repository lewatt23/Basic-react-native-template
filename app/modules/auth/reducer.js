import { AsyncStorage } from 'react-native';

import * as t from './actionTypes';

let initialState = { /*stattes*/ };

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        
        //sample action 

        // case t.LOGGED_OUT:
        //     let keys = ['user'];
        //     AsyncStorage.multiRemove(keys);

        //     state = Object.assign({}, state, {isLoggedIn: false, user: null });

        //     return state;

        default:
            return state;
    }
};

export default authReducer;