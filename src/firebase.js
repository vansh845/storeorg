// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBypGjgk29kGOw8LGtkBv7BApuC12GZMII",
  authDomain: "storeorg.firebaseapp.com",
  projectId: "storeorg",
  storageBucket: "storeorg.appspot.com",
  messagingSenderId: "30763573608",
  appId: "1:30763573608:web:215ca65040a9677527f6dd",
  measurementId: "G-7KR995SYZ1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
