import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCO9bF41iXb7RNMCaoX4p3nHH-CZahHWHE",
    authDomain: "twitter-clone-76af4.firebaseapp.com",
    projectId: "twitter-clone-76af4",
    storageBucket: "twitter-clone-76af4.appspot.com",
    messagingSenderId: "18637901252",
    appId: "1:18637901252:web:b6938774b0bb562840e891",
    measurementId: "G-1VBCELE0RN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db;