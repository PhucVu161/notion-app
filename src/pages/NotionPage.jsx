import FilterTodoList from "../features/filter/FilterTodoList";
import TodoList from "../features/todo-list/components/TodoList";
import AddTodo from "../features/todo-list/components/AddTodo";

export default function NotionPage() {

  return (
    <div className="flex flex-col justify-between gap-16 w-[500px] h-[650px] rounded-xl bg-white p-4 shadow-[0px_0px_10px_0px_gray]">
      <FilterTodoList />
      <TodoList/>
      <AddTodo />
    </div>
  );
}
