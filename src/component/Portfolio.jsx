import React from 'react'
import ReactPlayer from 'react-player'


const Portfolio = () => {
  return (
    <div className='container mt-3'>
    <div className='card p-3'>
      <div className='card-content row' style={{height: '300px'}}>
        <div className='col'>
          <ReactPlayer url={'https://youtu.be/r1dMMWGrqr4'} width="100%" height="100%" controls />
         </div>
         <div className='col'>
            <h5>
              <strong>
                E-Commerce clothing website
              </strong>
            </h5>
            <ul>
              <li>
                <p>E-commerce page offering a range of items, built with React JS and Google Firebase, with sign in / sign out funtionality along with Google PopUp. </p>
              </li>
            </ul>
         </div>
      </div>
      </div>
      <div className='card p-3 mt-4'>
      <div className='card-content row' style={{height: '300px'}}>
        <div className='col'>
          <ReactPlayer url={'https://www.youtube.com/watch?v=QYOxmoWZomU'} width="100%" height="100%" controls />
         </div>
         <div className='col'>
            <h5>
              <strong>
                Full Stack Blog Website
              </strong>
            </h5>
            <ul>
              <li>
                <p>Blog website built with React Js for front end, NodeJS for back end with MySql, with JWT for user authentication. </p>
              </li>
              <li>
              <p>Integrating sign up, sign in and sign out functionality, and possibility for users to create, edit and delete content, upload pictures and profile pictures.</p>
              </li>
            </ul>
         </div>
      </div>
      </div>
      <div className='card p-3 mt-4'>
      <div className='card-content row' style={{height: '300px'}}>
        <div className='col'>
          <ReactPlayer url={'https://www.youtube.com/watch?v=za7GsO6tKX8'} width="100%" height="100%" controls />
         </div>
         <div className='col'>
            <h5>
              <strong>
                Full Stack Movie Application
              </strong>
            </h5>
            <ul>
              <li>
                <p>Final project in 4GeeksAcademy Full Stack Software Development bootcamp.</p>
              </li>
              <li>
                <p>Fully responsive Movie application built with ReactJS for the front end, Python/Flask and SQLAlchemy for the back end, with JWT for user authentication and using The Movie Database and Google for API calls.</p>
              </li>
              <li>
                <p>Includes user sign up, sign in and sign out functionality, user profile and edit profile, search and filter movies, play trailers, user lists of favourite films, plus dark/light mode. </p>
              </li>
            </ul>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Portfolio