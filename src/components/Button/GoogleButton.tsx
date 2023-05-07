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
      .then(async (result) => {
        result.user.getIdToken();
        console.log("In Then-Result");
        // This gives you a Google Access Token. You can use it to access the Google API.
        const userCredential = GoogleAuthProvider.credentialFromResult(result);

        let token = await result.user.getIdToken();
        if (token === undefined) {
          token = "";
        }
        console.log("client token " + token);

        await fetch("http://localhost:5000/signup", {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
          method: "POST",
        });
        ///////////////////////////
        console.log("Created user ");
        console.log("Logged in with Goole");
      })
      .catch((error) => {
        console.log("In Catch");
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
