import React from "react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../ui/empty";
import { Button } from "../ui/button";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosCreate } from "react-icons/io";
import { LuListTodo } from "react-icons/lu";

const EmptyData = ({
  emptyTitle = "No Todos Yet",
  emptyDescription = "You haven't created any todos yet. Get started by creating your first todo.",
  btnLeft = "Create Todo",
  btnRight = "Import Todo",
  link = "#",
  linkText = "Learn More",
  oneBtn = false,
  isLearnMore = false,
}) => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon" className={""}>
          <LuListTodo />
        </EmptyMedia>
        <EmptyTitle>{emptyTitle}</EmptyTitle>
        <EmptyDescription className={"opacity-100"}>
          {emptyDescription}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button 
          variant="outline"
          asChild
          >
            <a href="/task">
            {btnLeft} <IoIosCreate />
            </a>
          </Button>
          {oneBtn ? <Button>{btnRight}</Button> : null}
        </div>
      </EmptyContent>
      {isLearnMore ? (
        <Button
          variant="link"
          asChild
          className="text-muted-foreground"
          size="sm"
        >
          <a href={link}>
            {linkText}
            <FiArrowUpRight />
          </a>
        </Button>
      ) : null}
    </Empty>
  );
};

export default EmptyData;
