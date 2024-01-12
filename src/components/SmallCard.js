import React from 'react'
import "./SmallCard.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const SmallCard = (props) => {
    return (
        <div>
            <div className="smallcard" style={{"width": "18rem"}}>
                <img src={props.imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <Link to={`/project/${props.identification}`} className="btn btn-primary">Know More</Link>
                </div>
            </div>
        </div>
    )
}

export default SmallCard
