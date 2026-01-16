import MakeTodos from "@/features/todo/makeTodos/MakeTodos";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const AddTask = () => {
  const todo = useSelector((state) => state.todos.todos);
  const [priority, setPriority] = useState("");

  return (
    <div className="w-full h-full relative">
      <div className="grid lg:grid-cols-6 grid-cols-1 lg:gap-0 gap-4 lg:place-content-between  w-full items-center relative">
        <div className="lg:col-span-2">
          <h1 className="text-xl font-medium leading-none">
            Create Tasks And Projects 
          </h1>
          <p className="text-xs font-extralight tracking-wider md:w-full w-[50%] pt-0.5">
            Here's a list of your tasks for this month.
          </p>
        </div>
        <MakeTodos className="lg:col-span-4" />
      </div>
    </div>
  );
};

export default AddTask;
