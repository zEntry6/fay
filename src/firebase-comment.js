import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtSttYhYWVhbQh-KubZI-MXrgOH8Y9O00",
  authDomain: "portofolio-90cb6.firebaseapp.com",
  projectId: "portofolio-90cb6",
  storageBucket: "portofolio-90cb6.firebasestorage.app",
  messagingSenderId: "461684922281",
  appId: "1:461684922281:web:eae0b6623b01bdd5d556b8",
  measurementId: "G-QY2YRSH6Q0"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };