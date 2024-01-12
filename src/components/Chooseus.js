import React from 'react'
import "./Chooseus.css"


const Chooseus = () => {
  return (
    <div className='container'>
        <div className="choose">
            <h1>Why Choose HireHub?</h1>
            <p>Unlimited Benefits</p>
            <div className="d-flex item-container">
              <div className="item1 item">
                  <h4 className=''>Featured Collections</h4>
              </div>
              <div className="item2 item">
                  <h4 className=''>Verified Documents</h4>
              </div>
              <div className="item3 item">
                  <h4 className=''>24X7 Support</h4>
              </div>
            </div>
            <button className='btn btn-danger mybutton'><a href="/reviews">Find What Others Say</a></button>
            <button className='btn btn-success mybutton'><a href="/">Explore Now</a></button>
        </div>
    </div>
  )
}

export default Chooseus
