import { useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState<boolean>(false);

  const darkMode = () => {
    setDark(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  const lightMode = () => {
    setDark(false);
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };

  return (
    <div
      className={`flex flex-row justify-around rounded-full ${dark ? "bg-gray-500" : "bg-slate-300"} transition-all duration-200 ease-in-out`}
    >
      <div
        onClick={lightMode}
        className={`w-[50%] px-8 py-2 rounded-full ${dark ? "" : "bg-white"}`}
      >
        <p className={dark ? "text-gray-400" : "text-black"}>Light</p>
      </div>
      <div
        onClick={darkMode}
        className={`w-[50%] px-10 py-2 rounded-full ${dark ? "bg-gray-600" : ""}`}
      >
        <p className={dark ? "text-white" : "text-gray-400"}>Dark</p>
      </div>
    </div>
  );
};

export default ThemeToggle;
