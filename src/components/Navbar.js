import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title} &nbsp;<i class="fal fa-abacus"></i></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link aboutus me-2" aria-current="page" to="/aboutus">About Word County</Link>
        </li>

        <li className="nav-item ">
        <div className="form-check form-switch mt-2">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label text-white" for="flexSwitchCheckDefault">{props.dtext}</label>
        </div>
        </li>
        
      </ul>
    </div>
  </div>
</nav> 
    </>
  )
}

Navbar.defaultProps = {
  title: "Set your company's title here"
}

export default Navbar
