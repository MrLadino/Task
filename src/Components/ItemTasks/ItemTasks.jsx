import React, { useContext } from 'react'
import { tasksContext } from '../Context/Context'
import './ItemTasks.css'


export const ItemTasks = ({idTask,content,titleTask}) => {

  const { tasks, updateTaskStatus} = useContext(tasksContext)

  const task = tasks.find( task => task.id === idTask)

  const handleCheckboxChange = () => {
    updateTaskStatus(idTask, !task.status);
  }
  

  return (
    <li id={idTask} className={task.status ? 'item-task checked' : 'item-task'}>
        <div className={task.status ? 'circle-state circle-green' : 'circle-state'}></div>
        <h2>{titleTask}</h2>
        <p>{content}</p>
        <input type="checkbox" checked={task.status} onChange={handleCheckboxChange} />
    </li>
  )
}
