import React from 'react';

const MinecraftBtn = ({ children, onClick, variant = "primary", className = "" }) => {
  // Glassmorphism styles
  const baseStyle = "font-vt323 text-2xl md:text-3xl px-8 py-4 glass-btn text-white uppercase tracking-widest cursor-pointer select-none rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 border-2";

  const variants = {
    primary: "border-cyan-400/50 hover:border-cyan-400 hover:text-cyan-200 hover:shadow-cyan-500/50",
    accent: "border-blue-400/50 hover:border-blue-400 hover:text-blue-200 hover:shadow-blue-500/50",
    danger: "border-red-400/50 hover:border-red-400 hover:text-red-200 hover:shadow-red-500/50",
    nether: "border-yellow-400/50 hover:border-yellow-400 hover:text-yellow-200 hover:shadow-yellow-500/50"
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
