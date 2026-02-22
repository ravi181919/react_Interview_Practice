import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown, Ellipsis } from "lucide-react";
const TodoItem = () => {
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
      <div className="grid grid-cols-12 gap-4 items-center w-full bg-accent-foreground/40 rounded-t-md px-2 py-2">
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

      <div className="grid grid-cols-12 gap-4 items-center w-full px-2 py-3 border-b ">
        <div className="flex col-span-2 gap-2 items-center">
          <input type="checkbox" className="h-2.5 w-2.5" />
          <h1 className="text-xs">Task-1819</h1>
        </div>
        <div className="col-span-5 flex items-center gap-1 overflow-x-scroll">
          <span className="rounded-full text-[0.6vw] bg-accent text-accent-foreground px-1.5 py-0.5 tracking-widest">
            Document
          </span>
          <p className=" text-xs tracking-wide whitespace-nowrap">
            {"This is first task to check this todo items".length > 50
              ? "This is first task to check this todo items".slice(0, 30) +
                "..."
              : "This is first task to check this todo items"}
          </p>
        </div>
        <div className="col-span-2 flex items-center w-fit gap-1">
          <span className="rounded-full text-[0.6vw] bg-accent text-accent-foreground px-1 py-px font-medium tracking-widest">
            D
          </span>
          <p className=" text-xs tracking-wide">Completed</p>
        </div>
        <div className="col-span-1 flex items-center w-fit gap-1">
          <span className="rounded-full text-[0.6vw] bg-accent text-accent-foreground px-1 py-px font-medium tracking-widest">
            D
          </span>
          <p className=" text-xs tracking-wide">Highs</p>
        </div>
        <div className="col-span-1 flex items-center justify-center  gap-1">
          <Ellipsis className="xs" />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
