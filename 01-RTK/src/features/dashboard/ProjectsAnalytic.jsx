import React from "react";
import {} from "recharts";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const ProjectsAnalytic = ({
  Card,
  CardContent,
  CardHeader,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
}) => {
  return (
    <Card className="bg-transparent lg:h-full md:h-60 lg:col-span-2 col-span-1 relative p-4">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 dark:bg-black/6 rounded-xl "></div>
      <CardHeader className="w-full h-fit relative p-0 rounded-t-xl">
        <h1 className="font-medium text-sm w-fit">Projects Analytics</h1>
      </CardHeader>
      <CardContent className={`w-full h-full relative   p-0`}>
        {/* Chart will be here */}
        {/* <div className="w-full h-full relative flex items-start justify-evenly"> */}
        {/* Bar chart */}
        {/* Placeholder for chart - replace with actual chart component */}
        {/* {[...Array(7)].map((_, i) => (
           <div className="w-8 h-[85%] relative flex flex-col items-center justify-center gap-1">
            <div className="w-full h-full bg-linear-to-br from-[#64b345] to-[#0daed6] rounded-lg"></div>
            <span className="inline-block font-extralight text-[10px] text-center">
              Mon
            </span>
          </div>
         ))} */}
        {/* </div> */}
        <ChartContainer
          className="w-full lg:h-32 md:h-full p-0  relative"
          config={{
            chartData: {
              label: "month",
              color: "var(--chart-1)",
            },
          }}
        >
          {/* Bar part */}
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            {/* give gradient color */}
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>

            {/* Bar */}
            <Bar dataKey="desktop" fill="url(#barGradient)" radius={8}></Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ProjectsAnalytic;
