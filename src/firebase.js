import firebase from 'firebase/compat/app'
// import "firebase/compat/auth";
import "firebase/compat/firestore";
// import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBp7U-Ak8LVig2lAo92h2TPwJ6lGTTjOEo",
  authDomain: "report-social-bac22.firebaseapp.com",
  databaseURL: "https://report-social-bac22.firebaseio.com",
  projectId: "report-social-bac22",
  storageBucket: "report-social-bac22.appspot.com",
  messagingSenderId: "118882922479",
  appId: "1:118882922479:web:a3055ef3775644fa5b101a",
  measurementId: "G-GVVEMRLSD8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
//const db = firebase.firestore();
// const storage = firebase.storage();
// export  {firebase, auth,db,storage};
export const db = firebase.firestore();