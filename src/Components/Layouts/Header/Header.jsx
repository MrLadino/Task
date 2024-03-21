import React from 'react'
import logo from '../../../assets/LogoRuby.jpg'
import './Header.css'

export const Header = () => {
  return (
    <header>
    <h1 className='FirstTittle'>Lista De Tareas</h1>
    <img className='FirstImg' src={logo} alt="Logo" />
  </header>
  )
}
