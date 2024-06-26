import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { Footer } from '../../Layouts/Footer/Footer'
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks'
import { ItemTasks } from '../../ItemTasks/ItemTasks'
import { NewTask } from '../../NewTask/NewTask'
import { useContext } from 'react'
import { tasksContext } from '../../Context/Context'
import { InfoTasks } from '../../Layouts/InfoTasks/InfoTasks'
import { FilterTasks } from '../../FilteredTasks/FilteredTasks'





export const Home = () => {

  const context = useContext(tasksContext)
  
  return (
    <>
      <Header/>
      <Main>
      <InfoTasks/>
      <NewTask/>
      <FilterTasks/>
      <ContainerTasks>
        {
          context.filteredTasks.map(task => <ItemTasks key={task.id} idTask={task.id} content={task.description} titleTask={task.title}></ItemTasks>)
        }
      </ContainerTasks>
      </Main>
      <Footer/>
    </>
  )
}
