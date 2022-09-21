// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSJ3nswx59NZ7DdjuFDQdBpJRSXdom8Ps",
  authDomain: "subscription-manager-acda9.firebaseapp.com",
  projectId: "subscription-manager-acda9",
  storageBucket: "subscription-manager-acda9.appspot.com",
  messagingSenderId: "698902243111",
  appId: "1:698902243111:web:61efa8893ce7aafa152b02",
  measurementId: "G-0QKE51FDYJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);