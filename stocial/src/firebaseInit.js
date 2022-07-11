// src/firebaseInit.js
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBnwxNkbkRFuehK6Sdfb-rklLB6PN6y6pI",
  authDomain: "stocial-d1709.firebaseapp.com",
  databaseURL: "https://stocial-d1709-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "stocial-d1709",
  storageBucket: "stocial-d1709.appspot.com",
  messagingSenderId: "199942954410",
  appId: "1:199942954410:web:9c55601055d257039c1fd3"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);