import React from "react";

const DashBoardHeading = ({ HiPlusSm, Button }) => {
  return (
    <div className="w-full flex items-start justify-between">
      <div className="">
        <h1 className="text-xl font-medium leading-none">Dashboard</h1>
        <p className="text-xs font-extralight tracking-wider md:w-full w-[50%] pt-0.5">
          Plan, prioritize, and accomplish your task with ease.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-2">
        <Button className="" variant="outline" size="sm">
          <HiPlusSm /> Add Task
        </Button>
        <Button className="" variant="outline" size="sm">
          View Reports
        </Button>
      </div>
    </div>
  );
};

export default DashBoardHeading;
