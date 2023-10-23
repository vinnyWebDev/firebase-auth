// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0TLsx7LTrYH3HRVprINx0zSBMlECp6ME",
    authDomain: "fir-auth-fe5d2.firebaseapp.com",
    projectId: "fir-auth-fe5d2",
    storageBucket: "fir-auth-fe5d2.appspot.com",
    messagingSenderId: "691812375834",
    appId: "1:691812375834:web:15f6d0ee4ced5a773360a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }