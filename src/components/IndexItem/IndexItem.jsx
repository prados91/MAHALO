import React from 'react'
import './IndexItem.css'

const IndexItem = ({ id, title, image }) => {
    return (
        <div className="col-10 col-sm-6 col-md-4 col-lg-4 card-item-container">
            <div className="card card-custom ">
                <img src={`/images/products/${image[0]}`} alt={title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                </div>
            </div>
        </div >

    )
}

export default IndexItem