import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import './Item.css';

const Item = ({ id, title, image, card, cardMobile }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen); // Toggle entre true y false
    };

    const [isMobile, setMobile] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="col-10 col-sm-6 col-md-6 col-lg-3 card-item-container">
            <div className="card card-custom">
                <img
                    src={`/images/products/${image}`}
                    alt={title}
                    className="card-img-top"
                    onClick={toggleModal} // Usando toggleModal para abrir/cerrar el modal
                />
                <div className="card-body">
                    <Popup
                        trigger={<button type='button' className="popup_btn btn"><strong>{title}</strong></button>}
                        modal
                        nested
                        overlayStyle={{ background: 'rgba(0, 0, 0, 0.8)' }}
                        contentStyle={{
                            width: '90%',
                            maxWidth: '90%',
                            height: '90%',
                            overflow: 'auto',
                            margin: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        open={modalOpen}
                        onClick={toggleModal}
                    >

                        <div className="image-container">
                            <button className="close-button" onClick={toggleModal}>X</button>
                            {!isMobile ?
                                <img src={`/images/products/${card}`} alt={title} className="modal-image" onClick={toggleModal} />
                                : <img src={`/images/products/${cardMobile}`} alt={title} className="modal-image" onClick={toggleModal} />}
                        </div>
                    </Popup>
                </div>
            </div>
        </div>
    );
}

export default Item;
