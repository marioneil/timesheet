import { initializeApp } from "firebase/app";
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

//import { GoogleAuthProvider } from "firebase/auth";

// import.meta.env; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//console.log(import.meta.env);
console.log("tsx - " + import.meta.env.VITE_REACT);
console.log("apikey - " + import.meta.env.VITE_REACT_APP_FIREBASE_apiKey);
console.log(
  "REACT_APP_FIREBASE_authDomain - " +
    import.meta.env.REACT_APP_FIREBASE_authDomain
);

console.log("projectId " + import.meta.env.VITE_REACT_APP_FIREBASE_projectId);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_apiKey,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_authDomain,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_projectId,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_messagingSenderId,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_appId,
};

console.log("firebaseConfig" + JSON.stringify(firebaseConfig));

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (e: any) {
    console.error(e.message);
    alert(e.message);
  }
};

const logout = async () => {
  await signOut(auth);
};

export { auth, logInWithEmailAndPassword, logout };
