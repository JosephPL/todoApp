import { useContext } from 'react';
import Input from '../components/Input';
import TaskList from '../components/TaskList';
import { todoContext } from '../context/TodoProvider';


const Active = () => {
  const { tasks } = useContext(todoContext);

  return (
    <div className='container'>
        <Input />
        <div className='task'>
          <ul>
            {tasks.map((task) => {
              return (
                task.complete ||
                
                <TaskList 
                  key={task.id}
                  task={task}
                />
              )
            })
            }
          </ul>
        </div>
    </div>
  )
};

export default Active;