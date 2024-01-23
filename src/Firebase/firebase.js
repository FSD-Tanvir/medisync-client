import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCy842AUvKx505XgG9XHaGuaL47MnvFHas",
  authDomain: "medisync-auth.firebaseapp.com",
  projectId: "medisync-auth",
  storageBucket: "medisync-auth.appspot.com",
  messagingSenderId: "172354318197",
  appId: "1:172354318197:web:b668002fa2365888d3ad3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)