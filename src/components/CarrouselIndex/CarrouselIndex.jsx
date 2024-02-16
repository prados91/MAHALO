import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './styles.module.css';

const images = [
  '/images/carousel/0001.jpg',
  '/images/carousel/0002.jpg',
  '/images/carousel/0003.jpg',
  '/images/carousel/0004.jpg',
  '/images/carousel/0005.jpg',
  '/images/carousel/0006.jpg',
  '/images/carousel/0007.jpg',
  '/images/carousel/0008.jpg',
  '/images/carousel/0009.jpg',
  '/images/carousel/0010.jpg',
  '/images/carousel/0011.jpg',
  '/images/carousel/0012.jpg',
  '/images/carousel/0013.jpg'
];

const CarrouselIndex = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel dynamicHeight="true" showStatus="false" showIndicators="false" showThumbs="false">
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} className={styles.carouselImage} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarrouselIndex;


