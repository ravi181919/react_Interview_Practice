import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useSelector } from "react-redux";

const Remainder = ({ Card, CardHeader, CardContent, ShinyText }) => {
  const theme = useSelector((state) => state.isDarkTheme.isDarkTheme);
  return (
    <Card className="p-4 bg-transparent lg:h-auto h-60 lg:col-span-1 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 dark:bg-black/6 rounded-xl "></div>
      <CardHeader className="w-full h-fit relative p-0 rounded-t-xl">
        <div className="flex w-full justify-between items-center px-1  z-1">
          <h1 className="font-medium text-xs w-fit">Remainder</h1>
          <span
            className={`border rounded-full font-medium inline-flex h-5 w-5 justify-center items-center `}
          >
            <FiArrowUpRight size={10} />
          </span>
        </div>
      </CardHeader>
      <CardContent className="w-full h-full px-0 py-4 flex gap-2 flex-col">
        <div className="">
          <h1 className="">
            <ShinyText
              text="Wish Binu's Birthday"
              speed={4}
              delay={1}
              color={`${theme ? "#000" : "#b5b5b5"}`}
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={true}
              className="text-lg font-medium leading-6 tracking-wide"
            />
          </h1>
        </div>
        <div className="">
          <p className="text-xs">
            <time datetime="2026-01-21T12:00">21 Jan 2026, 12:00 AM</time>
          </p>
          <p className="text-xs">
            Only
            <time datetime="2026-01-21T12:00"> 9 </time>
            Days Left
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Remainder;
