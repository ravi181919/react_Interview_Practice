import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowUpDown,
  ArrowUp,
  Ellipsis,
  CircleCheckBig,
  Timer,
  Circle,
  CircleOff,
  Heart,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import useTodos from "@/store/slices/todos/useTodos";
import EmptyData from "@/components/common/EmptyData";

const TodoItem = ({ofTodosHeader = true}) => {
  const { todos } = useTodos();
  const dispatch = useDispatch();
  console.log(todos);

  // priorityOptions: available choices; priority: currently selected
  const [sortOptions] = useState(["Asc", "Desc"]);
  const [statusOptions] = useState(["Pending", "Completed", "Progress"]);
  const [priorityOptions] = useState(["High", "Medium", "Low"]);

  const [sort, setSort] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const handleSort = (value) => {};
  const handleStatus = (value) => {};
  const handlePriority = (value) => {};
  return (
    <div className="w-full border rounded-md h-full">
      {/* Header of itmes */}
      <div  className={`grid grid-cols-12 gap-4 items-center w-full bg-accent-foreground/40 rounded-t-md px-4 py-2 ${ofTodosHeader === false && "hidden"}`}>
        {/* Select All Box */}
        <div className="flex col-span-2 gap-2 items-center ">
          <input type="checkbox" className="h-2.5 w-2.5" />
          <h1 className="text-xs">Task</h1>
        </div>

        {/* Tilte With Sort by Asc & Desc */}
        <div className="w-fit col-span-5">
          <Select onValueChange={handleSort} className="text-xs" value={sort}>
            <SelectTrigger
              id="taskSort"
              isDefaultIcon={false}
              className="placeholder:text-xs cursor-pointer py-1 px-0 focus-visible:ring-0 focus-visible:bg-neutral-500 border-none font-medium text-sm"
            >
              <SelectValue placeholder="Title" className="" />
            </SelectTrigger>

            <SelectContent className="bg-accent-foreground">
              {sortOptions.map((items, itemIntex) => (
                <SelectItem
                  className="text-accent hover:text-accent-foreground"
                  value={items}
                  key={itemIntex}
                >
                  {items}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* status & Priority */}
        <div className="col-span-2 w-fit">
          <Select
            onValueChange={handleStatus}
            value={status}
            className="text-xs"
          >
            <SelectTrigger
              id="taskStatus"
              className="placeholder:text-xs cursor-pointer py-1 focus-visible:ring-0 focus-visible:bg-neutral-500 border-none font-medium text-sm"
              isDefaultIcon={false}
            >
              <SelectValue placeholder="Status" />
              <ArrowUpDown className="h-3 w-3 opacity-65 font-medium" />
            </SelectTrigger>

            <SelectContent className="bg-accent-foreground">
              {statusOptions.map((items, itemIntex) => (
                <SelectItem
                  className="text-accent hover:text-accent-foreground"
                  value={items}
                  key={itemIntex}
                >
                  {items}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2 w-fit">
          <Select
            onValueChange={handlePriority}
            value={priority}
            className="text-xs"
          >
            <SelectTrigger
              id="taskStatus"
              isDefaultIcon={false}
              className="placeholder:text-xs cursor-pointer py-1 focus-visible:ring-0 focus-visible:bg-neutral-500 border-none font-medium text-sm"
            >
              <SelectValue placeholder="Priority" />
              <ArrowUpDown className="h-3 w-3 opacity-65 font-medium" />
            </SelectTrigger>

            <SelectContent className="bg-accent-foreground">
              {priorityOptions.map((items, itemIntex) => (
                <SelectItem
                  className="text-accent hover:text-accent-foreground"
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

      {/* Task List */}

      {todos.length > 0 ? (
        todos.map((todosItems, todosIndex) => (
          <div
            key={todosItems.id || todosIndex}
            className="grid grid-cols-12 gap-4 items-center w-full px-4 py-3 border-b "
          >
            <div className="flex col-span-2 gap-2 items-center">
              <input type="checkbox" className="h-2.5 w-2.5" />
              <h1 className="text-xs">{todosItems.title}</h1>
            </div>
            <div className="col-span-5 flex items-center gap-2 overflow-x-scroll">
              <span className="rounded-full text-[0.6vw] bg-accent/65 text-accent-foreground px-1.5 py-0.5 tracking-widest">
                Document
              </span>
              <p className=" text-xs tracking-wide whitespace-nowrap">
                {todosItems.description.length > 50
                  ? todosItems.description.slice(0, 30) + "..."
                  : todosItems.description}
              </p>
            </div>
            <div className="col-span-2 flex items-center w-fit gap-2">
              {todosItems.isCompleted ? (
                <Circle size={12} className={`opacity-65`} />
              ) : (
                <Timer size={12} className="opacity-65" />
              )}
              <p className=" text-xs tracking-wide">
                {todosItems.isCompleted ? "Completed" : "Progress"}
              </p>
            </div>
            <div className="col-span-1 flex items-center w-fit gap-2">
              <ArrowUp
                size={12}
                className={`opacity-65 ${todosItems.priority === "High" ? "" : todosItems.priority === "Medium" ? "rotate-90" : "rotate-180"}`}
              />
              <p className=" text-xs tracking-wide">{todosItems.priority}</p>
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <Ellipsis className="xs" />
            </div>
          </div>
        ))
      ) : (
        <EmptyData />
      )}
    </div>
  );
};

export default TodoItem;
