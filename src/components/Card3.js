import React from 'react'
import "./Card3.css"

const Card3 = (props) => {
    return (
        <>
            <div className="container">
                <div className="card3" style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.imageURL}) center/cover`}}>
                    <div className="pnumber hovershow">
                        <h2>180</h2>
                    </div>
                    <p className='hovershow'>Projects</p>
                    <button className="btn btn-danger hovershow">View All</button>
                    <h3 className='hovernotshow'>{props.location}</h3>
                    <p className='hovernotshow'>Wakad,Baner,Kothrud,Ravet, and More</p>
                </div>

            </div>
        </>
    )
}

export default Card3
