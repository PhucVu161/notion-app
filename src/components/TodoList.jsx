import { useMemo } from "react";
import Todo from "./TodoComponent";

export default function TodoList({
  todoList,
  setTodoList,
  textSearch,
  statusSelected,
}) {
  const filterTodoList = useMemo(() => {
    return todoList
      .filter((todo) => todo.name.includes(textSearch))
      .filter((todo) => {
        switch (statusSelected) {
          case "All":
            return true;
          case "Completed":
            return todo.completed;
          case "Todo":
            return !todo.completed;
        }
      });
  }, [todoList, textSearch, statusSelected]);
  return (
    <div className="grow-1">
      <div className="flex justify-center font-bold mb-2">
        Danh sách việc cần làm
      </div>
      {filterTodoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </div>
  );
}
