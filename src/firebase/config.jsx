import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDeh1A7r9yQhZ-O2LQRVkYWPTXSDOfCjgc",
    authDomain: "auth-olx.firebaseapp.com",
    projectId: "auth-olx",
    storageBucket: "auth-olx.appspot.com",
    messagingSenderId: "765337425964",
    appId: "1:765337425964:web:5c28ae8e8c8fde146f5989"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)

