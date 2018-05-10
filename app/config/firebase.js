// all fire base config  goes  here  
// the following  are just  to  be use  as sample  nothing  more  
// and can  be changed for actual use

import * as firebase from 'firebase';
import * as c from "./constants"

// Initialize Firebase
const config = {
    apiKey: c.FIREBASE_API_KEY,
    authDomain: c.FIREBASE_AUTH_DOMAIN,
    databaseURL: c.FIREBASE_DATABASE_URL,
    projectId: c.FIREBASE_PROJECT_ID,
    storageBucket: c.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: c.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);


// This  are sample exports  so  that  we can  export modules 

// export const database = firebase.database();
// export const auth = firebase.auth();

