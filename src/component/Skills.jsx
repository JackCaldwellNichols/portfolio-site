import React from 'react'

const Skills = () => {
  return (
    <div className='container'>
      <div className="card p-3 mt-3">
        <div className="card-content">
          <h6>
            <strong>PROFESSIONAL SKILLS</strong>
          </h6>
          <div className="row mt-top">
            <div className="col my-1">
              <p>HTML5</p>
              <div className="progress grey lighten-1">
                <div
                  className="progress-bar"
                  style={{ width: '89%', color: "blue"}}
                ></div>
              </div>
            </div>
            <div className="col my-1">
              <p>CSS3</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col my-1">
              <p>JAVASCRIPT</p>
              <div className="progress grey lighten-1">
                <div
                  className="progress-bar"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
            <div className="col my-1">
              <p>REACTJS</p>
              <div className="progress grey lighten-1">
                <div
                  className="progress-bar"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col my-1">
              <p>MySQL</p>
              <div className="progress grey lighten-1">
                <div
                  className="progress-bar"
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
            <div className="col my-1">
              <p>NODE/EXPRESS.JS</p>
              <div className="progress grey lighten-1">
                <div
                  className="progress-bar"
                  style={{ width: '60%', color: "blue" }}
                ></div>
              </div>
            </div>
            
          </div>
          <div className="row mt-top">
            <div className="col my-1">
              <p>PYTHON</p>
              <div className="progress grey lighten-1">
                <div
                  className="progress-bar"
                  style={{ width: '60%', color: "blue"}}
                ></div>
              </div>
            </div>
            <div className="col my-1">
              <p>FLASK/SQLALCHEMY</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col my-1">
              <p>GIT</p>
              <div className="progress grey lighten-1">
                <div
                  className="progress-bar"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
            <div className="col my-1">
              <p>BOOTSTRAP</p>
              <div className="progress grey lighten-1">
                <div
                  className="progress-bar"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="card p-3 mt-3">
        <div className="card-content">
          <h6>
            <strong>SOFT SKILLS</strong>
          </h6>
          <div className="row mt-top">
            <div className="col my-1">
              <p>LEADERSHIP</p>
              <div className="progress grey lighten-1">
                <div
                  className="progress-bar"
                  style={{ width: '80%', color: "blue"}}
                ></div>
              </div>
            </div>
            <div className="col my-1">
              <p>COMMUNICATION</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col my-1">
              <p>COLLABORATION</p>
              <div className="progress grey lighten-1">
                <div
                  className="progress-bar"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
            <div className="col my-1">
              <p>MEETING DEADLINES</p>
              <div className="progress grey lighten-1">
                <div
                  className="progress-bar"
                  style={{ width: '95%' }}
                ></div>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Skills
