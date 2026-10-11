

// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnlY-Is3g5_bgFzp2Q1nc136qz_jEYe6w",
  authDomain: "netflix-gpt-app-81ec8.firebaseapp.com",
  projectId: "netflix-gpt-app-81ec8",
  storageBucket: "netflix-gpt-app-81ec8.firebasestorage.app",
  messagingSenderId: "747127181802",
  appId: "1:747127181802:web:b12a6995036809382ce293",
  measurementId: "G-KM7PSRMHR0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

  export const auth = getAuth(app);

