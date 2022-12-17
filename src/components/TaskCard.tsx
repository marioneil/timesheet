import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { BsFillChatRightDotsFill } from "react-icons/bs";

export const TaskCard = ({ data }) => {
  console.log(data);

  return (
    <div className="border-2 border-orange-300 rounded-md  p-2 m-2  hover:bg-slate-400  w-full">
      <div className="font-bold">ID: {data.id}</div>

      <div className="">Reference NUmber : {data.title}</div>

      <div className="flex gap-10">
        <div> Start Date: {data.timestampCreated}</div> <div>End Date</div>
      </div>

      <div>Desc</div>
      <div className="flex justify-between items-center">
        <div>
          <button className="rounded-md border-2 px-3 py-2 my-3 bg-amber-500">
            Scheduled
          </button>

          <button className="rounded-md border-2 px-3 py-2 my-3 bg-green-500">
            Approval Status: All Approved
          </button>
        </div>
        <div>
          <div className="border-2 flex items-center">
            <span className="border-r-2 px-3 py-2">
              <BsFillChatRightDotsFill size={24} />
            </span>
            <span className=" px-3 py-2">100</span>
          </div>

          {/* <ButtonGroup className="rounded-md border-2  px-5 my-3 divide-x-2 bg-amber-500"> */}
          {/* <button className="">Comments</button>
            <button className="r text-red-500 bg-white">10</button>
            <button className="bg-white"></button> */}
          {/* </ButtonGroup> */}
        </div>
      </div>
    </div>
  );
};
