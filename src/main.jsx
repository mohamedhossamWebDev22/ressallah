import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './style.scss'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOw5ttzjsljsWVoAPwIDu248ta1r8GMi8",
  authDomain: "ressala-1.firebaseapp.com",
  projectId: "ressala-1",
  storageBucket: "ressala-1.appspot.com",
  messagingSenderId: "278398983738",
  appId: "1:278398983738:web:bf964dc265fbde21021f03",
  measurementId: "G-C64QPC8KGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
