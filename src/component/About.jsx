import React from 'react'
import "../styles/about.css"

const About = () => {
  return (
    <div className='container '>
        <div className='card'>
            <div className='card-content p-3'>
                    <div>
                        <h6><strong>ABOUT ME</strong></h6>
                            <p>
    
                                Recent graduate from Full Stack Web Development bootcamp with 4GeeksAcademy Europe, 
                                seeking opportunities and projects which will help me to deepen and strengthen my knowledge and skills as a web developer, 
                                as well as contribute towards interesting projects and collaborate with other professionals from whom I can learn.
                            </p>
                    </div>
                    <hr></hr>
                    <div>
                        <h6><strong>PERSONAL & CONTACT INFO</strong></h6>
                        <div className='row'>
                            <div className='col'>
                                <ul>
                                    <li className='my-2'><i className="colour fas fa-paper-plane"></i>  web.fullstackjack@gmail.com</li>
                                    <li className='my-2'><i className="colour fab fa-linkedin"></i>  jack-caldwell-nichols-45b313264/</li>
                                    <li className='my-2'><i className="colour fab fa-github"></i>  github.com/JackCaldwellNichols</li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul>
                                    <li className='my-2'><i className="colour fas fa-map-marker"></i>   Madrid, Spain</li>
                                    <li className='my-2'><i className="colour fas fa-mobile-alt"></i>  +34 633 18 28 04</li>
                                    <li className='my-2'><i className="colour fas fa-language"></i>  English, Spanish</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
  )
}

export default About