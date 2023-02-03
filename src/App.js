import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home.jsx'
import Navbar from './component/Navbar.jsx'
import Skills from './component/Skills.jsx'
import Experience from './component/Experience.jsx'
import Education from './component/Education.jsx'
import Portfolio from './component/Portfolio.jsx'
import Details from "./component/Details.jsx";




const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>    
            <Route path='/' element={<Home />}/>
            <Route path='/skills' element={<Skills />}/>
            <Route path='/experience' element={<Experience />}/>
            <Route path='/education' element={<Education />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/details' element={<Details />}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App
