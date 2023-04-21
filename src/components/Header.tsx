import { useEffect, useState } from "react";
import "../scss/App.scss";
import { auth, logout } from "../firebase";
import { useNavigate } from "react-router-dom";

import { ImSpinner3 } from "react-icons/im";

import {
  BsFillCalendarFill,
  BsCardList,
  BsFillGearFill,
  BsBoxArrowRight,
  BsFillHouseFill,
} from "react-icons/bs";

import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
  const [theme, setTheme] = useState("light");

  const [user, loading, error] = useAuthState(auth);

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

  const navigate = useNavigate();

  const logOutUser = async () => {
    console.log("in logOutUser");
    await logout();
    console.log("after logout");
    navigate("/");
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

  // if(loading || !user) return <div>Loading</div>
  return (
    <div className="p-2 ">
      <div
        className="inline bg-black  px-2 py-1 text-white dark:bg-white dark:text-black"
        onClick={toggleTheme}
      >
        M
      </div>
      <div className="my-8 flex justify-between rounded border-2">
        {loading || !user ? (
          <div className="flex h-6 w-full justify-center bg-slate-500 ">
            <ImSpinner3 className="motion-safe:animate-spin" />
          </div>
        ) : (
          <>
            <div className="flex">
              <div
                id="myBox"
                className="hover:arrow border-r-2 p-2 hover:bg-gray-300"
              >
                <Link to="/">
                  <BsFillHouseFill />
                </Link>
              </div>
              <div
                id="myBox"
                className="hover:arrow border-r-2 p-2 hover:bg-gray-300"
              >
                <Link to="/users">
                  <BsFillCalendarFill />
                </Link>
              </div>
              <div className="border-r-2 p-2 ">
                <Link to="/task">
                  <BsCardList />
                </Link>
              </div>
            </div>
            <div className=" border-l-2 bg-yellow-600 p-2">
              <BsBoxArrowRight onClick={() => logOutUser()} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export { Header };
