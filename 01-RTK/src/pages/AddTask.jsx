import MakeTodos from "@/features/todo/makeTodos/MakeTodos";
import React, { useState, Activity } from "react";
import { useSelector } from "react-redux";

const AddTask = ({isMakeNewTodo, setIsMakeNewTodo}) => {
  const todo = useSelector((state) => state.todos.todos);
  const [priority, setPriority] = useState("");

  return (
    <div className="w-full h-full relative">
      <Activity mode={isMakeNewTodo ? "visible" : "hidden"}>
        <div className="w-full h-full flex absolute top-0  left-0 items-center z-10 rounded-lg backdrop-blur-md justify-center">
          <MakeTodos />
        </div>
      </Activity>
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
        </div>
      </div>
    </div>
  );
};

export default AddTask;
