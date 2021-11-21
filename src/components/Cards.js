import React from 'react'
import '../header.css';

const Cards = () => {
    return (
        <>
        <div className="container-fluid pb-5 pt-5">
      <div className="card-group">
        <div className="card card-custom">
          <img src="/images/e.jfif" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
      

          </div>
        </div>
        <div className="card card-custom">
          <img src="/images/c.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

          </div>
        </div>
        <div className="card card-custom">
          <div className="image-hover">
          <img src="/images/d.jfif" className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card card-custom">
          <div className="image-hover">
          <img src="/images/d.jfif" className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>   
      </div>
        </>
    )
}

export default Cards
