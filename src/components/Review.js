import React from 'react'
import "./Review.css"

export default function Review() {
    return (
    <>
            <div className="review">
                <div className="customereview">
                </div>
                <div className="contact" id="contact">
                    <h1>Give your Feedback</h1>
                    <div className="contactForm">
                        <label htmlFor="name">Name</label>
                        <input type="text"/>
                            <label htmlFor="email">Email</label>
                            <input type="email"/>
                                <label htmlFor="numner">Phone Number</label>
                                <input type="text"/>
                                    <label htmlFor="message">Message</label>
                                    <input type="text" id="message"/>
                                        <input type="submit" value="Send"/>
                                        </div>
                                    </div>
                                </div>
                            </>
                            )
}
