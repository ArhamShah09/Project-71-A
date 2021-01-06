import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDmUvzaaMSj1eohlaNYkndGb6Iko3dpVQ8",
    authDomain: "story-hub-cc80b.firebaseapp.com",
    projectId: "story-hub-cc80b",
    storageBucket: "story-hub-cc80b.appspot.com",
    messagingSenderId: "388852169582",
    appId: "1:388852169582:web:362f585550760db99d5f7f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();