import React from "react";

interface ButtonProps {
  onPress: () => void;
  text: string;
  icon?: boolean;
  filled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onPress, text, filled = false }) => {
  return (
    <button
      onClick={onPress}
      className={`rounded-full px-10 py-2 ${filled ? "bg-white text-black hover:bg-slate-200" : "border-[0.5px] border-white hover:bg-white hover:text-black"} transition-colors duration-300 ease-in-out`}
    >
      <p className="text-[20px]">{text}</p>
    </button>
  );
};

export default Button;
