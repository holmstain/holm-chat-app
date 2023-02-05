// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDPy15lHWWkCbHSACwFrTCQM0vtc4asEVs",
  authDomain: "holm-chat-app.firebaseapp.com",
  projectId: "holm-chat-app",
  storageBucket: "holm-chat-app.appspot.com",
  messagingSenderId: "766505333405",
  appId: "1:766505333405:web:62150e34c9efe4eb961a74"
};
console.log(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)