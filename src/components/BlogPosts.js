import React from 'react'
import BlogList from './sub-components/BlogList'
 
const BlogPosts = () =>{
  return(
    <div id="blogposts" className="info grey">
        <h1>Blog Posts</h1>
        <BlogList />
    </div>
  )
}
 
export default BlogPosts