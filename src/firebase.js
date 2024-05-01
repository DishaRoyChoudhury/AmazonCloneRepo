import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyA-roKMSkC9ZYHE5QGME2l3hjJhuJAH_2o",
    authDomain: "challenge-d8f61.firebaseapp.com",
    projectId: "challenge-d8f61",
    storageBucket: "challenge-d8f61.appspot.com",
    messagingSenderId: "294760616185",
    appId: "1:294760616185:web:59d12e0e0a1a941cf19228",
    measurementId: "G-QS9C9TXR9J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth =  firebase.auth();

export { db, auth};