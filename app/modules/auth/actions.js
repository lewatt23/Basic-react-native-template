//sample actions file
//Here we call  our actions  then   do  some  actions




import * as t from './actionTypes';
import * as api from './api';
import { auth } from "../../config/firebase";

import { AsyncStorage } from 'react-native';



//smaple  action

// export function createUser(user, successCB, errorCB) {
//     return (dispatch) => {
//         api.createUser(user, function (success, data, error) {
//             if (success) {
//                 dispatch({type: t.LOGGED_IN, data: user});
//                 successCB();
//             }else if (error) errorCB(error)
//         });
//     };
// }
