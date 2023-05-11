import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrT_JuA9YyWqkYL0HsZtikfdDtqdXwh78",
  authDomain: "chatzone-df492.firebaseapp.com",
  projectId: "chatzone-df492",
  storageBucket: "chatzone-df492.appspot.com",
  messagingSenderId: "495362393886",
  appId: "1:495362393886:web:beea8b038ad641b5996b0f",
  measurementId: "G-1LSCD0XWWQ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
