import React from "react";
import TodoItem from "../todo/allTodos/TodoItem";
import useTodos from "@/store/slices/todos/useTodos";
import { CardContent } from "@/components/ui/card";

const Projects = ({ Card, CardHeader }) => {
  const { todos } = useTodos();
  return (
    <Card className="p-4 bg-transparent lg:h-full h-96  lg:col-span-3 relative ">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 dark:bg-black/6 rounded-xl "></div>
      <CardHeader className="w-full h-fit relative p-0 rounded-t-xl">
        <h1 className="font-medium text-sm w-fit">Projects</h1>

        <CardContent className="w-full overflow-y-auto pb-0 max-h-24.5 flex-col lg:flex hidden">
          <TodoItem ofTodosHeader={false} />
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default Projects;
