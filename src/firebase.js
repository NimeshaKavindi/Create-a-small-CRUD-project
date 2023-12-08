import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAH5XDD2QINCkFLBEkeKVyjsRONKUWTb_Y",
  authDomain: "crud-project-90002.firebaseapp.com",
  projectId: "crud-project-90002",
  storageBucket: "crud-project-90002.appspot.com",
  messagingSenderId: "771177753578",
  appId: "1:771177753578:web:53382f6e09e1c581552093",
  measurementId: "G-E7QFRBKRD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)