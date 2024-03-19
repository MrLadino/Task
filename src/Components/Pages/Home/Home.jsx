import { Footer } from '../../Layouts/Footer/Footer'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import logo from '../../../assets/LogoRuby.jpg'
import React from 'react'

export const Home = () => {

  // const otherContext = useContext(tasksContext)
  
  // useEffect(() => {
  //   console.log(otherContext.tasks)
  // }, [otherContext.tasks])

  return (
    <>
       <Header>
        <h1 className='FirstTittle'>Lista De Tareas</h1>
        <img className='FirstImg' src={logo} alt="Logo" />
      </Header>

      <Main >
        <div className='CreateTaskZone'>
            <h2 className='TittleInput'> Título De La Tarea:</h2>
            <input type="text" placeholder="Título de la tarea" />
            <h2 className='TittleInput'> Descripción De La Tarea:</h2>
            <input type="text" placeholder="Descripción de la tarea" />
            <button>Crear</button>
        </div>

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

          <div className='showTasks'>
            <ul className='WorkingTask'>
              <li className='Gomex'>
                <div className='espiti'>
                  <a href="">hola</a>
                  <input type="checkbox" />
                </div>
                <div className='espiti'>
                  <a href="">estoy</a>
                  <input type="checkbox" />
                </div>
                <div className='espiti'>
                  <a href="">trbajando</a>
                  <input type="checkbox" />
                </div>
                <div className='espiti'>
                  <a href="">react</a>
                  <input type="checkbox" />
                </div>
              </li>
            </ul>
          </div>
        </div>
    </Main>

    <Footer>
        <h4 className='finalTittle'>Andrés Felipe Ladino Ocampo</h4>
    </Footer>
    </>
  )
}
