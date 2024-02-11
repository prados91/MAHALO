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