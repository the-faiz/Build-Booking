import React from 'react'
import "./PremiumFeature.css"

const PremiumFeature = () => {
    return (
        <>
        <div>
                <div class="car-pfeature">
                    <h1>Premium Features</h1>
                    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
                        <div class="carousel-inner">
                            <div class="carousel-item carousel-item-pfeature active" data-bs-interval="3000">
                                <div class="overlay-image overlay-image-pfeature" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://wallpaperaccess.com/full/1137443.jpg') center/cover"}} ></div>
                                <div class="container container-pfeature">
                                    <h1>1st Headline</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iste?</p>
                                    <a href="/subscribe" class="btn btn-lg btn-primary">Subscribe Now</a>
                                </div>
                            </div>
                            <div class="carousel-item carousel-item-pfeature" data-bs-interval="3000">
                                <div class="overlay-image overlay-image-pfeature" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://wallpapercave.com/wp/wp4081410.jpg') center/cover"}} ></div>
                                <div class="container container-pfeature">
                                    <h1>2nd Headline</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iste?</p>
                                    <a href="/subscribe" class="btn btn-lg btn-primary">Subscribe Now</a>
                                </div>
                            </div>
                            <div class="carousel-item carousel-item-pfeature" data-bs-interval="3000">
                                <div class="overlay-image overlay-image-pfeature" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.wallpaperflare.com/static/879/341/215/city-building-skyscraper-clouds-wallpaper.jpg') center/cover"}}></div>
                                <div class="container container-pfeature">
                                    <h1>3rd Headline</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, iste?</p>
                                    <a href="/subscribe" class="btn btn-lg btn-primary">Subscribe Now</a>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
        </div>
        </>
    )
}

export default PremiumFeature
