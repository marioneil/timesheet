import React, {
  BaseSyntheticEvent,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

import MyButton from "./Button/CustomButton";
import MyAlert, { AlertType } from "./CustomAlert";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const FormField: React.FC<{
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}> = ({ label, placeholder, value, setValue }) => {
  return (
    <div className="grow px-3">
      <label className=" text-sm font-medium text-green-700">{label}</label>
      <div>
        <input
          value={value}
          onChange={({ target }) => {
            const { value: taskName } = target;
            setValue(taskName);
          }}
          type="text"
          id="fname"
          className=" hover: w-full rounded border-2 border-green-600
              py-1 pl-2
              pr-12
              placeholder:text-white hover:bg-green-300
               "
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default function TaskForm() {
  const fName = "Task Name";
  var [taskName, setTaskName] = useState("");
  var [message, setMessage] = useState<string>("");
  var [messageClassName, setMessageClassName] = useState<AlertType>("Info");
  var renderCount = useRef<number>(0);
  const navigate = useNavigate();

  //React.FormEvent<EventTarget>
  const handleClick = async (e: React.MouseEvent) => {
    let token = await auth.currentUser?.getIdToken(true);
    console.log("client token " + token);

    if (token === undefined) {
      token = "";
    }
    // const requestHeaders: HeadersInit = new Headers();
    // requestHeaders.set("Content-Type", "application/json");
    // requestHeaders.set("token", token);

    if (taskName) {
      console.log(taskName);
      const result = await fetch("http://localhost:5000/create", {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        // headers: requestHeaders,
        method: "POST",
        body: JSON.stringify({ title: taskName }),
      });
      // const res = await result.json();
      console.log(result.status);
      if (result.status == 200) {
        setTaskName("");
        setMessage("Record Saved to Database");
        setMessageClassName("Info");
      }
    } else {
      setMessage("Name is empty");
      setMessageClassName("Warning");
    }
  };

  return (
    <div className="m-3 border-4   bg-white p-3 dark:bg-slate-800 ">
      {/* <div className="text-white  bg-green-400 ">{message}</div> */}
      <div className="flex">
        <MyAlert type={messageClassName} message={message}></MyAlert>
      </div>
      <div>
        <FormField
          label={fName}
          placeholder={fName}
          value={taskName}
          setValue={setTaskName}
        />
      </div>
      <div className="flex justify-center">
        <MyButton type={"Save"} onClick={handleClick}>
          Save
        </MyButton>
      </div>
    </div>
  );
}
