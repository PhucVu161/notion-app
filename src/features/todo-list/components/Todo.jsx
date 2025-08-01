import { useDispatch } from "react-redux";
import { toggleCompleted } from "../../todo-list";
import PriorityComponent from "../../../components/PriorityComponent";

const styleByCompleted = (completed) => {
  return completed ? "line-through opacity-50" : "";
};

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const { id, name, priority, completed } = todo;
  return (
    <div className={`flex justify-between ${styleByCompleted(completed)}`}>
      <div>
        <input className="" type="checkbox" id="completedCheck" checked={completed} onChange={()=>{dispatch(toggleCompleted(id))}}/>
        <label className="ml-2 pointer-events-none select-none" htmlFor="completedCheck">{name}</label>
      </div>
      <PriorityComponent priority={priority}/>
    </div>
  );
}
