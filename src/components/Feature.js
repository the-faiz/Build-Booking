import React from 'react'
import "./Feature.css"

const feature = (props) => {
    return (
            <div className="content">
                <div class="column-1">
                    <div className="developer">
                        <img src={props.imagebuilder} className='imagebuilder' alt="" />
                        <div className='content2'> 
                            <h4 className='mb-0'>{props.name}</h4>
                            <a className="mt-0" href='#'>Discover</a>
                        </div>
                    </div>
                    <div className="container">
                    <h2 className='mt-4'>{props.projectnumber} Projects</h2>
                    <p className='my-0'>In Pune, Mumbai, Gurgao and More</p>
                    <p>Starting From: <b>{props.price} Ownwards</b></p>
                    </div>
                    <button className='btn btn-success'>Contact Now</button>

                </div>
                <div class="column-2">
                    <img src={props.imagebuilding} alt="" />
                </div>
            </div>
    )
}

export default feature

// "https://housing-images.n7net.in/0b8ad14c/3e1bd5acb25d93b97a562c97ee0074a3/v1/medium.jpg"
