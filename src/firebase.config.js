// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMc9wV-I9K6kC4LOSgQsROHK1Z5TYWTDE",
    authDomain: "house-marketplace-app-dffce.firebaseapp.com",
    projectId: "house-marketplace-app-dffce",
    storageBucket: "house-marketplace-app-dffce.appspot.com",
    messagingSenderId: "136477535511",
    appId: "1:136477535511:web:cab75987ef54214bd55b52",
    measurementId: "G-8L5WJN4GCM"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const analytics = getAnalytics( app );
export const db = getFirestore();