import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { HiPlusSm } from "react-icons/hi";
import { FaCaretUp } from "react-icons/fa";
import DashBoardHeading from "@/features/dashboard/DashBoardHeading";
import ProjectsStatus from "@/features/dashboard/ProjectsStatus";
import ProjectsAnalytic from "@/features/dashboard/ProjectsAnalytic";
import Remainder from "@/features/dashboard/Remainder";

const Dashboard = () => {
  return (
    <div className="w-full h-full relative overflow-y-scroll flex flex-col gap-2 items-center justify-center p-2">
      {/* Dashboard Heading */}
      <DashBoardHeading HiPlusSm={HiPlusSm} Button={Button} />

      {/* cards sections => projects status */}
      <ProjectsStatus
        Card={Card}
        FiArrowUpRight={FiArrowUpRight}
        FaCaretUp={FaCaretUp}
        CardHeader={CardHeader}
        CardContent={CardContent}
      />

      {/* chart section + remainders + projets */}
      <div className="w-full lg:h-44 h-fit grid lg:grid-cols-4 pt-1 gap-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 relative">
        {/* Project Analytics */}
        <ProjectsAnalytic Card={Card} CardHeader={CardHeader} />
        {/* Remainders */}
        <Remainder Card={Card} CardHeader={CardHeader} />
      </div>

      {/*  */}
      <div className="w-full lg:h-40 h-fit grid lg:grid-cols-4 pt-1 gap-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 relative">
        <Card className="p-4 bg-transparent lg:h-full h-40 lg:col-span-1 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20 dark:bg-black/6 rounded-xl "></div>
          <CardHeader className="w-full h-fit relative p-0 rounded-t-xl">
            <h1 className="font-medium text-sm w-fit">Time Track</h1>
          </CardHeader>
        </Card>
        <Card className="p-4 bg-transparent lg:h-full h-64 lg:col-span-1 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20 dark:bg-black/6 rounded-xl "></div>
          <CardHeader className="w-full h-fit relative p-0 rounded-t-xl">
            <h1 className="font-medium text-sm w-fit">Project Progress</h1>
          </CardHeader>
        </Card>
        <Card className="p-4 bg-transparent lg:h-full h-96 lg:col-span-2 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20 dark:bg-black/6 rounded-xl "></div>
          <CardHeader className="w-full h-fit relative p-0 rounded-t-xl">
            <h1 className="font-medium text-sm w-fit">Projects</h1>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
