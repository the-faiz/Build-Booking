import React from 'react'
import "./Box1.css"
import Rera from "./Rera"
import Stars from "./Stars"
const Box1 = (props) => {
    return (
        <div>
            <div className="box1">
                <div className="box1-1">
                    <div className="d-flex align-items-center">
                        <h1 className='mx-2'>{props.title}</h1>
                    </div>
                    <div className="rating mx-3">
                        <p className='d-flex  mb-0'><b>Rating {props.rating}</b><Stars rating={props.rating} /></p>
                        <Rera />
                    </div>
                    <div className="builder_rating mx-3">
                        <p className='d-flex  mb-0 '><b>Builder Rating {props.builder_rating}</b><Stars rating={props.builder_rating} /></p>
                    </div>
                    <div className="builder mx-3">
                        <p className='dflex mb-0'>By <b>{props.builder}</b></p>
                    </div>
                    <div className="location mx-3">
                        <p>{props.location}</p>
                    </div>
                </div>
                <div className="box1-2 mx-2">
                    <div className="price">
                        <h1>${props.price}</h1>
                    </div>
                    <div className="emi my-0">
                        <p className='my-0'><a href="">EMI AVAILABLE</a></p>
                    </div>
                    <div className="avaibility my-0">
                        <p className='my-0'>Avaibility-1,2,3,4 BHK Flats</p>
                    </div>
                    <div className="contactnow">
                        <button className='btn btn-success projectbtn mt-3'>Contact Now</button>
                    </div>
                </div>
                <div className="box1-3 mx-2 my-2">
                    <div className="brochure">
                        <button className="btn btn-danger"><i className="fa-solid fa-download"></i>Brochure</button>
                    </div>
                    <div className="brochure">
                        <button className="btn btn-info my-3"><i className="fa-solid fa-download"></i>Rera Certificate</button>
                    </div>
                    <div className="brochure">
                        <button className="btn btn-success"><i className="fa-solid fa-download"></i>Other Documents</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box1
