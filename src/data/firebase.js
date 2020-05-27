import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBIfgd1IHOH1Fw6UPOIH4XMODrK2xsJmZQ",
    authDomain: "todolist-285b7.firebaseapp.com",
    databaseURL: "https://todolist-285b7.firebaseio.com",
    projectId: "todolist-285b7",
    storageBucket: "todolist-285b7.appspot.com",
    messagingSenderId: "833856051921",
    appId: "1:833856051921:web:d1df5fd800fc4533f903f0",
    measurementId: "G-N1S6L3PBVK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;