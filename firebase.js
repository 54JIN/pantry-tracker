// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL-fu9GL1gjuJdccZqNUCAX1W8HrvFHlA",
  authDomain: "inventory-management-54efb.firebaseapp.com",
  projectId: "inventory-management-54efb",
  storageBucket: "inventory-management-54efb.appspot.com",
  messagingSenderId: "492504435850",
  appId: "1:492504435850:web:d16286b1bf10f028907173",
  measurementId: "G-7MTMRJLRNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}