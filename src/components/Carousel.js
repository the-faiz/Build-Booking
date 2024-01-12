import React from 'react'
import './Carousel.css';
import Feature from './Feature';

export default function Carousel() {
    return (
        <>
            <div className="car-car">
                <div id="carouselExampleInterval" className="carousel carousel-car slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false" data-bs-wrap="true">
                    <div className="carousel-inner carousel-inner-car">
                        <div className="carousel-item carousel-item-car active" data-bs-interval="3000">
                            <Feature imagebuilder="https://housing-images.n7net.in/e0774925/39eb6d030bba91a215368a65d98dfbe1/v0/fs/shubh_nirvana-viman_nagar-pune-shubh_developer.jpg" name="Pride Builders" projectnumber="80" price="75 Lakhs" imagebuilding="https://housing-images.n7net.in/4f2250e8/ccbe5d43d9bfd90ea43e173c853a9efa/v0/fs/venkatesh_erandwane_central-erandwane-pune-shree_venkatesh_buildcon.jpeg" />
                        </div>
                        <div className="carousel-item carousel-item-car" data-bs-interval="3000">
                            <Feature imagebuilder="https://housing-images.n7net.in/0b8ad14c/0422e82d79bbc13a5190b118db34b6c5/v8/medium.jpg" name="Nyati Group" projectnumber="200+" price="50 Lakhs" imagebuilding="https://housing-images.n7net.in/4f2250e8/98a7bee983767b5cd8406fb6d7feca13/v0/fs/nyati_emerald-baner-pune-nyati_group.jpeg" />
                        </div>
                        <div className="carousel-item carousel-item-car" data-bs-interval="3000">
                            <Feature imagebuilder="https://housing-images.n7net.in/0b8ad14c/3e1bd5acb25d93b97a562c97ee0074a3/v1/medium.jpg" name="KOOL HOMES" projectnumber="169" price="10 Lakhs" imagebuilding="https://wallpaperaccess.com/full/2295822.jpg" />
                        </div>
                    </div>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon next-btn" aria-hidden="true"></span>
                        <span className="visually-hidden next-btn">Next</span>
                    </button>
                </div>
            </div></>


    )
}



