import useTodos from '@/store/slices/todos/useTodos';
import React from 'react'
import TodoItem from './TodoItem';
import AddTask from '@/pages/AddTask';

const AllTodos = () => {
    const { todos, addTodo, removeTodo, toggleTodoCompletion, editTodo, setFilterTodo, undoDelete } = useTodos();
  return (
    <div className='w-full relative p-4 flex flex-col gap-6'>
      <AddTask />
      {todos.map((t) => (
        <span key={t.id}>{JSON.stringify(t)}</span>
      ))}
      <TodoItem />
    </div>
  ) 
}

export default AllTodos
