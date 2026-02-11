import React from "react";

const VARIANTS = {
  solid: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md",
  outline: "border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white",
  ghost: "text-emerald-700 hover:bg-emerald-100",
  danger: "bg-red-500 text-white hover:bg-red-600 shadow-md",
};

const SIZES = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-5 py-2",
  lg: "text-lg px-6 py-3",
};

function Button({
  title,
  variant = "solid",
  size = "md",
  onClick,
  disabled = false,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-xl font-semibold transition-all duration-300 
        transform hover:scale-105 active:scale-95
        ${VARIANTS[variant]}
        ${SIZES[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {title}
    </button>
  );
}

export default Button;
