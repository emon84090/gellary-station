
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMqatAQ3MZ_fUtowIiluk7hNPEExjococ",
    authDomain: "gellary-station.firebaseapp.com",
    projectId: "gellary-station",
    storageBucket: "gellary-station.appspot.com",
    messagingSenderId: "854098970545",
    appId: "1:854098970545:web:fbdf759513df0a25709f90"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;