import useTodos from "@/store/slices/todos/useTodos";
import React, { Activity, useState } from "react";
import TodoItem from "./TodoItem";
import AddTask from "@/pages/AddTask";

const AllTodos = () => {
  const {
    todos,
    addTodo,
    removeTodo,
    toggleTodoCompletion,
    editTodo,
    setFilterTodo,
    undoDelete,
  } = useTodos();
  const [isMakeNewTodo, setIsMakeNewTodo] = useState(false);
  return (
    <div className="w-full h-full relative lg:p-4 p-2 flex flex-col gap-6">
      <AddTask
        isMakeNewTodo={isMakeNewTodo}
        setIsMakeNewTodo={setIsMakeNewTodo}
      />
      <Activity mode={isMakeNewTodo !== true ? "visible" : "hidden"}>

      <TodoItem />
      </Activity>
    </div>
  );
};

export default AllTodos;
