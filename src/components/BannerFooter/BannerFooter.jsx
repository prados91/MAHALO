import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './BannerFooter.css'

import { images } from '../../assets/db.js';

const BannerFooter = () => {

    // Función para obtener imágenes aleatorias
    const getRandomImages = (count) => {
        const shuffled = images.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    // Obtener 4 imágenes para pantallas grandes y 3 para pantallas pequeñas
    const numImages = window.innerWidth < 768 ? 3 : 4;
    
    const randomImages = getRandomImages(4);

    return (
        <Container fluid className="banner-footer-container p-0">
            <Row>
                {randomImages.map((image, index) => (
                    <Col key={index}  md={3} sm={3} xs={3} className='p-0'>
                        <div className="image-container">
                            <img src={`/images/gallery/${image.image}`} alt={`Imagen ${index + 1}`} className="img-fluid" />
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BannerFooter