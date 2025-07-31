import React from "react";

const styleByPriority = (priority) => {
  switch (priority) {
    case "High":
      return "border-red-500 bg-red-100 text-red-500";
    case "Medium":
      return "border-yellow-500 bg-yellow-100 text-yellow-500";
    case "Low":
      return "border-green-500 bg-green-100 text-green-500";
    default:
      return "";
  }
};
const styleByCompleted = (completed) => {
  return completed ? "line-through opacity-50" : "";
};
const handleCheck = (id, setTodoList) => {
  setTodoList((pre)=>{
    return pre.map(todo => {
      return todo.id === id ? {...todo, completed: !todo.completed} : todo
    })
  }) 
}

export default function Todo({ todo, setTodoList }) {
  const { id, name, priority, completed } = todo;
  return (
    <div className={`flex justify-between ${styleByCompleted(completed)}`}>
      <div>
        <input className="" type="checkbox" id={id} checked={completed} onChange={()=>{handleCheck(id, setTodoList)}}/>
        <label className="ml-2 pointer-events-none select-none" htmlFor={id}>{name}</label>
      </div>
      <span className={`border-2 rounded-sm px-2 ${styleByPriority(priority)}`}>
        {priority}
      </span>
    </div>
  );
}
