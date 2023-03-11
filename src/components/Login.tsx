import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import MyButton from "./Button/CustomButton";

import MyAlert, { AlertType } from "../components/CustomAlert";
import { GoogleButton } from "./Button/GoogleButton";

function Login() {
  var [message, setMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    const user = await logInWithEmailAndPassword(email, password);
    console.log("userv-" + user);
    if (user === undefined) {
      setMessage("Bad Credentials");
    }
  };

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
          <MyAlert
            message={"User Id or Password not Valid"}
            type={"Error"}
          ></MyAlert>
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
      </div>
      <div className="flex justify-center">
        <MyButton type={"Login"} onClick={() => login(email, password)}>
          Login
        </MyButton>
      </div>
      <div className="flex justify-center">
        <MyButton type={"Login"} onClick={() => navigate("/signup")}>
          Signup
        </MyButton>
      </div>
      <div className="flex justify-center">
        <GoogleButton />
      </div>
    </div>
  );
}
export default Login;
