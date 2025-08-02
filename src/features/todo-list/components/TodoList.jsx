import { useSelector } from "react-redux";
import { selectFilteredTodoList } from "../../todo-list";
import Todo from "./Todo";

export default function TodoList() {
  const filteredTodoList = useSelector(selectFilteredTodoList)
  
  return (
    <div className="grow-1">
      <div className="flex justify-center font-bold mb-2">
        Danh sách việc cần làm
      </div>
      {filteredTodoList.length < 1
        ? "Không có việc cần làm!"
        : filteredTodoList.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
    </div>
  );
}
