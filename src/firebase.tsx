import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDIut2c5U_IXz9ySH7t7zCXTWpgNr3A5gQ",
  authDomain: "tmc-rere.firebaseapp.com",
  projectId: "tmc-rere",
  storageBucket: "tmc-rere.appspot.com",
  messagingSenderId: "157341016163",
  appId: "1:157341016163:web:c480122f5daaab0ffd1856"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);