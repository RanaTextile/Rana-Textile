// Import required Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// For Realtime Database use this instead:
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

// Your Firebase configuration details from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyCnC1eHrsgTBQGe8YM926ONfyjQUC37Nvw",
    authDomain: "webprojectranatextile.firebaseapp.com",
    projectId: "webprojectranatextile",
    storageBucket: "webprojectranatextile.firebasestorage.app",
    messagingSenderId: "908380243551",
    appId: "1:908380243551:web:d58d37f8c448680c577dea",
    measurementId: "G-07VJY1XHK7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Use Firestore

// If using Realtime Database instead, use the following
// const database = getDatabase(app);
export { db };
