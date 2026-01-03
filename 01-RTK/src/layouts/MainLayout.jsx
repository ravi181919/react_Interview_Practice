import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full h-screen relative top-0 left-0 flex flex-col ">
      {/* Header */}
      <header className="w-full h-[10vh] relative px-4 py-2">Header</header>

      {/* Main */}
      <main className="w-full h-[80vh] relative px-4"><Outlet /></main>

      {/* Bottom nav */}
      <nav className="w-full h-[10vh] relative px-4">Bottom Nav</nav>
    </div>
  );
};

export default MainLayout;
