//Firebase.jsx
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBz6gdKwZSmHl1nzwD2rfQziHScLPQOItk",
    authDomain: "disneyplus-clone-a1c17.firebaseapp.com",
    projectId: "disneyplus-clone-a1c17",
    storageBucket: "disneyplus-clone-a1c17.appspot.com",
    messagingSenderId: "237560673838",
    appId: "1:237560673838:web:aef58117163ab59c7111bf",
    measurementId: "G-0T2N967ZYQ"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);  
const storage = getStorage(app);


export { auth, provider, storage, db };
