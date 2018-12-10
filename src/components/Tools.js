import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);


const Tools = () =>{
    return(
      <div>
      <h3> Tools I Love: </h3>
      <ul className='icon-list'>
        <li><FontAwesomeIcon icon={['fab', 'js-square']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'react']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'aws']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'node']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'npm']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'git-square']} /></li>
        <li><FontAwesomeIcon icon={['fab', 'sass']} /></li>
      </ul>
      </div>
    )
  }
   
  export default Tools