import Header from "@/features/header/Header";
import Sidebar from "@/features/sidebar/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full h-screen relative top-0 left-0 flex p-1 gap-1">
      <div className="w-[20%] lg:block hidden h-full relative dark:bg-black/8 bg-neutral-800 rounded-lg py-4">
        <Sidebar />
      </div>
      <div className="lg:w-[80%] w-full h-full relative flex flex-col">
        {/* Header */}
        <header className="w-full h-[8vh] relative  px-2 dark:bg-black/8 bg-neutral-800 rounded-lg">
          <Header />
        </header>

        {/* Main */}
        <main className="w-full h-[80vh] relative dark:bg-black/8 bg-neutral-800 rounded-lg mt-1 p-2">
          <Outlet />
        </main>

        {/* Bottom nav */}
        <nav className="w-full h-[10vh] relative dark:bg-black/8 bg-neutral-800 rounded-lg mt-1 px-4 flex items-center justify-center">
          {" "}
          <h1 className=" text-xs font-medium">Bottom Nav</h1>
        </nav>
      </div>
    </div>
  );
};

export default MainLayout;
