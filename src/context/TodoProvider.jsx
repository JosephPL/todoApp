import { createContext, useEffect, useState } from "react"

export const todoContext = createContext();

export const TodoProvider = (props) => {

    const [tasks, setTasks] = useState( () => {
        const dataLS = localStorage.getItem('tasks');
        return dataLS ? JSON.parse(dataLS) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks)); 
        console.log('useEffect')
    }, [tasks]);

    const addTask = (desc) => {
        setTasks([...tasks, {desc, complete: false, mark: '', id: Date.now()}]);
    };

    const completeTask = (tasks, task) => {
        const data = tasks.map(item => {
            if(item.id === task.id){
                item.complete ? item.complete = false : item.complete = true;
                item.mark ? item.mark = '' : item.mark = 'line'; 
            }
            return item
        });
        setTasks(data);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const removeCompletedTasks = (tasks) => {
        const uncompletedTasks = tasks.map(item => {
            if(!item.complete){
                return item;
            } 
        })
        setTasks(uncompletedTasks.filter(task => task !== undefined))
    };

    return (
        <todoContext.Provider value={{tasks, addTask, completeTask, removeTask, removeCompletedTasks}}>
            {props.children}
        </todoContext.Provider>
    )
};

