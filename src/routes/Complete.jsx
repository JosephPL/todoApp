import { useContext } from 'react';
import TaskComplete from '../components/TaskComplete';
import { todoContext } from '../context/TodoProvider';
import { GoTrashcan } from "react-icons/go";

const Complete = () => {
  const { tasks, removeCompletedTasks} = useContext(todoContext);

  return (
    <div className='container'> 
        <div className='task'>
          <ul>
            {tasks.map((task) => {
              return (
                !task.complete ||
                <TaskComplete 
                  key={task.id}
                  task={task}
                />
              )
            })
            }
          </ul>
        </div>
        <div className='btnContainer'>
          <button onClick={() => removeCompletedTasks(tasks)}>
            <GoTrashcan />delete all
          </button>
          
        </div>
    </div>
  )
};

export default Complete;