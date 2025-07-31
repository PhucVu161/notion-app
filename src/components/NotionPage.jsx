import FilterComponent from "./FilterComponent"
import TodoList from "./TodoList"
import AddComponent from "./AddComponent"

export default function NotionPage() {
  return (
    <div className="flex flex-col justify-between w-[500px] h-[650px] rounded-xl bg-white p-4 shadow-[0px_0px_10px_0px_gray]">
      <FilterComponent/>
      <TodoList/>
      <AddComponent/>      
    </div>
  )
}
