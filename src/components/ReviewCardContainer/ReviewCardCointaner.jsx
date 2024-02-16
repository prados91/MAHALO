import { useState } from 'react';
import './ReviewCardCointaner.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import { reviews } from '../../assets/db.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ReviewCardCointaner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const customArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    fontSize: '1rem',
    color: '#FFA62B',
    cursor: 'pointer',
  };

  return (
    <div className='reviewCardContainer'>
      <div className='carouselReview'>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          selectedItem={currentIndex}
          onChange={index => setCurrentIndex(index)}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...customArrowStyles, left: 0 }}
              >
                <i className="bi bi-chevron-double-left"></i>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...customArrowStyles, right: 0 }}
              >
                <i className="bi bi-chevron-double-right"></i>
              </button>
            )
          }
        >
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              review={review}
              isActive={index === currentIndex}
            />
          ))}
        </Carousel>
      </div>
      <div className='reviewCardsNormal'>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCardCointaner;

