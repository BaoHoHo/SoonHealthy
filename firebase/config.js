// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7oCrzGvmyGm4xQeNg_C-hruTaz4Co-Uw",
  authDomain: "soonhealthy.firebaseapp.com",
  projectId: "soonhealthy",
  storageBucket: "soonhealthy.appspot.com",
  messagingSenderId: "1063454574448",
  appId: "1:1063454574448:web:bcd7a14a7e54142ab531b5",
  measurementId: "G-PCMK9BEH5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);