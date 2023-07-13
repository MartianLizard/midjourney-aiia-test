// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDkRxv7uKxi9mkF0qPa12QGFgm4hVX_zG8",

  authDomain: "midjourney-aiia-test.firebaseapp.com",

  projectId: "midjourney-aiia-test",

  storageBucket: "midjourney-aiia-test.appspot.com",

  messagingSenderId: "47127197778",

  appId: "1:47127197778:web:9ffc060ab85e818e98078b"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
