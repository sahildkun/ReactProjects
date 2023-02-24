


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup

}   from 'firebase/auth'

import
{
getFirestore,
doc,
setDoc,
getDoc
}
from  'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5QSv6RYlsWT4sUl5zD3ej1mEOIu-Z8VM",
  authDomain: "mo-shop-db.firebaseapp.com",
  projectId: "mo-shop-db",
  storageBucket: "mo-shop-db.appspot.com",
  messagingSenderId: "73235604592",
  appId: "1:73235604592:web:af7345a4916836e013c0b5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

const auth =  getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

//database instance

export const  db = getFirestore();

export const createDocumentfromUserAuth = async (userAuth) => {

  const userDocRef = doc(db, 'users' , userAuth.uid);

  // console.log(userDocRef);

  const userSnapshot =await getDoc(userDocRef);

}
