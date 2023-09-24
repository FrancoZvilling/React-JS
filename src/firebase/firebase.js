// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQa1zr5CNsWJP328ZrAuYL8P1-BNiQEcg",
  authDomain: "coder-firebase-f78bb.firebaseapp.com",
  projectId: "coder-firebase-f78bb",
  storageBucket: "coder-firebase-f78bb.appspot.com",
  messagingSenderId: "890982740765",
  appId: "1:890982740765:web:6990e0c5b39e5d1e9127f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)