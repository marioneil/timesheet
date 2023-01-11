import { PropsWithChildren } from "react";
import { BsFillChatRightDotsFill } from "react-icons/bs";

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
  return (
    <div className=" border-2 rounded-md w-full md:w-3/4 p-2 m-2  hover:bg-slate-400 border-green-600">
      <div className="font-bold">ID: {id}</div>

      <div className="">Reference NUmber : {title}</div>

      <div className=" hidden md:flex md:gap-10">
        <div> Start Date: {timestampCreated}</div> <div>End Date</div>
      </div>

      <div>Desc</div>
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap gap-4 ">
          <button className="rounded-md px-3 py-1 m-3 bg-blue-500 text-white grow ">
            Scheduled
          </button>

          <button className="rounded-md border px-3 py-1 m-3 ">
            Approval Status: All Approved
          </button>
        </div>
        <div>
          <div className="border-2 rounded-md border-red-600 flex items-center m-3">
            <span className="border-r-2 border-red-600 px-3 py-1">
              <BsFillChatRightDotsFill size={24} className="text-red-500" />
            </span>
            <span className=" px-3 py-1 text-red-500">100</span>
          </div>
        </div>
      </div>
    </div>
  );
};
