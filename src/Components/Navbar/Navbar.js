import React from 'react'
import './Navbar.css'

import { 
  Link
 } from "react-router-dom";

export const Navbar = () => {


  return (
    <>
        <nav className="navbar navbar-expand-lg fixed-top" id='navBackground'>
        <div className="container-fluid">
            
            <Link className="navbar-brand" to="/"> <small>Sayyami Shah <span className='logo'>  DesignStudio </span> </small> </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="btn-sm text-xs">...</span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-4">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Work</Link>
                </li>
                {/* <li className="nav-item">
                <Link className="nav-link" to="/achivements">Achievements</Link>
                </li> */}
            </ul>
            </div>

        </div>
        </nav>
    </>
  )
}

//css code to give soft shadow bottom?


