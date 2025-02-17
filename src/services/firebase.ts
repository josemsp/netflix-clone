// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_API_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_API_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_API_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_API_MESSAGING,
  appId: import.meta.env.VITE_APP_FIREBASE_API_APP_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(firebaseApp);