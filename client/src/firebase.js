// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ccde5.firebaseapp.com",
  projectId: "mern-estate-ccde5",
  storageBucket: "mern-estate-ccde5.appspot.com",
  messagingSenderId: "10066373035",
  appId: "1:10066373035:web:566ad95e4748a0cdd7caee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);