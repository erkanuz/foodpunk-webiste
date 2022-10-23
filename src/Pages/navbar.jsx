import React from 'react'
import '../Styles/navbar.css'

import {GiKnifeFork} from 'react-icons/gi'

const Navbar = () => {
  return (
    <section className="navbar">
      <nav className='navbar_container'>
        <GiKnifeFork className='logo'/>
        <h2 className='n_title'>foodpunk</h2>
      </nav>
    </section>
  )
}

export default Navbar