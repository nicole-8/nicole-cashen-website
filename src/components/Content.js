import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './Content blocks/About'
import BlogPosts from './Content blocks/BlogPosts'
import Contact from './Content blocks/Contact'
import Header from './Header/Header'
 
const Content = () => {
    return (
      <div>
          <Header />
          <About />
          <BlogPosts />
          <Contact />
      </div>  
    )
  }
 
export default Content