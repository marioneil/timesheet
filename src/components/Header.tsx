import { useEffect, useState } from "react";

import {
  BsFillCalendarFill,
  BsCardList,
  BsFillGearFill,
  BsBoxArrowRight,
} from "react-icons/bs";

function Header() {
  const [theme, setTheme] = useState("light");

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
    //    document.body.className = theme;
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

  return (
    <div className="p-2 ">
      <div
        className="text-white bg-black  dark:bg-white dark:text-black px-2 py-1 inline"
        onClick={toggleTheme}
      >
        M
      </div>
      <div className="flex border-2 justify-between my-8">
        <div className="flex">
          <div className="border-r-2 p-2">
            <BsFillCalendarFill />
          </div>
          <BsCardList />
          <BsFillGearFill />
        </div>
        <div className=" bg-yellow-600">
          <BsBoxArrowRight />
        </div>
      </div>
    </div>
  );
}

export { Header };
