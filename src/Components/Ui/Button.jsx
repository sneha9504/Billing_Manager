// components/Button.jsx
import React from "react";
import { cn } from "../../lib/Utils"; // optional utility for merging classNames

const Button = ({
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        `flex items-center justify-center gap-2 px-4 py-2 
        bg-blue-600 text-white font-medium rounded-lg 
        hover:bg-blue-700 disabled:opacity-50 
        disabled:cursor-not-allowed transition duration-300 shadow-md`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
