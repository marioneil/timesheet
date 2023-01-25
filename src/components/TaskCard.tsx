import { MouseEventHandler, PropsWithChildren, useState } from "react";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import MYButton from "./Button/CustomButton";

interface TaskCardProps {
  id: string;
  title: string;
  timestampCreated: string;
}

const MyButton: React.FC<PropsWithChildren> = () => {
  return <button></button>;
};
export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  timestampCreated,
}) => {
  var [messageClassName, setMessageClassName] = useState("");
  var [message, setMessage] = useState("");
  const handleDelete = async (id: String) => {
    console.log("delete - " + id);
    const result = await fetch("http://localhost:5000/" + id, {
      headers: {},
      method: "DELETE",
    });
    console.log("DEL Status->" + result.status);
    setMessage("Record Saved to Database");
  };

  return (
    <div className=" border-2 rounded-md w-full md:w-3/4 p-2 m-2  hover:bg-slate-400 shadow-lg shadow-green-800">
      <div className="font-bold">ID: {id}</div>

      <div className="">Reference NUmber : {title}</div>

      <div className=" hidden md:flex md:gap-10">
        <div> Start Date: {timestampCreated}</div> <div>End Date</div>
      </div>

      <div>Desc</div>
      <div className="flex flex-col sm:flex sm:flex-row sm:gap-4 ">
        <MYButton type="Schedule">Scheduled</MYButton>
        <MYButton type="Approval">Approval Status: All Approved</MYButton>
        <div className=" border-2 rounded-md border-red-600 flex flex-wrap justify-center    m-4">
          <span className="border-r-2 border-red-600 px-3 py-1">
            <BsFillChatRightDotsFill size={24} className="text-red-500" />
          </span>
          <span className=" px-3 py-1 text-red-500">100</span>
        </div>
        <button
          className="rounded-md border px-3 py-1 m-3"
          // onClick={handleDelete.bind(null, id)}
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
