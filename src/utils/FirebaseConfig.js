// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDS-PEiaWHNU8Yuy2ko3JOY8CS6h2Yvhuo",
    authDomain: "northech-e691b.firebaseapp.com",
    projectId: "northech-e691b",
    storageBucket: "northech-e691b.appspot.com",
    messagingSenderId: "625591464890",
    appId: "1:625591464890:web:ea3a5d8729a87eed772383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)