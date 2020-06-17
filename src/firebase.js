import firebase from "firebase/app"
require("firebase/database")
require("firebase/storage")

import flamelink from "flamelink/app"
import "flamelink/content"
import "flamelink/storage"

let config = {
  apiKey: "AIzaSyDbpUl29fDIMuvnkT2XFrwYMNZfbBYZo_A",
  authDomain: "toplapmontreal.firebaseapp.com",
  databaseURL: "https://toplapmontreal.firebaseio.com",
  projectId: "toplapmontreal",
  storageBucket: "toplapmontreal.appspot.com",
  messagingSenderId: "49097917902"
}

let firebaseApp = firebase.initializeApp(config)

//let auth = firebaseApp.auth();
//auth.signInWithEmailAndPassword("projects@nguyenminhduc.de", '2REskhLV#]"ZA#z(');

let app = flamelink({ firebaseApp })
// let app = flamelink(config)

export default app
