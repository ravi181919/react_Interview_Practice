import { createSelector } from "@reduxjs/toolkit";

const selectTodoState = (state) => state.todos;

export const todosSelector = createSelector(
  selectTodoState,
  (todosState) => todosState.todos
);

export const todoFilterSelector = createSelector(
  selectTodoState,
  (todosState) => todosState.filterStatus
);

export const todosSortBySelector = createSelector(
  [todosSelector, todoFilterSelector],
  (todos, filterStatus) => {
    switch (filterStatus) {
      case "completed":
        return todos.filter((t) => t.isCompleted);
      case "active":
        return todos.filter((t) => !t.isCompleted);
      case "all":
      default:
        return todos;
    }
  }
);

