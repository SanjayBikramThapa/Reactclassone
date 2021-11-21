import React from 'react'
import './header.css';
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <>
    <div className="">
      <div className="header">
        <div className="col-10 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/header">Header</Link>
              </li>
                            <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/body">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/footer">Footer</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      </div>
      </div>
      </div>
    </>
  )
}

export default Header
