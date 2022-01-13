// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJDeYRxEIPvDI15Kcuq0ZSfeVszMvjnsA",
  authDomain: "proyecto-8voidgs.firebaseapp.com",
  projectId: "proyecto-8voidgs",
  storageBucket: "proyecto-8voidgs.appspot.com",
  messagingSenderId: "165371869769",
  appId: "1:165371869769:web:0b8261c46d72ccfb4bdd98",
  measurementId: "G-7YHKVSH59S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

