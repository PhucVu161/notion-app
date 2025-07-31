import FilterTodoList from "./FilterTodoList"
import TodoList from "./TodoList"
import AddTodo from "./AddTodo"
import { useState } from "react"
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

export default function NotionPage() {
  const [todoList, setTodoList] = useState(initTodoList);

  return (
    <div className="flex flex-col justify-between w-[500px] h-[650px] rounded-xl bg-white p-4 shadow-[0px_0px_10px_0px_gray]">
      <FilterTodoList/>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
      <AddTodo setTodoList={setTodoList}/>      
    </div>
  )
}
