import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAy8O-ooVAj6PyWJWaLP-XojwSOesqbaPg",
    authDomain: "cost-management-766e1.firebaseapp.com",
    projectId: "cost-management-766e1",
    storageBucket: "cost-management-766e1.appspot.com",
    messagingSenderId: "662728695795",
    appId: "1:662728695795:web:96989b6f08c3fd622ffc86",
    measurementId: "G-KZDLDYVQBJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);
auth.languageCode = 'it';
const db = getFirestore(app);

export { auth, db }