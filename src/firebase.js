import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBfkpXYFVnxgrowDzBfH0d175O7mGOg4Z4",
  authDomain: "mysecondapp-8ce18.firebaseapp.com",
  databaseURL: "https://mysecondapp-8ce18.firebaseio.com",
  projectId: "mysecondapp-8ce18",
  storageBucket: "mysecondapp-8ce18.appspot.com",
  messagingSenderId: "413061437723",
  appId: "1:413061437723:web:d20dfbad934feff5bc5bbe",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;
