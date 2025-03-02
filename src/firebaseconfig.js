// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvvpL3JZsw7Cfj6UGd9cSEjHmh9eamlRY",
  authDomain: "task6-473b6.firebaseapp.com",
  projectId: "task6-473b6",
  storageBucket: "task6-473b6.appspot.com",
  messagingSenderId: "629552373432",
  appId: "1:629552373432:web:bdf85553e0e47121aede4d",
  measurementId: "G-DRB9RR8HQN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { app, auth, provider };
