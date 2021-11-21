import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
         <div className="container-fluid footer-wrap">
<div class="container">
  <footer class="row row-cols-5 py-5">
    <div class="col-2">
      <Link to="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none footer-image">
       {/* <img src="./images/a.jpg" alt="..."className="bi me-2"/> */}
       <i class="fab fa-accessible-icon text-light fs-1"></i>
      </Link>
      <p class="text-light">&copy; 2021</p>
    </div>

    <div class="col me-3 text-light">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">Home</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">Features</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">Pricing</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">FAQs</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">About</Link></li>
      </ul>
    </div>

    <div class="col me-3 text-light">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">Home</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">Features</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">Pricing</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">FAQs</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">About</Link></li>
      </ul>
    </div>

    <div class="col text-light">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2 text-light"><Link to="#" class="nav-link p-0 text-light">Home</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">Features</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">Pricing</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">FAQs</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-light">About</Link></li>
      </ul>
    </div>
  </footer>
</div>
</div> 
        </>
    )
}

export default Footer
