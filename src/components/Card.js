import React from 'react'
import "./Card.css"
import Rera from './Rera'
import Stars from './Stars'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="image">
          <img src={props.imageURL} alt="Error" />
        </div>
        
        <div className="Rera mx-2 mt-2 mb-0">
        <Rera/>
          <p className="mb-0 mx-2">Rating {props.rating}</p>
          <div className="rating-stars">
            <Stars rating={props.rating}/>  
          </div>
         </div>
        <h4 className="mt-0 mb-0 mx-2">{props.title}</h4>
        <p className="mx-2 mb-0">{props.location}</p>
        <p className="mx-2 mb-0">Builders: <b>{props.builder}</b></p>
        <p className='mx-2 mb-0'>Strating From <b>${props.price}</b></p>
        <p className='mx-2'>Avaibility: <b>2,3,4 BHK</b></p>

        <div className='container'>
        <Link to={`/project/${props.identification}`} className="Kmore bg-success text-light">
            Know More
          </Link>
        </div>

        


      </div>
    </div>
  )
}

export default Card
