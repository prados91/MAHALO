import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './Item.css';

const Item = ({ id, title, image, card }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen); // Toggle entre true y false
    };

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
                        trigger={<button type='button' className="popup_btn btn">{title}</button>}
                        modal
                        nested
                        overlayStyle={{ background: 'rgba(0, 0, 0, 0.8)' }}
                        contentStyle={{
                            width: '80%',
                            maxWidth: '80%',
                            height: '80%',
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
                            <img src={`/images/products/${card}`} alt={title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} onClick={toggleModal} />
                        </div></Popup>
                </div>
            </div>
        </div>
    );
}

export default Item;
