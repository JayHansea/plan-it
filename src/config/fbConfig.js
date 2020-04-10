import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDXlh9LL6y6G8Il2z20s-fD7FXMfmLjsKQ",
  authDomain: "hansea-planit.firebaseapp.com",
  databaseURL: "https://hansea-planit.firebaseio.com",
  projectId: "hansea-planit",
  storageBucket: "hansea-planit.appspot.com",
  messagingSenderId: "246381243551",
  appId: "1:246381243551:web:262fbe4ab35370ac3b86aa",
  measurementId: "G-YWBW8R4FQH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
