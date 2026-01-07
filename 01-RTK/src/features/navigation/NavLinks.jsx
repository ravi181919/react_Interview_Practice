import React from "react";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

const NavLinks = () => {
  const links = [
    { name: "Dashboard", path: "/", icon: <MdSpaceDashboard size={16} /> },
    { name: "Tasks", path: "/tasks", icon: <BsListTask size={15} /> },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <TbBrandGoogleAnalytics size={15} />,
    },
  ];
  return (
    <>
      <div className="h-fit flex flex-col gap-2.5">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={`h-fit flex items-center justify-start text-sm gap-1 relative px-5 py-1 dark:text-black text-white`}
          >
            {({ isActive }) => (
              <>
                <span
                  className={
                    isActive ?
                    "absolute left-0 h-full rounded-r-lg bg-[#51B9EF] w-1" : ""
                  }
                />
                <span
                  className={
                    isActive
                      ? "opacity-100 text-[#51B9EF]"
                      : "opacity-65 font-thin"
                  }
                >
                  {link.icon}
                </span>
                <span
                  className={isActive ? "opacity-100" : "opacity-65 font-thin "}
                >
                  {link.name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default NavLinks;
