import { initializeApp } from "firebase/app";
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// import.meta.env; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//console.log(import.meta.env);
console.log("tsx" + import.meta.env.VITE_REACT);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_apiKey,
  authDomain: import.meta.env.REACT_APP_FIREBASE_authDomain,
  projectId: import.meta.env.REACT_APP_FIREBASE_projectId,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: import.meta.env.REACT_APP_FIREBASE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e: any) {
    console.error(e.message);
    alert(e.message);
  }
};

const logout = async () => {
  await signOut(auth);
};

export { auth, logInWithEmailAndPassword, logout };
