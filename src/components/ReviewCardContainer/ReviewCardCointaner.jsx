import React from 'react'
import './ReviewCardCointaner.css'
import ReviewCard from '../ReviewCard/ReviewCard';
import { reviews } from '../../assets/db.js';

const ReviewCardCointaner = () => {
    return (
        <div className='reviewCardContainer'>
            {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
            ))}
        </div>
    );
}

export default ReviewCardCointaner