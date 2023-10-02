// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRaULf_mDzvimOfRFp8iYYsVz6_r3DHwk",

  authDomain: "fir-routercontext.firebaseapp.com",

  projectId: "fir-routercontext",

  storageBucket: "fir-routercontext.appspot.com",

  messagingSenderId: "159922108232",

  appId: "1:159922108232:web:b77bddf604d5aab1c9a57d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
