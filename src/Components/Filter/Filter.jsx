import React from 'react'
import './'


export const Filter = () => {
  return (
    <div className='CreateTaskZone'>
        <h2 className='TittleInput'> Título De La Tarea:</h2>
        <input type="text" placeholder="Título de la tarea" />
        <h2 className='TittleInput'> Descripción De La Tarea:</h2>
        <input type="text" placeholder="Descripción de la tarea" />
        <button>Crear</button>
    </div>
  )
}

 
