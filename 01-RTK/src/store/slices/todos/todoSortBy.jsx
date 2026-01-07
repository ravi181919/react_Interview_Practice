import { createSelector } from "@reduxjs/toolkit";

const selectTodoState = (state) => state.todos;

export const todosSelector = createSelector(
  selectTodoState,
  (todosSate) => todosSate.todos
);

export const todosSortBySelector = createSelector(
  todosSelector,
  (todos) => todos.sortBy
);

export const sortByedTodosSeclector = createSelector(
  [todosSelector, todosSortBySelector],
  (todos, sortBy) => {
    todos.sort((currentTodo, nextTodo) => {
      if (sortBy === "dateAdded") {
        // Sort by chronological order of creation
        return new Date(nextTodo.createdAt) - new Date(currentTodo.createdAt);
      } else if (sortBy === "priority") {
        // Sort by level of importance (assumes higher number = higher priority)
        return nextTodo.priority - currentTodo.priority;
      } else if (sortBy === "dueDate") {
        // Sort by upcoming deadline (earliest date first)
        return new Date(currentTodo.dueDate) - new Date(nextTodo.dueDate);
      } else {
        // Fallback if no valid option is provided
        return 0;
      }
    });
  }
);
