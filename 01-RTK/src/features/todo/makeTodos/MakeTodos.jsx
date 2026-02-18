import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
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
import { toast } from "sonner";
import { addTodos } from "@/store/slices/todos/todosSlice";
import { useDispatch } from "react-redux";
import { IoIosClose } from "react-icons/io";

const MakeTodos = ({ className }) => {
  const dispatch = useDispatch();
  const [inputValueOfTitle, setInputValueOfTitle] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  // priorityOptions: available choices; priority: currently selected
  const [priorityOptions] = useState(["High", "Medium", "Low"]);
  const [priority, setPriority] = useState("");

  // Handle Title
  const handleInputChange = (e) => {
    setInputValueOfTitle(e.target.value);
  };

  // Handle Priority
  // Select's onValueChange provides the value (string), not an event
  const handlePriority = (value) => {
    if (typeof value !== "string" || value.trim() === "") {
      toast.error("Empty Value is Not Allowed");
      return;
    }
    setPriority(value);
  };

  // Handle Description
  const handleTaskDescription = (e) => {
    setDescriptionValue(e.target.value);
  };

  // disabled Button when any input is empty
  const isButtonDisabled =
    !inputValueOfTitle.trim() || !priority.trim() || !descriptionValue.trim();

  // handle create task or prject
  const handleCreate = (e) => {
    e.preventDefault(); // stop page reload
    // validate on submit
    if (inputValueOfTitle.trim() === "") {
      toast.error("Task title is required");
      return;
    }
    if (priority.trim() === "") {
      toast.error("Please select a priority");
      return;
    }
    if (descriptionValue.trim() === "") {
      toast.error("Task description is required");
      return;
    }

    // TODO: dispatch or save the new task to store
    dispatch(
      addTodos({
        priority,
        title: inputValueOfTitle.trim(),
        description: descriptionValue.trim(),
      }),
    );

    setInputValueOfTitle("");
    setPriority("");
    setDescriptionValue("");
    toast.success("Task Created");
  };
  return (
    <div className={` max-w-full flex ${className}`}>
      <Card className="bg-accent-foreground w-full">
        <CardHeader >
          <div className="flex w-full items-center justify-between">
          <div>
            <CardTitle>Create Your Tasks or Projects</CardTitle>
            <CardDescription className="text-xs">
              form to create a your task or project
            </CardDescription>
          </div>
          <span
            className={`border border-accent rounded-full font-medium inline-flex h-7 w-7 justify-center items-center `}
          >
            <IoIosClose  />
          </span>
          </div>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleCreate}
            className="w-full relative flex flex-col gap-4 "
          >
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
                  name="taskTitle"
                  value={inputValueOfTitle}
                  onChange={handleInputChange}
                  placeholder="Title for tasks..."
                  className="text-sm placeholder:text-xs bg-transparent border-accent focus-visible:ring-0 "
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor={"taskPriority"}
                  className="text-sm tracking-wide opacity-65 font-medium "
                >
                  Task Priority
                </label>
                <Select
                  onValueChange={handlePriority}
                  className="text-xs  placeholder:text-xs"
                  value={priority}
                >
                  <SelectTrigger
                    id="taskPriority"
                    className="text-xs placeholder:text-xs px-3 py-1 focus-visible:ring-0 border-accent"
                  >
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>

                  <SelectContent className="">
                    {priorityOptions.map((items, itemIntex) => (
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
                    onChange={handleTaskDescription}
                    className="text-sm placeholder:text-xs bg-transparent border-accent focus-visible:ring-0 "
                  />
                </div>
                <Button
                  type="submit"
                  variant="outline"
                  className="cursor-pointer"
                  disabled={isButtonDisabled}
                >
                  Create Task
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MakeTodos;
