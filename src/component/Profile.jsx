import React from 'react'
import Img from "../img/person1.png" 

import "../styles/profile.css"

const Profile = () => {
  return (
  <div className='outer mb-3 align-center'>
      <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
          <h2>Jack Caldwell-Nichols</h2> 
          <p>React Developer</p> 
          <p>Junior Full Stack Developer</p>
          <div className='d-flex justify-content-around mt-4'>
            <a href='mailto:dev.fullstackjack@gmail.com' target='_blank' title='Drop me an email'>
              <i className="colour fas fa-paper-plane" style={{color:'white', height: '15rem'}}></i>
            </a>
            <a href='https://www.linkedin.com/in/jack-caldwell-nichols-45b313264/' target='_blank' title="Let's connect"> 
                <i className="colour fab fa-linkedin" style={{color:'white'}}></i>
            </a>
            <a href='https://github.com/JackCaldwellNichols' target='_blank' title='Link to some of my projects'>
                <i className="colour fab fa-github" style={{color:'white'}}></i>
            </a>
          </div>
        </div>
        <div className="flip-card-back">
          <img src= {Img} alt="Avatar"  />
        </div>
      </div>
    </div>
  </div>

			
  )
}

export default Profile