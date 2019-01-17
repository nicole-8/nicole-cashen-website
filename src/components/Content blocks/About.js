import React from 'react'
import ToolsList from '../IconList/ToolsList'
import BioImage from '../BioImage/BioImage'
import './content.scss'

const About = () =>{
  return(
    <div id='about' className='info'>
      <h1>ABOUT</h1>
      <p>I am a developer specialising in Front End technologies. I'm passionate about 
          constantly learning new skills and expanding my knowledge.
      </p>
      <BioImage />
      <ToolsList />
    </div>
  )
}
 
export default About

