import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './About'
import BlogPosts from './BlogPosts'
import Contact from './Contact'
import Header from './Header'
 
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