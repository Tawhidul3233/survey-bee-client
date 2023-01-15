import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbtcrWQHgves4iZqh26uwPLYjRV-v4Bxk",
  authDomain: "surveybee-8c91a.firebaseapp.com",
  projectId: "surveybee-8c91a",
  storageBucket: "surveybee-8c91a.appspot.com",
  messagingSenderId: "1081135925735",
  appId: "1:1081135925735:web:8cfa99c098ca5c70211542",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { firebaseApp, auth, provider };
