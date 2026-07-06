// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// 1. NEW: Import the Storage tool
import { getStorage } from "firebase/storage";

// REPLACE THIS ENTIRE OBJECT WITH YOUR UNIQUE KEYS FROM PHASE 2
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// THE FIX: This line MUST be at the very bottom so other files can grab the 'db'!
export const db = getFirestore(app);
export const storage = getStorage(app);