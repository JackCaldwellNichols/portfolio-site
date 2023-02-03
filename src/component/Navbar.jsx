import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.css"

const Navbar = () => {
 

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
        <div>
            <Link to="/" className='navbar-brand'>
                <span >Jack Caldwell-Nichols</span>
            </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <Link to="/skills" className="nav-item">
            <span className="nav-link ms-3" aria-current="page" href="#">Skills</span>
          </Link>
          <Link to = "/experience" className="nav-item">
            <span className="nav-link ms-3" href="#">Experience</span>
          </Link>
          <Link to = "/education" className="nav-item">
            <span className="nav-link ms-3" href="#">Education</span>
          </Link>
          <Link to = "/portfolio" className="nav-item">
            <span className="nav-link ms-3" href="#">Portfolio</span>
          </Link>
        </ul>
        {theme === 'light' ? (
          <button className='nav-item ms-3' onClick={toggleTheme}><i className="far fa-moon"></i></button> 
        ):(
          <button className='nav-item ms-3' onClick={toggleTheme}><i className="far fa-sun"></i></button> 
        )}
      </div>
    </div>
    
  </nav>
  )
}

export default Navbar