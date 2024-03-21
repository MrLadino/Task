import React from 'react'
import './Tasks.css'

export const Tasks = () => {
  return (
    <> 
        <div className='TaskZone'>
                <h2 className='AlertTask'>Usted Tiene 2 Tareas Pendientes</h2>
            </div>
            <hr />
            <div className='filterTasks'>
                <div className="options">
                    <label for="options">Filtrar:</label>
                    <select id="options">
                        <option value="opcion1">Todas Las tareas</option>
                        <option value="opcion2">Pendientes</option>
                        <option value="opcion3">Resueltas</option>
                    </select>
            </div>

            <ul className='Ruby'>
                <div className='Auxiliar'>
                    <div className='ContenedorTasks'>
                        <div className='ColorTask'></div>
                        <div className='TittleTask'><h5>Hola bb</h5></div>
                        <div className='TetxtTask'><p>Xq tan solita?</p></div>
                        <input className='ChexboxTask' type="checkbox" name="Cajitica" id="" />
                    </div>
                </div>
            </ul>
        </div>
    </>
  )
}
