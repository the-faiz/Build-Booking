import React from 'react'
import "./Card2.css"
import Stars from "./Stars"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Card2 = (props) => {
  return (
    <>
      <div className="container">
        <div className="card2">
            <div className="col1">
                <p className='my-0 title'><b>{props.title}</b></p>
                <div className="rating mt-0">Rating {props.rating}<Stars rating={props.rating}/></div>

                <div className="builderating">Builder Rating:{props.builder_rating}<Stars rating={props.builder_rating}/></div>

                <p className="my-0">Strating from <b>${props.price}</b></p>
                <p className="my-0" >Marketed by <b>{props.builder}</b></p>
                <button className="btn btn-danger"><Link to={`/project/${props.identification}`}>View Details</Link></button>
            </div>
            <div className="col2"><img src={props.imageURL} alt="" /></div>
        </div>
      </div>
    </>
  )
}

export default Card2
