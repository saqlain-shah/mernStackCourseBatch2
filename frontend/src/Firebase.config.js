// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8qlrgHn7htBEO9t1hR05HVbqMGka-c70",
  authDomain: "fir-app-backend-d0e45.firebaseapp.com",
  projectId: "fir-app-backend-d0e45",
  storageBucket: "fir-app-backend-d0e45.appspot.com",
  messagingSenderId: "96649841312",
  appId: "1:96649841312:web:8175731d3ace55b01d57c5",
  measurementId: "G-Y0CP5G0HC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);