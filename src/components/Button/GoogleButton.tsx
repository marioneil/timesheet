import React from "react";
import MyButton from "./CustomButton";
import { auth } from "../../firebase";
import { GoogleAuthProvider } from "firebase/auth";

import { getAuth, signInWithPopup } from "firebase/auth";

//const auth = getAuth();
//auth.currentUser
const provider = new GoogleAuthProvider();

export const GoogleButton = () => {
  function googleSignin() {
    //const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("In Then-Result");
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
        console.log("In Catch");
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...

        console.log(error);
        const email = error.customData.email;
        console.log(email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log(credential);
      });
  }

  return (
    <MyButton type={"Login"} onClick={() => googleSignin()}>
      Join with Google
    </MyButton>
  );
};
