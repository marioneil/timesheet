import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import MyButton from "./Button/CustomButton";
import MyAlert, { AlertType } from "../components/CustomAlert";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  var [message, setMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  function signupNewUser() {
    if (password !== confirmPassword) {
      setMessage("Passwords dont match");
      return;
    }
    //const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        /////////////////
        let token = await userCredential.user.getIdToken(true);
        if (token === undefined) {
          token = "";
        }
        console.log("client token " + token);

        const result = await fetch("http://localhost:5000/signup", {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
          method: "POST",
        });
        ///////////////////////////
        console.log("Created user ");
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.message);
      });
  }

  useEffect(() => {
    //   setTheme("dark");
    console.log("in useEffect - Login");
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    console.log(user);
    if (user) navigate("/home");
    else {
    }
  }, [user, loading]);

  const classes =
    "w-1/2 flex rounded m-2 p-2 border-2 border-green-600 bg-green-300 placeholder:text-white mx-auto my-2 p-3";
  return (
    // <div className="login">
    // <div className="m-3 flex  border-4   bg-green-200 p-3 dark:bg-slate-800 ">

    <div className="m-2 flex grow  flex-col justify-center border-2  bg-white p-1 dark:bg-slate-800 ">
      {message && (
        <div className="flex">
          <MyAlert message={message} type={"Error"}></MyAlert>
        </div>
      )}
      <div className="flex flex-col justify-center">
        <input
          type="text"
          //   className="login__textBox"
          //   className="m-3 p-3 text-sm font-medium text-green-700"
          className={classes}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          //   className="login__textBox"
          className={classes}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          //   className="login__textBox"
          className={classes}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
      </div>
      <div className="flex justify-center">
        <MyButton type={"Login"} onClick={() => signupNewUser()}>
          Signup
        </MyButton>
      </div>
    </div>
  );
}
export default Login;
