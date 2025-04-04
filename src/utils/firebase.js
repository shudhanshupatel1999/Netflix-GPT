// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZe21dnL16j5ofAcdAv_LisIsnnzDGJ24",
  authDomain: "project-hosting-33797.firebaseapp.com",
  projectId: "project-hosting-33797",
  storageBucket: "project-hosting-33797.firebasestorage.app",
  messagingSenderId: "548240851648",
  appId: "1:548240851648:web:fc9bac6a3718f3cf5d6325",
  measurementId: "G-7PET7GK4D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();