import React, { useState } from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
    <nav className='nav-wrapper'>
      <ul className='nav-links'>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
      
    </nav>
    <hr
    style={{
      background: '#111',
      color: '#111',
      height: '2px',
    }}
  />
  </>
  )
}

export default NavBar;