import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {FiDribbble} from 'react-icons/fi'
function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href='' target='_blank'><BsLinkedin /></a>
        <a href='' target='_blank'><AiFillGithub /></a>
        <a href='' target='_blank'><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials