import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBqvd4U13q3R4hIg-q7Y1nXpkg79JAzIRs",
  authDomain: "react-task-manager-f8ae3.firebaseapp.com",
  databaseURL: "https://react-task-manager-f8ae3.firebaseio.com",
  projectId: "react-task-manager-f8ae3",
  storageBucket: "react-task-manager-f8ae3.appspot.com",
  messagingSenderId: "750803857054",
  appId: "1:750803857054:web:16cebaa34945994b0dd58f",
  measurementId: "G-7TX1DZPJC5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
