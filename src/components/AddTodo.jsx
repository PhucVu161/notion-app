import { v4 as idv4 } from "uuid";
import { useCallback, useId, useState } from "react";
const PRIORITIES = ["High", "Medium", "Low"];

export default function AddTodo({ setTodoList }) {
  const [nameTodo, setNameTodo] = useState("");
  const [priorityState, setPriorityState] = useState("Medium");
  const handleSelect = useCallback(
    (e) => {
      setPriorityState(e.target.value);
    },
    [setPriorityState]
  );
  const addTodo = useCallback(() => {
    setNameTodo("");
    setPriorityState("Medium");
    setTodoList((pre) => [
      ...pre,
      {
        id: idv4(),
        name: nameTodo,
        priority: priorityState,
        completed: false,
      },
    ]);
  });

  return (
    <div className="flex gap-2">
      <input
        className="flex-auto border-2 border-gray-300"
        type="text"
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
          <option value={priority}>{priority}</option>
        ))}
      </select>
      <button
        className="px-3 py-1 bg-blue-500 text-white active:bg-blue-400"
        onClick={addTodo}
      >
        Thêm
      </button>
    </div>
  );
}
