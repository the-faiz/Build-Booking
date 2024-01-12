import React from 'react'
import "./Box6.css"

const Box6 = () => {
  return (
    <div>
      <div className="box6">
        <div className="qanda">
            <div className="heading d-flex">
                <div>
                <h2>Questions and Answers</h2>
                <p>Get Answers to Your Queries</p>
                </div>
                <div>
                    <button className='btn btn-danger'><h5>Ask Question Now</h5></button>
                </div>
            </div>
            <div className="qapair">
                <div className="qa1">
                    <p className='mt-3'><b>Q: Lorem ipsum dolor sit, amet consectetur adipisicing elit.</b></p>
                    <p>A: Dolores, voluptatum. Lorem ipsum dolor sit amet.</p>
                    <p className='mt-3'><b>Q: Lorem ipsum dolor sit, amet consectetur adipisicing elit.</b></p>
                    <p>A: Dolores, voluptatum. Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Box6
