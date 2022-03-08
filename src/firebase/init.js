// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import firestore from 'firebase/compat/firestore';

//Initialize Firebae
const firebaseConfig = {
    apiKey: "AIzaSyBtD6_3bHq0o0YwxajctREVF6J3caWV3Tc",
    authDomain: "smoothie-live.firebaseapp.com",
    projectId: "smoothie-live",
    storageBucket: "smoothie-live.appspot.com",
    messagingSenderId: "161935643774",
    appId: "1:161935643774:web:0aa518b68a9f18c2aef42f",
    measurementId: "G-KJF6HV1R19"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });

  //export firestore database
  export default firebaseApp.firestore()