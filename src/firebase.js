import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWsiLKANYfqU2U2GDwBPw3zVHzPZYywBk",
  authDomain: "chating-af11b.firebaseapp.com",
  projectId: "chating-af11b",
  storageBucket: "chating-af11b.appspot.com",
  messagingSenderId: "46018143200",
  appId: "1:46018143200:web:dc9f2678e1304cfd354185",
  measurementId: "G-3424G8ZBC3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
