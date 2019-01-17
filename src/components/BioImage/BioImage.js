import React from 'react'
import me from '../../assets/img/me.jpeg'
import './bioImage.scss'
 
const BioImage = () =>{
  return(
    <div className="padded-box">
        <div className="diamond">
            <div className="d1">
                <img src={me} alt="Nicole Cashen" />
            </div>
        </div>
    </div>
  )
}
 
export default BioImage


