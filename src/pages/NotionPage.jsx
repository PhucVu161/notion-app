import FilterTodoList from "../features/filter/FilterTodoList";
import TodoList from "../features/todo-list/components/TodoList";
import AddTodo from "../features/todo-list/components/AddTodo";
import { useState } from "react";
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
];

export default function NotionPage() {
  const [textSearch, setTextSearch] = useState("");
  const [statusSelected, setStatusSelected] = useState("All");
  const [prioritiesSelected, setPrioritiesSelected] = useState([]);
  const [todoList, setTodoList] = useState(initTodoList);

  return (
    <div className="flex flex-col justify-between gap-16 w-[500px] h-[650px] rounded-xl bg-white p-4 shadow-[0px_0px_10px_0px_gray]">
      <FilterTodoList textSearch={textSearch} setTextSearch={setTextSearch} statusSelected={statusSelected} setStatusSelected={setStatusSelected} prioritiesSelected={prioritiesSelected} setPrioritiesSelected={setPrioritiesSelected}/>
      <TodoList todoList={todoList} setTodoList={setTodoList} textSearch={textSearch} statusSelected={statusSelected} prioritiesSelected={prioritiesSelected}/>
      <AddTodo setTodoList={setTodoList} />
    </div>
  );
}
