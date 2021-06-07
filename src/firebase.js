 import firebase from 'firebase/app'
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBOVExy0eI-xXbYVCO9-yG07j8S9WK7MKs",
    authDomain: "fb-crud-b1ec5.firebaseapp.com",
    projectId: "fb-crud-b1ec5",
    storageBucket: "fb-crud-b1ec5.appspot.com",
    messagingSenderId: "827459989097",
    appId: "1:827459989097:web:d32310d166743062c87cf8"
  };
  // Initialize Firebase

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();