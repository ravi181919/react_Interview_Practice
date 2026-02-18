import AllTodos from '@/features/todo/allTodos/AllTodos';
import React from 'react'

const Home = () => {
  console.log("hello");
  
  return (
    <div className='flex h-full w-full '>
      <AllTodos />
      {/* <h1 className='border px-4 py-1.5 rounded-md text-xs font-medium'>Home</h1> */}
    </div>
  )
}

export default Home
