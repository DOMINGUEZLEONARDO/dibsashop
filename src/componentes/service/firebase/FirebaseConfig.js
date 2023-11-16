
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyA58CqmUr2yh1N6qo6nDxGwIt2vBWAQ-x8",
    authDomain: "dibsashop.firebaseapp.com",
    projectId: "dibsashop",
    storageBucket: "dibsashop.appspot.com",
    messagingSenderId: "610459470193",
    appId: "1:610459470193:web:170f260446a70b8f17ced0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


