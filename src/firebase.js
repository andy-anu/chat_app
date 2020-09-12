import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASQctPu00Ja22fYnZRqrb9cneEKaMFPcU",
  authDomain: "myapp-43a5d.firebaseapp.com",
  databaseURL: "https://myapp-43a5d.firebaseio.com",
  projectId: "myapp-43a5d",
  storageBucket: "myapp-43a5d.appspot.com",
  messagingSenderId: "486984955852",
  appId: "1:486984955852:web:a8fcfa9883db3c2b9ccf69"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;
