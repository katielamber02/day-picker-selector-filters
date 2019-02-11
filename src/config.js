import firebase from "firebase/app";
import "firebase/database";

var config = {
  apiKey: "AIzaSyD0MU4fmFtcqxF9m2em8QGtxopCeBe5Ajo",
  authDomain: "burger-testproject.firebaseapp.com",
  databaseURL: "https://burger-testproject.firebaseio.com",
  projectId: "burger-testproject",
  storageBucket: "burger-testproject.appspot.com",
  messagingSenderId: "89827545076"
};

export default firebase.initializeApp(config);

// {
//   "rules": {
//     "ingredients":{
//     ".read": true,
//     ".write": true
//     },
//      "orders":{
//        ".read":"auth!==null",
//          ".write":"auth!==null",
//            ".indexOn":["userId"]
//      }
//   }
// }
