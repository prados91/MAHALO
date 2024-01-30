import React from 'react'
import './ReviewCardCointaner.css'
import ReviewCard from '../ReviewCard/ReviewCard';

const reviewsHardcodeadas = [
    {
        nombreUsuario: 'Augusto',
        calificacion: 5,
        review: 'Ideal para entrenamiento profesional, versátil y resistente.',
    },
    {
        nombreUsuario: 'Alejandro',
        calificacion: 5,
        review: 'Balance board duradera, mejora equilibrio y fuerza.',
    },
    {
        nombreUsuario: 'Erika',
        calificacion: 5,
        review: 'Perfecta para principiantes, añade diversión a entrenamientos.',
    },
    {
        nombreUsuario: 'Kiara',
        calificacion: 5,
        review: 'Excelente para fitness en casa, diversión y eficacia garantizadas..',
    },
    {
        nombreUsuario: 'Priscila',
        calificacion: 5,
        review: 'Fácil de usar, incluso para novatos; resultados notables.',
    }
];

const ReviewCardCointaner = () => {
    return (
        <div className='reviewCardContainer'>
            {reviewsHardcodeadas.map((review, index) => (
                <ReviewCard key={index} review={review} />
            ))}
        </div>
    );
}

export default ReviewCardCointaner