// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Mvmfjceav97komirkLRSn0U7N0A5TD4",
  authDomain: "software-house-77d8b.firebaseapp.com",
  projectId: "software-house-77d8b",
  storageBucket: "software-house-77d8b.appspot.com",
  messagingSenderId: "378926155416",
  appId: "1:378926155416:web:0fe1958dda8fe5134df2ed",
  measurementId: "G-3BP9BZV3MD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase;

export default firebaseApp;