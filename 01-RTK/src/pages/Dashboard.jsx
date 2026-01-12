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
import Projects from "@/features/dashboard/Projects";
import TrackTime from "@/features/dashboard/TrackTime";
import ProjectsProgress from "@/features/dashboard/ProjectsProgress";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import 
{ Pie,
  PieChart, 
  Bar, 
  BarChart, 
  CartesianGrid, 
  XAxis } from "recharts";
  import ShinyText from '@/components/animations/ShinyText';
const Dashboard = () => {
  return (
    <div className="w-full h-full relative overflow-y-scroll flex flex-col items-start xl:items-start xl:justify-start justify-center p-2 py-0 gap-1">
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
      <div className="w-full md:h-fit grid lg:grid-cols-4 gap-2 md:grid-cols-1 relative">
        {/* Remainders */}
        <Remainder Card={Card} CardHeader={CardHeader} CardContent={CardContent} ShinyText={ShinyText}/>

        {/* Project Analytics */}
        <ProjectsAnalytic
          Card={Card}
          CardHeader={CardHeader}
          CardContent={CardContent}
          Bar={Bar}
          BarChart={BarChart}
          CartesianGrid={CartesianGrid}
          ChartContainer={ChartContainer}
          ChartTooltip={ChartTooltip}
          ChartTooltipContent={ChartTooltipContent}
          XAxis={XAxis}
        />
        {/* Projects Progress */}
        <ProjectsProgress
          Card={Card}
          CardHeader={CardHeader}
          CardContent={CardContent}
          ChartContainer={ChartContainer}
          ChartLegend={ChartLegend}
          ChartLegendContent={ChartLegendContent}
          Pie={Pie}
          PieChart={PieChart}
        />
      </div>

      {/*  */}
      <div className="w-full md:h-fit grid lg:grid-cols-4 gap-2 md:grid-cols-1 relative">
        {/* Track Time  */}
        <TrackTime Card={Card} CardHeader={CardHeader} CardContent={CardContent} />

        {/* Projects or Tasks*/}
        <Projects Card={Card} CardHeader={CardHeader} />
      </div>
    </div>
  );
};

export default Dashboard;
