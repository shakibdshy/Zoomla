
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU79Ih0eIGlewHqgv_CRE1u2ThZ7aveeI",
  authDomain: "zoomla-c91e0.firebaseapp.com",
  projectId: "zoomla-c91e0",
  storageBucket: "zoomla-c91e0.appspot.com",
  messagingSenderId: "393862973525",
  appId: "1:393862973525:web:a71a3065674c4d484facdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
