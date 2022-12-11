// Import the functions you need from the SDKs you need
import React from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    
  } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBryZFPjwGo59zjs6SJV62mnD4-Av0716g",
  authDomain: "turo-daaf9.firebaseapp.com",
  projectId: "turo-daaf9",
  storageBucket: "turo-daaf9.appspot.com",
  messagingSenderId: "523922929673",
  appId: "1:523922929673:web:b3e34af695ce86d6a8e0d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export {
    getAuth,
    createUserWithEmailAndPassword,
    
    
  };