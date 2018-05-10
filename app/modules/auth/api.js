/*
sample  api  file, 
the role  of this file  is to  write  call  functions


*/
import { auth, database, provider } from "../../config/firebase";


//sample register function


//Register the user using email and password
// export function register(data, callback) {
//     const { email, password } = data;
//     auth.createUserWithEmailAndPassword(email, password)
//         .then((user) => callback(true, user, null))
//         .catch((error) => callback(false, null, error));
// }