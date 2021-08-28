import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9sMgrIKHqbgS_ELaRVvZPrbWM8BDx9v4",

  authDomain: "crud-cce4c.firebaseapp.com",

  projectId: "crud-cce4c",

  storageBucket: "crud-cce4c.appspot.com",

  messagingSenderId: "17353812028",
  databaseURL:"https://crud-cce4c-default-rtdb.europe-west1.firebasedatabase.app/",
  appId: "1:17353812028:web:432006bacd5837ed60bb39",

  measurementId: "G-SSXZR1S3E0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
