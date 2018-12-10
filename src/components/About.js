import React from 'react'
import Tools from './Tools'
import me from '../assets/img/me.jpeg'

const About = () =>{
  return(
    <div id='about' className='info'>
      <h1>ABOUT</h1>
      <p>I am a developer specialising in Front End technologies. I'm passionate about 
          constantly learning new skills and expanding my knowledge.
      </p>
      <div className="paddedBox">
        <div className="diamond">
          <div className="d1">
            <img src={me} alt="Nicole Cashen" />
          </div>
        </div>
      </div>
      <Tools />
    </div>
  )
}
 
export default About

