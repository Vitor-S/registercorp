import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNBHlsOBOX-4lErKlKhBqBTxm65_xVNik",
  authDomain: "registercorp-3c17e.firebaseapp.com",
  projectId: "registercorp-3c17e",
  storageBucket: "registercorp-3c17e.appspot.com",
  messagingSenderId: "406550467532",
  appId: "1:406550467532:web:71b650783d20bc191cc369"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);