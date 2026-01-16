import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) ?? [],
  filterStatus: "all", // all, completed, pending
  sortBy: "dateAdded", // dateAdded, priority, dueDate
  undoDelete: null, // To store the last deleted todo for undo functionality
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      /**
       * Algorithm to add a todo:
       * => action.payload will have the new todo object
       * => push the new todo object to the todos array in the state
       * => generate a unique id for the new todo using nanoid
       * => set isCompleted to false by default
       * => set createdAt to current date and time
       */
      state.todos.push({
        id: nanoid(),
        ...action.payload,
        isCompleted: false,
        createdAt: new Date().toISOString(),
        duedate: action.payload.duedate || null, // Default due date to null if not provided
        priority: action.payload.priority ?? "medium", // Default priority to "medium" if not provided (high, medium, low)
      });
    },
    deleteTodo: (state, action) => {
      /* Algorithm to delete a todo: 
        => action.payLoad have the id of the todo to be deleted
        => filter through the todos array and remove the todo with the matching id
      */
      const isTodo = state.todos.find((t) => t.id === action.payload);
      if (isTodo) state.undoDelete = isTodo; // Store the deleted todo for undo functionality
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      /* Algorithm to update a todo: 
        => action.payLoad have the "id" of the todo to be updated and the "updated data"
        => For finding the todo to be updated, use findIndex method on the todos array
        => if todo not found, return "todo not found" message
        => if found, update the todo with the updated date
      */
      const { id, updatedData } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (!todo) return;
      Object.assign(todo, updatedData);
    },
    isCompletedToggle: (state, action) => {
      /**
       * Algorithm to toggle isCompleted status of a todo:
       * => action.payload have the "id" of the todo to be toggled
       * => for finding the todo to be toggled, use findIndex method on the todos array
       * => if todo not found, return "todo not found" message
       * => if found, toggle the isCompleted status of the todo
       */
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (!todo) return;
      todo.isCompleted = !todo.isCompleted;
    },
    undoDeleteTodo: (state) => {
      /**
       * Algorithm to undo the last deleted todo:
       * => check if there is a todo strored in undoDelete
       * => if there, is a todo, push it back to the todos array
       * => set undoDelete to null after restoring
       */
      if (state.undoDelete) {
        state.todos.push(state.undoDelete);
        state.undoDelete = null;
      }
    },
    setFilterTodo: (state, action) => {
      /**
       * Algorithm to set the filter status:
       * => action.payload will have the filter status (all, completed, pending)
       * => set the filterStatus in the state to the action.payload
       */
      state.filterStatus = action.payload;
    },
    setPriority: (state, action) => {
      /**
       * Algorithm to set the prioity of task or project
       * => action.payload will have priority (High, Low, Medium) and id of todo
       * => according to id of todo, set the priority in the state to the action,payload
       */
      const { id, priority } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (!todo) return;
      todo.priority = priority;
    },
  },
});
export const {
  addTodos,
  deleteTodo,
  updateTodo,
  isCompletedToggle,
  setFilterTodo,
  undoDeleteTodo,
  setPriority
} = todosSlice.actions;
export default todosSlice.reducer;
