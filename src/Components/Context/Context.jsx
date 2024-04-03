import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

export const tasksContext = createContext();

const tsk = [
  { id: uuidv4(), title: 'Hola', description: 'Andrés',status: false },          
  { id: uuidv4(), title: 'Hay que ', description: 'Hacer esto',status: false },          
  { id: uuidv4(), title: 'Mano nos van ', description: 'A colgar si no ',status: false }          
]

export const TasksProvider = ({children}) =>{

  const [tasks, setTasks] = useState(tsk)
  const [filteredTasks, setFilteredTasks] = useState(tsk)

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
      filteredTasks,
      setFilteredTasks,
      updateTaskStatus
    }}>
      {children}
    </tasksContext.Provider>

  )
}