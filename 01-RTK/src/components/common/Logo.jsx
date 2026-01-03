import React from "react";
import logo from "/logo.png";
import { motion } from "framer-motion";
const Logo = () => {
  return (
    <div className="w-fit flex items-center gap-1.5">
      <div className="w-[8vw] lg:w-[2.5vw] relative overflow-hidden">
        <img src={logo} alt="logo" className="w-full object-cover" />
      </div>
      <h1 className="text-sm leading-none tracking-wider font-medium">
        Structure Todo 
      </h1>
    </div>
  );
};

export default Logo;
