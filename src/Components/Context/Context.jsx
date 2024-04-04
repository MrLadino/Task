import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

export const tasksContext = createContext();

const tsk = [
  { id: uuidv4(), title: 'Hacer Aseo', description: 'hora 6AM',status: false },                    
]

export const TasksProvider = ({children}) =>{

  const [tasks, setTasks] = useState(tsk)
  const [filteredTasks, setFilteredTasks] = useState(tsk)
  const [pendingTasks, setPendingTasks] = useState(0)
  const [doneTasks, setDoneTasks] = useState(0);


  const updateTaskStatus = (taskId, newStatus) =>{
    setTasks(prevTask =>
      prevTask.map(task =>
        task.id === taskId ? { ...task, status : newStatus} : task
      )
    );
  }

  return(
    <tasksContext.Provider value={{
      tasks,
      setTasks,
      pendingTasks,
      setPendingTasks,
      doneTasks,
      setDoneTasks,
      filteredTasks,
      setFilteredTasks,
      updateTaskStatus
    }}>
      {children}
    </tasksContext.Provider>

  )
}
