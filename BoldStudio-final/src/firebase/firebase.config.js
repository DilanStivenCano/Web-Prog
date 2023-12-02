
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGdSg_y8MSilR6d9Z0H_JNFzV2vAtOZCI",
  authDomain: "web2023-b94a8.firebaseapp.com",
  projectId: "web2023-b94a8",
  storageBucket: "web2023-b94a8.appspot.com",
  messagingSenderId: "209436772143",
  appId: "1:209436772143:web:a97276c70b648b7fa243da",
  measurementId: "G-3JDQKL1LNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);