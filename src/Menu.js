import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <ul className='navbar'>
      <li><a href='#home'>Home </a></li>
      <li><a href='#about'>About </a></li>
      <li><a href="#blogposts">Blog Posts</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  )
}

export default Menu
