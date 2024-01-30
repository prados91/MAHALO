import React from 'react'
import { FaStar } from 'react-icons/fa';
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
    const { nombreUsuario, calificacion, review: reviewText } = review;

    return (

        <div className="cardReview">
            <div className="card-body">
                <div className="review">
                    <h5 className="card-title">{nombreUsuario}</h5>
                    <div className="calificacion">
                        {Array.from({ length: calificacion }, (_, index) => (
                            <FaStar className="estrella" key={index} />
                        ))}
                    </div>
                    <p className="card-text">{reviewText}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard