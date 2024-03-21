import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { Filter } from '../../Filter/Filter'
import { Tasks } from '../../Tasks/Tasks'
import { Footer } from '../../Layouts/Footer/Footer'
import React from 'react'


export const Home = () => {


  return (
    <>
      <Header/>
      <Main >
      <Filter/>
      <Tasks/>  
      </Main>
      <Footer/>
    </>
  )
}
