// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmIfQbPH0AvDZxEtgQ0aLUWb6bVNombYA",
  authDomain: "world-of-geeks.firebaseapp.com",
  projectId: "world-of-geeks",
  storageBucket: "world-of-geeks.appspot.com",
  messagingSenderId: "1017481135716",
  appId: "1:1017481135716:web:d8a0546b31fe293f7d4171",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
