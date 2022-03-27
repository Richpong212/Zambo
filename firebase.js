// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByed2sP5MJK7xlKTbiet6zHBeNgYsKzMU",
  authDomain: "zambo-686e9.firebaseapp.com",
  projectId: "zambo-686e9",
  storageBucket: "zambo-686e9.appspot.com",
  messagingSenderId: "109518145481",
  appId: "1:109518145481:web:a6d331f8daa8d505890a18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app)