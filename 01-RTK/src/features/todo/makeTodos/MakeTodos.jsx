import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import AddTodoBtn from "../addTodoBtn/AddTodoBtn";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const MakeTodos = ({ className }) => {
  const [inputValue, setInputValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if(inputValue.trim() === "") return;
    else setInputValue(inputValue);
    
  };
  
  const handleCreate = () => {
    setInputValue("");
  }
  return (
    <div className={`max-w-sm flex relative ${className}`}>
      <Card className="bg-accent-foreground w-full">
        <CardHeader>
          <CardTitle>Create Your Tasks or Projects</CardTitle>
          <CardDescription className="text-xs">
            form to create a your task or project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full relative flex flex-col gap-4 ">
            <div className="grid grid-cols-6 gap-2">
              <div className="col-span-3">
                <label
                  htmlFor={"newTask"}
                  className="text-sm tracking-wide opacity-65 font-medium "
                >
                  Task Title
                </label>
                <Input
                  id="newTask"
                  name="taskTilte"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Title for tasks..."
                  className="text-sm placeholder:text-xs bg-transparent border-accent focus-visible:ring-0 "
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor={"newTask"}
                  className="text-sm tracking-wide opacity-65 font-medium "
                >
                  Task Priroty
                </label>
                <Select className="text-xs  placeholder:text-xs">
                  <SelectTrigger className="text-xs placeholder:text-xs px-3 py-1 focus-visible:ring-0 border-accent">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>

                  <SelectContent className="">
                    {["High", "Medium", "Low"].map((items, itemIntex) => (
                      <SelectItem
                        className="hover:text-accent-foreground"
                        value={items}
                        key={itemIntex}
                      >
                        {items}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-full relative ">
              <div className="relative w-full grid gap-2">
                <div className="relative w-full">
                  <label
                    htmlFor="descriptionOfTasks"
                    className="text-sm tracking-wide opacity-65 font-medium "
                  >
                    Tasks Description
                  </label>
                  <Textarea
                    placeholder="Describe Your Tasks & Projects..."
                    id="descriptionOfTasks"
                    name="taskDescription"
                    value={descriptionValue}
                    onChange={(e) => setDescriptionValue(e.target.value)}
                    className="text-sm placeholder:text-xs bg-transparent border-accent focus-visible:ring-0 "
                  />
                </div>
                <Button 
                onClick={handleCreate}
                variant="outline"
                className="cursor-pointer"
                >
                  Create Task
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MakeTodos;
