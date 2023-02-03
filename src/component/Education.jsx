import React from 'react'
import { Link } from 'react-router-dom'


const Education = () => {
  return (
    <div className='container mt-3'>
			<div class='card p-3'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					  <div className='row py-2'>
								<div className='col'>Qualification/Certificate</div>
							<div className='col'>Date</div>
                <div className='col'></div>
						</div>
            <div className='row py-2'>
								<div className='col'>Full Stack Web Development Bootcamp, 4GeeksAcademy</div>
								<div className='col'>08/2022 - 01/2023</div>
                <div className='col'>
                { /*<Link to='/details' class='btn btn-primary'>
										  View Certificate
                    </Link> */}
                </div>
						</div>
            <div className='row py-2'>
								<div className='col'>Agile and Scrum Fundamentals, Edx.org</div>
								<div className='col'>10/2022 - 12/2022</div>
                <div className='col'>
                 { /*<Link to='/details' class='btn btn-primary'>
										  View Certificate
                    </Link> */}
                </div>
						</div>
            <div className='row py-2'>
								<div className='col'>Leadership in Global Development, Edx.org</div>
								<div className='col'>10/2022 - 12/2022</div>
                <div className='col'>
                 <Link to='/details' class='btn btn-primary'>
										  View Certificate
                  </Link> 
                </div>
						</div>
            <div className='row py-2'>
								<div className='col mx-autp'>Post Graduate Diploma, Career Guidance and Development, Edinburgh Napier University</div>
								<div className='col'>09/2017 - 06/2018</div>
                <div className='col mx-auto'>
                { /*<Link to='/details' class='btn btn-primary'>
										  View Certificate
                    </Link> */}
                </div>
						</div>
            <div className='row py-2'>
								<div className='col'>BA, Broadcast and Audio Production, University of Abertay Dundee</div>
								<div className='col'>09/2006 - 06/2009</div>
                <div className='col mx-auto'>
                { /*<Link to='/details' class='btn btn-primary'>
										  View Certificate
                    </Link> */}
                </div>
						</div>
						
					</div>
				</div>
			</div>
		
  )
}

export default Education