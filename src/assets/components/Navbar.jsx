import React from 'react'
import logo from '../images/logo.png'
import '../styles/css/navbar/navbar.css'


function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <div className="container">
          <div className="content">
            <div className="image">
              <img src={logo} alt="logo" loading='lazy'/>
            </div>
            <div className="middle">
              <a href="#" className='active'>Home</a>
              <a href="#" >About</a>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Honeymoon packages</a></li>
                  <li><a className="dropdown-item" href="#">Tours packages</a></li>
                  <li><a className="dropdown-item" href="#">Musical Events</a></li>
                  <li><a className="dropdown-item" href="#">Build Package</a></li>
                </ul>
              </li>
              <a href="#" >Upcoming packages</a>
            </div>
            <div className="right">
              <button className="btn btn-primary mobile-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg></button>
              <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"><img src={logo} alt="logo" loading='lazy'/></h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
                </div>
                <div className="offcanvas-body">
                  <div className="middle">
                    <a href="#" className='active'>Home</a>
                    <a href="#" >About</a>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Honeymoon packages</a></li>
                      <li><a className="dropdown-item" href="#">Tours packages</a></li>
                      <li><a className="dropdown-item" href="#">Musical Events</a></li>
                      <li><a className="dropdown-item" href="#">Build Package</a></li>
                    </ul>
                    </li>
                    <a href="#" >Upcoming packages</a>
                  </div>
                </div>
              </div>
              <button className='buttonHover'>Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
