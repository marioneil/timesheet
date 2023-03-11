import React from "react";
import MyButton from "./CustomButton";
import { auth } from "../../firebase";
import { GoogleAuthProvider } from "firebase/auth";

import { getAuth, signInWithPopup } from "firebase/auth";

//const auth = getAuth();

export const GoogleButton = () => {
  function signinWithGoogle() {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log("Logged in with Goole");
      })
      .catch((error) => {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...

        console.log(error);
      });
  }

  return (
    <MyButton type={"Login"} onClick={() => signinWithGoogle()}>
      Join with Google
    </MyButton>
  );
};
