import { useContext } from "react";
import { todoContext } from "../context/TodoProvider";
import { GoTrashcan } from "react-icons/go";


const TaskComplete = ({task}) => {
    const { completeTask, tasks, removeTask } = useContext(todoContext)
    return (
      <li className="taskComplete">
         <div>
            <input type='checkbox' onClick={() => completeTask(tasks, task) } className="check" defaultChecked={task.complete}/>
            <p className={task.mark}>{task.desc}</p>
        </div>

        <div>
            <GoTrashcan onClick={() => removeTask(task.id)} />
        </div>
      </li>
    )
};

export default TaskComplete;