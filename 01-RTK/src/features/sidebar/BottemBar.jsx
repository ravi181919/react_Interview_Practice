import { Card } from "@/components/ui/card";
import React from "react";

const BottemBar = () => {
  return (
    <div className="w-full lg:h-40 md:h-fit px-4 absolute bottom-0 left-0">
      <Card className="p-4 bg-transparent lg:h-full h-40 lg:col-span-1 ">
        <h1 className="font-medium text-sm w-fit">Time Track</h1>
      </Card>
    </div>
  );
};

export default BottemBar;
