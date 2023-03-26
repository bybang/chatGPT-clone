// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYL8AtX_zPBvVKEfFA-ttNsMPF6I42fa8",
  authDomain: "chatgpt-messenger-clone-ec3fb.firebaseapp.com",
  projectId: "chatgpt-messenger-clone-ec3fb",
  storageBucket: "chatgpt-messenger-clone-ec3fb.appspot.com",
  messagingSenderId: "783141815516",
  appId: "1:783141815516:web:bb9427099b6b1d21a4a019",
};

// If nextJS created the app, get the app if not, initialize Firebase app
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
