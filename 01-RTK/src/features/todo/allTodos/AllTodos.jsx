import EmptyData from '@/components/common/EmptyData';
import useTodos from '@/store/slices/todos/useTodos';
import React from 'react'
import TodoItem from './TodoItem';
import AddTask from '@/pages/AddTask';

const AllTodos = () => {
    const { todos, addTodo, removeTodo, toggleTodoCompletion, editTodo, setFilterTodo, undoDelete } = useTodos();
  return (
    <div className='w-full relative p-4 flex flex-col gap-6'>
      <AddTask />
      <TodoItem />
    </div>
  ) 
}

export default AllTodos
