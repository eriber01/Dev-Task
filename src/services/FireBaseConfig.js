// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
// import { GoogleAuthProvider } from 'firebase/auth'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAp4lfA8sHEqdZkkx756E_7dZJ_Si6o3cY",
    authDomain: "gif-app-eriber.firebaseapp.com",
    projectId: "gif-app-eriber",
    storageBucket: "gif-app-eriber.appspot.com",
    messagingSenderId: "917268615866",
    appId: "1:917268615866:web:3775f35c67c38f9b236883"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const db = firebase.firestore();

// auth with google account
// const provider = new GoogleAuthProvider()
// provider.setCustomParameters()

export { auth, db }

// Initialize Firebase
// const app = initializeApp(firebaseConfig);