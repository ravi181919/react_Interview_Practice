import EmptyData from '@/components/common/EmptyData';
import useTodos from '@/store/slices/todos/useTodos';
import React from 'react'

const AllTodos = () => {
    const { todos, addTodo, removeTodo, toggleTodoCompletion, editTodo } = useTodos();
  return todos.length > 0 ? (
    <div className=''>
      {todos.map((todo) => (
        <span>{todo.text}</span>
      ))}
    </div>
  ) : (
    <EmptyData />
  )
}

export default AllTodos
