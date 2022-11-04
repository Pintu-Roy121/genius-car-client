// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

    // apiKey: "AIzaSyAK-mAdh8fXtFaMdMzaJkA6Smy0vXiWpPM",
    // authDomain: "genius-car-bddc4.firebaseapp.com",
    // projectId: "genius-car-bddc4",
    // storageBucket: "genius-car-bddc4.appspot.com",
    // messagingSenderId: "55019097338",
    // appId: "1:55019097338:web:e4b07779d0f457e5d40d43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;