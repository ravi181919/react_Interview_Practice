import { Button } from "@/components/ui/button";
import React from "react";
import { LuListTodo } from "react-icons/lu";
const AddTodoBtn = ({className, text}) => {
  return <Button variant="outline" className={`addTodoBtn cursor-pointer gap-0.5 ${className}`} >
    <LuListTodo className="p-px"/>
    {text}</Button>;
};

export default AddTodoBtn;
