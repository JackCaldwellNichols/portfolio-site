import React from 'react'
import ReactPlayer from 'react-player'


const Portfolio = () => {
  return (
    <div className='container mt-3'>
    <div className='card p-3'>
      <div className='card-content row' style={{height: '500px'}}>
        <div className='col-lg-6 col-md col-sm-1 p1'>
          <ReactPlayer url={'https://www.youtube.com/watch?v=NwjV1N7gK7k'} width="100%" height="100%" controls />
         </div>
         <div className='col-lg-6 col-md col-sm-1 p1 mt-2'>
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
       <div className='card p-3'>
      <div className='card-content row' style={{height: '500px'}}>
        <div className='col-lg-6 col-md col-sm-1 p1'>
          <ReactPlayer url={'https://www.youtube.com/watch?v=bBBA7Jh0l3w'} width="100%" height="100%" controls />
         </div>
         <div className='col-lg-6 col-md col-sm-1 p1 mt-2'>
            <h5>
              <strong>
                Full-Stack Social-Media Website
              </strong>
            </h5>
            <ul>
              <li>
                <p>Full stack social media website, built with ReactJs and Node/Express JS and MySql. Includes sign up, login, profile pages, home page where user can see their posts and other users posts, edit profile option, add/remove comment, add/remove post, among other functionalities.  </p>
              </li>
            </ul>
         </div>
      </div>
      </div>
      <div className='card p-3 mt-4'>
      <div className='card-content row' style={{minHeight: '500px', overflow: 'scroll'}}>
        <div className='col-lg-6 col-md col-sm-1 p1'>
          <ReactPlayer url={'https://www.youtube.com/watch?v=KZCj38757XE'} width="100%" height="100%" controls />
         </div>
         <div className='col-lg-6 col-md col-sm-1 p1 mt-2'>
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
      <div className='card-content row' style={{height: '500px'}}>
        <div className='col-lg-6 col-md col-sm-1 p1'>
          <ReactPlayer url={'https://www.youtube.com/watch?v=za7GsO6tKX8'} width="100%" height="100%" controls />
         </div>
         <div className='col-lg-6 col-md col-sm-1 p1 mt-2'>
            <h5>
              <strong>
                Full Stack Movie Application
              </strong>
            </h5>
            <ul>
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