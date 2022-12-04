import { useEffect, useState } from "react";

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
    <div className="flex justify-between p-2 ">
      <div
        className="text-white bg-black  dark:bg-white dark:text-black px-2 py-1"
        onClick={toggleTheme}
      >
        M
      </div>
      <div className="flex gap-4 ">
        <button className="border-b-2 border-black pl-2 dark:border-white">
          About
        </button>
        <button>Portfolio</button>
        <button>Contacts</button>
      </div>
    </div>
  );
}

export { Header };
