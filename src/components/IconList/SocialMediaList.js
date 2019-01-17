import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);


const SocialMediaList = () =>{
    return(
      <div>
      <ul className='icon-list'>
        <li><a href="https://github.com/nicole-8"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
        <li><a href="https://www.linkedin.com/in/nicole-cashen/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
        <li><a href="https://www.meetup.com/members/254156296/"><FontAwesomeIcon icon={['fab', 'meetup']} /></a></li>
      </ul>
      </div>
    )
  }
   
  export default SocialMediaList