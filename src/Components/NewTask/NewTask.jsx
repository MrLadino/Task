import React, { useContext, useRef, useState } from 'react'
import { tasksContext } from '../Context/Context'
import { v4 as uuidv4 } from 'uuid'
import './NewTask.css'


export const NewTask = () => {

    const context = useContext(tasksContext)
    
    const [titleTask, setTitleTask] = useState('')
    const [descriptionTask, setDescriptionTask] = useState('')

    const txtTitle = useRef ('')
    const txtDescription = useRef ('')

    const handleTitleTask = (event) => setTitleTask(event.target.value)
    const handleDescriptionTask = (event) => setDescriptionTask(event.target.value)

    const handleCreateTask = (event) =>{
        event.preventDefault()
        const newTask = {
            id: uuidv4(),
            title: titleTask,
            description: descriptionTask,
            status: false
        }

        context.setTasks([...context.tasks,newTask])
        context.setFilteredTasks([...context.tasks,newTask])

        txtTitle.current.value = ''
        txtDescription.current.value = ''

    }

  return (
    <form className='frm-task'>
        <fieldset className='container2'>
            <label>Titulo de la tarea</label>
            <input ref={txtTitle} onChange={handleTitleTask} id='txt-title' placeholder='' type='text'/>
        </fieldset>
        <fieldset className='container2'>
            <label>Descripcion de la tarea</label>
            <input ref={txtDescription} onChange={handleDescriptionTask} id='txt-description' placeholder='' type='text' maxLength={100}/>
        </fieldset>
        <button onClick={handleCreateTask} className='btn-new-task'>Crear nueva Tarea</button>
    </form>
  )
}
