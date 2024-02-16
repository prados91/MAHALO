import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import './Item.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Item = ({ id, title, image, card, cardMobile }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
        <div className="col-10 col-sm-6 col-md-6 col-lg-3 g-4">
            <div className="card itemCard-custom">
                <img
                    src={`/images/products/${image}`}
                    alt={title}
                    className="itemCard-img-top"
                    onClick={toggleModal} // Usando toggleModal para abrir/cerrar el modal
                />
                <div className="card-body">
                    <Popup
                        trigger={<button type='button' className="btn"><strong>{title}</strong></button>}
                        modal
                        nested
                        overlayStyle={{ background: 'rgba(0, 0, 0, 0.8)' }}
                        contentStyle={{
                            width: '80%',
                            maxWidth: '100%',
                            height: '100%',
                            overflow: 'auto',
                            margin: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        open={modalOpen}
                        onClick={toggleModal}
                    >
                        <div className="itemImage-container">
                            <button className="itemClose-button" onClick={toggleModal}>X</button>
                            {!isMobile ?
                                <img src={`/images/products/${card}`} alt={title} className="itemModal-image" onClick={toggleModal} />
                                : <img src={`/images/products/${cardMobile}`} alt={title} className="itemModal-image" onClick={toggleModal} />}
                        </div>
                    </Popup>
                </div>
            </div>
        </div>
    );
}

export default Item;