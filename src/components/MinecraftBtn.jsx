import React from 'react';

const MinecraftBtn = ({ children, onClick, variant = "primary", className = "" }) => {
  // Glassmorphism styles
  const baseStyle = "font-vt323 text-xl px-6 py-2 glass-btn text-white uppercase tracking-widest cursor-pointer select-none rounded-lg";

  const variants = {
    primary: "hover:border-green-400 hover:text-green-400",
    accent: "hover:border-blue-400 hover:text-blue-400",
    danger: "hover:border-red-500 hover:text-red-500",
    nether: "hover:border-yellow-400 hover:text-yellow-400"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default MinecraftBtn;
