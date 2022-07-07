import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAse0Ef_vsGMShEzQyR0zjC_pveRFvb5J0",
    authDomain: "linked-in-clone-566aa.firebaseapp.com",
    projectId: "linked-in-clone-566aa",
    storageBucket: "linked-in-clone-566aa.appspot.com",
    messagingSenderId: "862911840341",
    appId: "1:862911840341:web:04b16a71c4dce1921a14dc",
    measurementId: "G-P6ZMJLF95S"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

  export {db , auth}