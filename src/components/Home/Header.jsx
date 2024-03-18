import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMyContext } from '../../CreateContext'

const Header = () => {
  const navRef = useRef()
  const { setLoading,activeItem,setActiveItem } = useMyContext()
  
  const navbarHandler = () => {
    navRef.current.classList.toggle("show")
  }

  const navModal = (item) => {
    navRef.current.classList.remove("show")
    setActiveItem(item)
    setLoading(true)
  }
  return (
    <header>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <a  ><img src="images/logo.png" alt="#" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <nav className="navigation navbar navbar-expand-md navbar-dark ">
                <button onClick={navbarHandler} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div ref={navRef} className="collapse navbar-collapse " id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${activeItem === "Home" ? "active" : ""}`}>
                      <Link className="nav-link" to="/" onClick={() => navModal("Home")}   > Home</Link>
                    </li>
                    <li className={`nav-item ${activeItem === "About" ? "active" : ""}`} >
                      <Link className="nav-link" to="/about" onClick={() => navModal("About")}  >About</Link>
                    </li>
                    <li className={`nav-item ${activeItem === "Furnitures" ? "active" : ""}`}>
                      <Link className="nav-link" to="/furnitures" onClick={() => navModal("Furnitures")} >Furnitures</Link>
                    </li>
                    <li className={`nav-item ${activeItem === "Testimonial" ? "active" : ""}`}>
                      <Link className="nav-link" to="/testimonial" onClick={() => navModal("Testimonial")}   >Testimonial</Link>
                    </li>
                    <li className={`nav-item ${activeItem === "Contact" ? "active" : ""}`}>
                      <Link className="nav-link" to="/contact" onClick={() => navModal("Contact")}   >Contact Us</Link>
                    </li>
                    <li className="nav-item d_none">
                      <Link className="nav-link" href="#"><i className="fa fa-user-circle padd_right" aria-hidden="true" />Login/Register</Link>
                    </li>
                    <li className="nav-item d_none">
                      <Link className="nav-link" href="#"><i className="fa fa-search" aria-hidden="true" /></Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header