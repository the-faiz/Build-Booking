import React from 'react'
import "./Footer.css"


export default function Footer() {
  return (
    <footer>
    <div className="footer-content mt-3">
        <div className="footer-logo">
            <h1>Home Hub</h1>
        </div>
        <div className="footer-links">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="footer-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
    </div>
    <p>&copy; 2023 Home Hub. All rights reserved.</p>
</footer>
  )
}
