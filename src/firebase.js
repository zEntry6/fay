import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtSttYhYWVhbQh-KubZI-MXrgOH8Y9O00",
  authDomain: "portofolio-90cb6.firebaseapp.com",
  projectId: "portofolio-90cb6",
  storageBucket: "portofolio-90cb6.firebasestorage.app",
  messagingSenderId: "461684922281",
  appId: "1:461684922281:web:eae0b6623b01bdd5d556b8",
  measurementId: "G-QY2YRSH6Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };