import React from "react";
import useTheme from "@/store/slices/theme/useTheme";
import { Button } from "../../components/ui/button";
import { PiMoonFill } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";
const ThemeBtn = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <div onClick={toggleTheme} className="">
      <Button variant="outline" className="text-neutral-900" size="sm">
        {isDarkTheme ? (
          <>
            <IoSunny /> <span className="md:inline-block hidden">Light Mode</span>
          </>
        ) : (
          <>
            <PiMoonFill /> <span className="md:inline-block hidden">Dark Mode</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default ThemeBtn;
