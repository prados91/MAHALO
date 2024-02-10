import { useState } from 'react'
import React from 'react'
import Modal from '../Modal/Modal'
import './Item.css'

const Item = ({ id, title, image, card }) => {

    return (

        <div className="col-10 col-sm-6 col-md-6 col-lg-3 card-item-container">
            <div className="card card-custom" >
                <img src={`/images/products/${image}`}
                    alt={title}
                    className="card-img-top" />
                <div className="card-body">
                    <Modal card={card} title={title} />
                </div>
            </div>
        </div>
    )
}

export default Item

/*
<div className="col-10 col-sm-6 col-md-6 col-lg-3 card-item-container">
            <div className="card card-custom" onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}>
                <img src={isHovered ? `/images/products/${image[1]}` : `/images/products/${image[0]}`} alt={title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                </div>
            </div>
        </div >

*/