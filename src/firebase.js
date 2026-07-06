// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// 1. NEW: Import the Storage tool
import { getStorage } from "firebase/storage";

// REPLACE THIS ENTIRE OBJECT WITH YOUR UNIQUE KEYS FROM PHASE 2
const firebaseConfig = {
  apiKey: "AIzaSyB7Uy8hnz6wDKJNLajr491ljBdqNBrVmTc",
  authDomain: "lgi-foundation.firebaseapp.com",
  projectId: "lgi-foundation",
  storageBucket: "lgi-foundation.firebasestorage.app",
  messagingSenderId: "686821960935",
  appId: "1:686821960935:web:029aef6014539ae83a8642"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// THE FIX: This line MUST be at the very bottom so other files can grab the 'db'!
export const db = getFirestore(app);
export const storage = getStorage(app);