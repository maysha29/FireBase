// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTEd80wS88GVi8CvZwFw9FiA6mB0QFP7Y",
  authDomain: "simple-firebase-auth-fbc95.firebaseapp.com",
  projectId: "simple-firebase-auth-fbc95",
  storageBucket: "simple-firebase-auth-fbc95.firebasestorage.app",
  messagingSenderId: "1093814967602",
  appId: "1:1093814967602:web:9e49ec7a2ab1a18b1f4b2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);