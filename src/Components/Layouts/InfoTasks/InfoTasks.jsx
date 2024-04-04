import React, { useContext, useEffect } from 'react'
import './InfoTasks.css'
import { tasksContext } from '../../Context/Context'



export const InfoTasks = () => {

    const context = useContext(tasksContext)


    useEffect(() => {

        let pending = context.tasks.filter( tasks => tasks.status === false)
        let resolve = context.tasks.filter( tasks => tasks.status === true)

        context.setPendingTasks(pending.length)
        context.setDoneTasks(resolve.length)

    },[context.tasks])

  return (
    <div className='content-infoTasks'>
    <h2 className='info-tasks'>Usted Tiene <span className='task-pending'>{context.pendingTasks}</span> Pendientes y <span className='task-done'>{context.doneTasks}</span> Terminadas</h2>
    </div>
  )
}
