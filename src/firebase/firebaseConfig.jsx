// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcpqSR2gh4uMUNlUr0OtyyJLEmj_VUUo0",
  authDomain: "patientinfosys-a0ffa.firebaseapp.com",
  projectId: "patientinfosys-a0ffa",
  storageBucket: "patientinfosys-a0ffa.appspot.com",
  messagingSenderId: "60949966385",
  appId: "1:60949966385:web:d1f41ab7e85d026eb5af10",
  measurementId: "G-YCYXBTM6SK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage()