import PriorityComponent from "./PriorityComponent";

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
      <PriorityComponent priority={priority}/>
    </div>
  );
}
