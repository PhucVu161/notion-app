import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectPrioritiesSelected, selectStatusSelected, selectTextSearch } from "../../filter";
import Todo from "./Todo";

export default function TodoList({
  todoList,
  setTodoList,
}) {
  const textSearch = useSelector(selectTextSearch)
  const statusSelected = useSelector(selectStatusSelected)
  const prioritiesSelected = useSelector(selectPrioritiesSelected)
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
      })
      .filter((todo) =>
        prioritiesSelected < 1
          ? true
          : prioritiesSelected.includes(todo.priority)
      );
  }, [todoList, textSearch, statusSelected, prioritiesSelected]);
  return (
    <div className="grow-1">
      <div className="flex justify-center font-bold mb-2">
        Danh sách việc cần làm
      </div>
      {filterTodoList.length < 1
        ? "Không có việc cần làm!"
        : filterTodoList.map((todo) => (
            <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
          ))}
    </div>
  );
}
