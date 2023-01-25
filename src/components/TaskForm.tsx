import React, {
  BaseSyntheticEvent,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

import MyButton from "./Button/CustomButton";
import MyAlert, { AlertType } from "./CustomAlert";

const SectionTitle: React.FC<PropsWithChildren> = (props) => (
  <div className="text-xl border-dashed border-b my-5 border-green-400 ">
    {props.children}
  </div>
);

const FormField: React.FC<{
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}> = ({ label, placeholder, value, setValue }) => {
  return (
    <div className="px-3 grow">
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
          className=" w-full rounded py-1 pl-2 pr-12
              border-2 border-green-600
              hover:bg-green-300
              hover: placeholder:text-white
               "
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default function TaskForm() {
  useEffect(() => {
    // setRenderCount((prevRenderCount) => prevRenderCount + 1);
    renderCount.current = renderCount.current + 1;

    console.log("rendering Taskform: " + renderCount.current);

    // first
    // return () => {
    //   second
    // }
  });

  const fName = "Task Name";
  var [taskName, setTaskName] = useState("");
  var [message, setMessage] = useState<string>("");
  var [messageClassName, setMessageClassName] = useState<AlertType>("Info");
  var renderCount = useRef<number>(0);

  //React.FormEvent<EventTarget>
  const handleClick = async (e: React.MouseEvent) => {
    if (taskName) {
      console.log(taskName);
      const result = await fetch("http://localhost:5000/create", {
        headers: { "Content-Type": "application/json" },
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
    <div className="m-3 p-3   border-4 bg-white dark:bg-slate-800 ">
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
