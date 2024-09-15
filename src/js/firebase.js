import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCxlcmx0qIAEiH2KrQcHG94_10EoAiO8m0",
    authDomain: "noteballs-15092024.firebaseapp.com",
    projectId: "noteballs-15092024",
    storageBucket: "noteballs-15092024.appspot.com",
    messagingSenderId: "735896801058",
    appId: "1:735896801058:web:2cb832e93f54bfa2a61f7b"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
    db
}