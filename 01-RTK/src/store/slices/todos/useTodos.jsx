import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodos,
  deleteTodo,
  updateTodo,
  isCompletedToggle,
  setFilterTodo,
  undoDeleteTodo,
} from "./todosSlice";
import { todosSortBySelector } from "./todoFilter";

const useTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSortBySelector);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    addTodo: (todo) => dispatch(addTodos(todo)),
    removeTodo: (id) => dispatch(deleteTodo(id)),
    toggleTodoCompletion: (id) => dispatch(isCompletedToggle(id)),
    editTodo: (id, updatedData) => dispatch(updateTodo({ id, updatedData })),
    undoDelete: () => dispatch(undoDeleteTodo()),
    setFilterTodo: (filter) => dispatch(setFilterTodo(filter)),
  };
};

export default useTodos;
