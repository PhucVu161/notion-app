import React, { useState } from 'react'
import Todo from './Todo';

const initTodoList = [
  {
    id: 1,
    name: "learn react",
    priority: "High",
    completed: true,
  },
  {
    id: 2,
    name: "learn js",
    priority: "Low",
    completed: false,
  },
  {
    id: 3,
    name: "reading english book",
    priority: "Medium",
    completed: false,
  },
]

export default function TodoList() {
  const [todoList, setTodoList] = useState(initTodoList);

  return (
    <div>
      <div className='flex justify-center font-bold mb-2'>Danh sách việc cần làm</div>
      {
        todoList.map((todo)=>(<Todo key={todo.id} todo={todo} setTodoList={setTodoList}/>))
      }    
    </div>
  )
}
