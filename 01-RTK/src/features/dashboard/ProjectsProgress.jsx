import React from "react";

const ProjectsProgress = ({
  Card,
  CardHeader,
  CardContent,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  Pie, 
  PieChart
}) => {
  const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "var(--chart-1)",
    },
    safari: {
      label: "Safari",
      color: "var(--chart-2)",
    },
    firefox: {
      label: "Firefox",
      color: "var(--chart-3)",
    },
    edge: {
      label: "Edge",
      color: "var(--chart-4)",
    },
    other: {
      label: "Other",
      color: "var(--chart-5)",
    },
  };

  return (
    <Card className="p-4 bg-transparent lg:h-full md:h-64 lg:col-span-1 relative w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 dark:bg-black/6 rounded-xl "></div>
      <CardHeader className="w-full h-fit relative p-0 rounded-t-xl">
        <h1 className="font-medium text-sm w-fit">Project Progress</h1>
      </CardHeader>
      <CardContent className="relative w-full h-full p-0">
        <ChartContainer
          config={chartConfig}
          className="lg:h-32 md:h-full w-full relative"
        >
          <PieChart>
            <Pie data={chartData} dataKey="visitors" />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="flex-wrap gap-2 lg:*:basis-1/4 md:basis-1/2 *:justify-center w-full p-0 lg:text-[8px] md:text-xs"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ProjectsProgress;
