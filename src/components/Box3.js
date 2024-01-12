import React from 'react'
import "./Box3.css"

const Box3 = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide carousel-fade box3" data-bs-ride="carousel">
                <div className="carousel-inner carousel-inner-box3">
                    <div className="carousel-item active carousel-item-box3" data-bs-interval="2000">
                        <img src="https://img.staticmb.com/mbimages/project/popup/2023/02/22/Project-Photo-6-Pride-World-City-Pune-5071988_345_1366.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carousel-item-box3" data-bs-interval="2000">
                        <img src="https://img.staticmb.com/mbimages/project/popup/2023/08/28/Project-Photo-32-Pride-World-City-Pune-5071988_871_1280.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carousel-item-box3" data-bs-interval="2000">
                        <img src="https://img.staticmb.com/mbimages/project/popup/2023/08/28/Project-Photo-31-Pride-World-City-Pune-5071988_1200_1600.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carousel-item-box3" data-bs-interval="2000">
                        <img src="https://img.staticmb.com/mbimages/project/popup/2023/08/28/Project-Photo-29-Pride-World-City-Pune-5071988_1600_1200.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carousel-item-box3" data-bs-interval="2000">
                        <img src="https://img.staticmb.com/mbimages/project/popup/2023/08/28/Project-Photo-28-Pride-World-City-Pune-5071988_1600_1200.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item carousel-item-box3" data-bs-interval="2000">
                        <img src="https://img.staticmb.com/mbimages/project/popup/2023/08/28/Project-Photo-27-Pride-World-City-Pune-5071988_1200_1600.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Box3
