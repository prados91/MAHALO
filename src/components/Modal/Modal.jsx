import React from 'react'
import Popup from 'reactjs-popup';
import './Modal.css'

const Modal = ({ card, title }) => {
    return (

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
        >
            {close => (
                <img src={`/images/products/${card}`} alt={title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            )}
        </Popup>
    );
}

export default Modal