import React, { useState } from 'react'
import './Gallery.css'

const Gallery = ({ images }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const { id, image } = images
    return (

        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                {images.map((item, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setActiveIndex(index)}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {images.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                    >
                        <img src={`/images/gallery/${item.image}`} alt={item.image} className="img-fluid image_border" />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Gallery
