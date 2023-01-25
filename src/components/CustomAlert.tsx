//import { ReactHTMLElement } from "react";
import React, { FC } from "react";

export type AlertType = "Info" | "Warning" | "Error" | "Success";

// const AlertType: { [key: string]: string } = {
//   Warning: "text-white  bg-red-400 border-2 rounded-md grow px-3",
//   Info: "text-white  bg-green-400 border-2 rounded-md grow",
// };

const getClass = (key: AlertType): string => {
  if (key === "Warning") return "bg-yellow-400";
  if (key === "Info") return "bg-blue-400";
  if (key === "Error") return "bg-red-400";
  if (key === "Success") return "bg-green-400";
  return "";
};

const CustomAlert: FC<{ message: string; type: AlertType }> = ({
  message,
  type,
}) => {
  return (
    <div className="px-3 grow flex">
      <span
        className={"text-white border-2 rounded-md grow px-3 " + getClass(type)}
      >
        {message}
      </span>
    </div>
  );
};

export default CustomAlert;
