import { useEffect, useState } from "react";
import "../scss/App.scss";

import {
  BsFillCalendarFill,
  BsCardList,
  BsFillGearFill,
  BsBoxArrowRight,
} from "react-icons/bs";

import { useNavigate } from "react-router-dom";

function Header() {
  const [theme, setTheme] = useState("light");

  const arrowCss = {
    height: "20px",
    width: "20px",
    marginLeft: "30px",
    marginTop: "-11px",
    background: "red",
    MozTransform: "rotate(45deg)",
    //-moz-transform: rotate(45deg);
    borderRight: "1px solid #000",
    borderBottom: "1px solid #000",
  };

  const toggleTheme = () => {
    console.log("in toggleTheme");
    if (theme == "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.append();
      localStorage.theme = "light";
    }
  };

  const showCalendar = () => {
    console.log("clicked calendar");
  };

  const navigate = useNavigate();

  const showNewTaskForm = () => {
    console.log("clicked new task form");
    navigate("/task");
  };

  const showNewTaskForm1 = () => {
    console.log("clicked new task form");
    navigate("/task1");
  };

  useEffect(() => {
    console.log("in use Effect");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  });

  const history = useNavigate();

  return (
    <div className="p-2 ">
      <div
        className="text-white bg-black  dark:bg-white dark:text-black px-2 py-1 inline"
        onClick={toggleTheme}
      >
        M
      </div>
      <div className="flex border-2 justify-between my-8 rounded">
        <div className="flex">
          {/* <div id="myBox0" style={arrowCss}></div> */}
          <div
            id="myBox"
            className="border-r-2 p-2 hover:bg-gray-300 hover:arrow"
          >
            <BsFillCalendarFill onClick={showCalendar} />
          </div>
          <div className="border-r-2 p-2 ">
            <BsCardList onClick={showNewTaskForm} />
          </div>
          <div className="border-r-2 p-2">
            <BsFillGearFill onClick={showNewTaskForm1} />
          </div>
        </div>
        <div className=" bg-yellow-600 border-l-2 p-2">
          <BsBoxArrowRight />
        </div>
      </div>
    </div>
  );
}

export { Header };
