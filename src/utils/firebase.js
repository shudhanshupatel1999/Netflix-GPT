// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-mIjuDGkKlIWs3FlUQsld1Q6S6s2W2SI",
  authDomain: "netflix-gpt-44453.firebaseapp.com",
  projectId: "netflix-gpt-44453",
  storageBucket: "netflix-gpt-44453.firebasestorage.app",
  messagingSenderId: "154547952624",
  appId: "1:154547952624:web:663857f2dbd42faf0f5b35",
  measurementId: "G-647EWTG7GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();