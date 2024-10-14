// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA40cbzyAE4vtlF-ptcIq5swNEU8dtsGoY",
  authDomain: "bestsellers-f8a41.firebaseapp.com",
  projectId: "bestsellers-f8a41",
  storageBucket: "bestsellers-f8a41.appspot.com",
  messagingSenderId: "909324664055",
  appId: "1:909324664055:web:f09ebf1c6f379bb6f5e7f2",
  measurementId: "G-KE9G4P86H2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export Firestore to use it in components
