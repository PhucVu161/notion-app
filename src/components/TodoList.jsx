import React, { useState } from 'react'
import Todo from './TodoComponent';

export default function TodoList({todoList, setTodoList}) {
  return (
    <div>
      <div className='flex justify-center font-bold mb-2'>Danh sách việc cần làm</div>
      {
        todoList.map((todo)=>(<Todo key={todo.id} todo={todo} setTodoList={setTodoList}/>))
      }    
    </div>
  )
}
