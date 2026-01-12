import { Button } from "@/components/ui/button";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { TiMediaPause } from "react-icons/ti";
import { TiMediaPlay } from "react-icons/ti";

const TrackTime = ({ Card, CardHeader, CardContent }) => {
  return (
    <Card className="p-4 bg-transparent lg:h-full md:h-40 h-40 lg:col-span-1 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 dark:bg-black/6 rounded-xl "></div>
      <CardHeader className="w-full h-fit relative p-0 rounded-t-xl">
        <div className="flex w-full justify-between items-center px-1  z-1">
          <h1 className="font-medium text-xs w-fit">Time Tracker</h1>
          <span
            className={`border rounded-full font-medium inline-flex h-5 w-5 justify-center items-center `}
          >
            <FiArrowUpRight size={10} />
          </span>
        </div>
      </CardHeader>
      {/* Timer */}

      <CardContent className="h-full w-full flex items-center justify-center flex-col relative gap-2 py-4">
        <div className="w-full relative text-center ">
          <h1 className="lg:text-xl text-md font-medium ">
            <span>1</span> : <span>24</span> : <span>19</span> <span>AM</span>
          </h1>
        </div>
        <div className="w-full relative flex justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="bg-linear-to-tr border-none from-[#64b345]  to-[#0daed6] text-neutral-50 shadow-none rounded-full"
          >
            <TiMediaPause />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-[#DD3938] border-none text-neutral-50 shadow-none rounded-full"
          >
            <TiMediaPlay />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackTime;
