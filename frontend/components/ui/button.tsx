import React from "react";

interface ButtonProps {
  onPress: () => void;
  text: string;
  filled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onPress, text, filled = false }) => {
  return (
    <button
      onClick={onPress}
      className={`rounded-full px-10 py-2 ${
        filled
          ? `bg-black text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-black`
          : `border-[0.5px] text-black dark:text-white border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black`
      } transition-colors duration-300 ease-in-out`}
    >
      <p className="text-[20px]">{text}</p>
    </button>
  );
};

export default Button;
