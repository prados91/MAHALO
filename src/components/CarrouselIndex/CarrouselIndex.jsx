import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './styles.module.css';

const CarrouselIndex = ({ images }) => {
    return (
        <div className={styles.carouselContainer}>
            <Carousel dynamicHeight="true" showStatus="false" showIndicators="false" showThumbs="false">
                {images.map((item, index) => (
                    <div key={index}>
                        <img src={`/images/gallery/${item.image}`} alt={`Slide ${index + 1}`} className={styles.carouselImage} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CarrouselIndex;


