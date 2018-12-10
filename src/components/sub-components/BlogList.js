import React from 'react'
import blog1 from '../../assets/img/blog1.png'
const BlogList = () =>{
  return(
    <div className="list-box">
        <a className="blog" href="https://devcop.io/2018/11/29/developing-with-react-and-create-react-app-is-cra-zy-easy-part-one/">
            <img src={blog1} className="thumbnail"></img>
            <div className="title">Developing with React and Create-React-App is CRA-zy easy! Part One</div>
        </a>
    </div>
  )
}
 
export default BlogList