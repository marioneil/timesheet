import { MouseEventHandler, PropsWithChildren, useState } from "react";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import MYButton from "./Button/CustomButton";
import { AlertType } from "../components/CustomAlert";

interface TaskCardProps {
  id: string;
  title: string;
  timestampCreated: string;
  displayMessage: (message: string, type: AlertType) => void;
}

const MyButton: React.FC<PropsWithChildren> = () => {
  return <button></button>;
};
export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  timestampCreated,
  displayMessage,
}) => {
  // var [messageClassName, setMessageClassName] = useState("");
  //var [message, setMessage] = useState("");
  const handleDelete = async () => {
    console.log("delete - " + id);
    const result = await fetch("http://localhost:5000/" + id, {
      headers: {},
      method: "DELETE",
    });
    console.log("DEL Status->" + result.status);
    if (result.status === 200) {
      // setMessage("Record Deleted");
      // setMessageClassName("Info");
      displayMessage("Record Deleted", "Success");
    } else {
      //  setMessage("Name is empty");
      //  setMessageClassName("Warning");
      displayMessage("Record Deleted", "Warning");
    }
  };

  return (
    <div className=" m-2 w-full rounded-md border-2 p-2 shadow-lg  shadow-green-800 hover:bg-slate-400 md:w-3/4">
      <div className="font-bold">ID: {id}</div>

      <div className="">Reference NUmber : {title}</div>

      <div className=" hidden md:flex md:gap-10">
        <div> Start Date: {timestampCreated}</div> <div>End Date</div>
      </div>

      <div>Desc</div>
      <div className="flex flex-col justify-center sm:flex sm:flex-row sm:gap-4">
        <button
          className="m-3 rounded-md border bg-orange-800 px-3 py-1"
          // onClick={handleDelete.bind(null, id)}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
