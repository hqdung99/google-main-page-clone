import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB4ntVkSp9SSwF9jDMyrTjXcZv7a9CrtUQ",
  authDomain: "clone-land-page.firebaseapp.com",
  databaseURL: "https://clone-land-page.firebaseio.com",
  projectId: "clone-land-page",
  storageBucket: "clone-land-page.appspot.com",
  messagingSenderId: "1087732763436",
  appId: "1:1087732763436:web:fd4a4b4ce79f93f0767a89",
  measurementId: "G-TYSMHD505L",
});

export { firebaseConfig as firebase };
