// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIWSCptkmzGw5Cge-iiThj5HaYw-9gzUk",
  authDomain: "quicknotes-c4130.firebaseapp.com",
  projectId: "quicknotes-c4130",
  storageBucket: "quicknotes-c4130.firebasestorage.app",
  messagingSenderId: "56668065766",
  appId: "1:56668065766:web:ba458efa5a703575861027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};