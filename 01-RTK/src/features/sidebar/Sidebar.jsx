import Logo from "@/components/common/Logo";
import React from "react";
import NavLinks from "../navigation/NavLinks";
import BottemBar from "./BottemBar";

const Sidebar = () => {
  return (
    <div className="h-full w-full relative flex justify-start flex-col gap-4 ">
      <Logo />
      <div className="my-4 flex flex-col gap-2.5">
        <h1 className="px-5.5 leading-none font-normal text-xs">Menu</h1>
        <NavLinks />
      </div>

      {/* <BottemBar /> */}
    </div>
  );
};

export default Sidebar;
