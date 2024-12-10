import { useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState<boolean>(true);

  return (
    <div
      className={`flex flex-row justify-around rounded-full ${dark ? "bg-gray-500" : "bg-slate-300"} transition-all duration-200 ease-in-out`}
    >
      <div
        onClick={() => setDark(false)}
        className={`w-[50%] px-8 py-2 rounded-full ${dark ? "" : "bg-white"}`}
      >
        <p className={dark ? "text-gray-400" : "text-black"}>Light</p>
      </div>
      <div
        onClick={() => setDark(true)}
        className={`w-[50%] px-10 py-2 rounded-full ${dark ? "bg-gray-600" : ""}`}
      >
        <p className={dark ? "text-white" : "text-gray-400"}>Dark</p>
      </div>
    </div>
  );
};

export default ThemeToggle;
