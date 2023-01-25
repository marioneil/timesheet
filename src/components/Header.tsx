import { useEffect, useState } from "react";
import "../scss/App.scss";

import {
  BsFillCalendarFill,
  BsCardList,
  BsFillGearFill,
  BsBoxArrowRight,
  BsFillHouseFill,
} from "react-icons/bs";

import { Link } from "react-router-dom";

function Header() {
  const [theme, setTheme] = useState("light");

  const arrowCss = {
    height: "20px",
    width: "20px",
    marginLeft: "30px",
    marginTop: "-11px",
    background: "red",
    MozTransform: "rotate(45deg)",
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
  }, []);

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
          <div
            id="myBox"
            className="border-r-2 p-2 hover:bg-gray-300 hover:arrow"
          >
            <Link to="/">
              <BsFillHouseFill />
            </Link>
          </div>
          <div
            id="myBox"
            className="border-r-2 p-2 hover:bg-gray-300 hover:arrow"
          >
            <Link to="/">
              <BsFillCalendarFill />
            </Link>
          </div>
          <div className="border-r-2 p-2 ">
            <Link to="/task">
              <BsCardList />
            </Link>
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
