import ThemeBtn from "@/features/header/ThemeBtn";
import React from "react";
import Profile from "../user/Profile";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="w-full h-full relative grid items-center  grid-cols-6 lg:grid-cols-12 gap-2 bg">
      {/* SideMenuOpner */}
      <div className="lg:hidden col-span-1">
        <Button variant="outline" className="text-neutral-900 shadow-none" size="sm">
          <TbLayoutSidebarRightCollapseFilled />
        </Button>
      </div>

      <div className="lg:col-span-4 col-span-3 bg-background shadow-sm dark:shadow-none text-neutral-900  py-2 px-4 rounded-full">
        <h1 className=" text-xs font-medium">Search</h1>
      </div>

      <div className="lg:col-span-5 col-span-1">
        <Profile />
      </div>
      <div className="lg:col-span-3 col-span-1 flex justify-end">
        <ThemeBtn />
      </div>
    </div>
  );
};

export default Header;
