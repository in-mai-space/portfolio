import React from "react";

interface ButtonProps {
  onPress: () => void;
  text: string;
  filled?: boolean;
  icon?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  filled = false,
  icon = false,
  disabled = false,
}) => {
  const Diamond = () => {
    return (
      <svg
        className="dark:fill-white fill-black"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.509 10.3617C13.6912 10.0902 11.4615 7.8616 11.1903 5.04619L10.7328 0.292244L10.2752 5.04619C10.004 7.86208 7.77436 10.0907 4.95656 10.3617L0.206055 10.819L4.95656 11.2762C7.77436 11.5477 10.004 13.7763 10.2752 16.5917L10.7328 21.3457L11.1903 16.5917C11.4615 13.7758 13.6912 11.5472 16.509 11.2762L21.2595 10.819L16.509 10.3617Z" />
      </svg>
    );
  };

  return (
    <button
      onClick={onPress}
      className={`rounded-full px-10 py-2 flex flex-row items-center justify-center gap-2 ${
        filled
          ? `bg-black text-white ${!disabled && "hover:bg-slate-800"} dark:bg-white dark:text-black ${!disabled && "dark:hover:bg-black"}`
          : `border-[0.5px] text-black dark:text-white border-black ${!disabled && "hover:bg-black hover:text-white"} dark:border-white ${!disabled && "dark:hover:bg-white dark:hover:text-black"}`
      } transition-colors duration-300 ease-in-out`}
    >
      <p className="text-[20px]">{text}</p>
      {icon && <Diamond />}
    </button>
  );
};

export default Button;
