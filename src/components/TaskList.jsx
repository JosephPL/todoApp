import { useContext } from "react";
import { todoContext } from "../context/TodoProvider";

const TaskList = ({task}) => {
  const { completeTask, tasks } = useContext(todoContext)
  return (
    <li>
       <input type='checkbox' onClick={() => completeTask(tasks, task) } className="check" defaultChecked={task.complete}/>
       <p className={task.mark}>{task.desc}</p>
    </li>
  )
};

export default TaskList;