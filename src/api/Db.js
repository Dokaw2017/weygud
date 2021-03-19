import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "@firebase/functions";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase

firebase.default.initializeApp(firebaseConfig);
export const db_auth = firebase.default.auth();
export const db_store = firebase.default.firestore();
export const func = firebase.default.functions();
