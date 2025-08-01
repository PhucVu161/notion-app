import { v4 as idv4 } from "uuid";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../todo-list";
const PRIORITIES = ["High", "Medium", "Low"];

export default function AddTodo() {
  const dispatch = useDispatch();
  const [nameTodo, setNameTodo] = useState("");
  const [priorityState, setPriorityState] = useState("Medium");
  const handleSelect = useCallback(
    (e) => {
      setPriorityState(e.target.value);
    },
    [setPriorityState]
  );


  const handleAddTodo = () => {
    if(nameTodo!=="") {
      dispatch(addTodo({
        id: idv4(),
        name: nameTodo,
        priority: priorityState,
        completed: false,
      }))
      setNameTodo("")
      setPriorityState("Medium")      
    }
  }

  return (
    <div className="flex gap-4">
      <input
        className="flex-auto border-2 border-gray-300 px-2"
        type="text"
        placeholder="Nhập việc cần thêm"
        value={nameTodo}
        onChange={(e) => setNameTodo(e.target.value)}
      />
      <select
        className="p-1 border-2 border-gray-300"
        value={priorityState}
        onChange={(e) => {
          handleSelect(e);
        }}
      >
        {PRIORITIES.map((priority) => (
          <option key={priority} value={priority}>{priority}</option>
        ))}
      </select>
      <button
        className="px-3 py-1 bg-blue-500 text-white active:bg-blue-400"
        onClick={handleAddTodo}
      >
        Thêm
      </button>
    </div>
  );
}
