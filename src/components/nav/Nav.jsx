import React from 'react'
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiMessage3Fill } from 'react-icons/ri'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react'
function Nav () {
  const [activNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        href='#'
        onClick={() => setActiveNav('#')}
        className={activNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a href='#experience'
       onClick={() => setActiveNav('#experience')}
       className={activNav === '#experience' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href='#services'
       onClick={() => setActiveNav('#services')}
       className={activNav === '#services' ? 'active' : ''}
       >
        <RiServiceLine />
      </a>
      <a href='#contact'
       onClick={() => setActiveNav('#contact')}
       className={activNav === '#contact' ? 'active' : ''}>
        <RiMessage3Fill />
      </a>
    </nav>
  )
}

export default Nav
