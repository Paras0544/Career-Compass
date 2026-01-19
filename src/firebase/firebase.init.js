// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-P7BFT_kO9QDo0L0F6eMTZGAuRt1dUE0",
  authDomain: "carear2-e4e91.firebaseapp.com",
  projectId: "carear2-e4e91",
  storageBucket: "carear2-e4e91.firebasestorage.app",
  messagingSenderId: "223772154177",
  appId: "1:223772154177:web:82685663c2e0d0fb2f69c0",
  measurementId: "G-5V4MZ4065X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);