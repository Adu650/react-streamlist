// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD5fk11Kw45eeTHF5e2BPHFComjHgkvvuY",
  authDomain: "streamlist-51734.firebaseapp.com",
  projectId: "streamlist-51734",
  storageBucket: "streamlist-51734.firebasestorage.app",
  messagingSenderId: "821621758109",
  appId: "1:821621758109:web:04388153061b5046e35c74",
  measurementId: "G-KS8GHGLZGT"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
