import React from 'react'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Menu = () => {
  return (
    <ul className='navbar'>
      <li><AnchorLink href='#home'>Home </AnchorLink></li>
      <li><AnchorLink href='#about'>About </AnchorLink></li>
      <li><AnchorLink href="#blogposts">Blog Posts</AnchorLink></li>
      <li><AnchorLink href="#contact">Contact</AnchorLink></li>

    </ul>
  )
}

export default Menu
