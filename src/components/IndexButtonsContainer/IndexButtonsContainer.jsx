import React from 'react'
import './IndexButtonsContainer.css'
import IndexButtons from '../IndexButtons/IndexButtons'

import { phoneNumber } from '../../assets/db.js'

const IndexButtonsContainer = () => {

    const sendToMobile = () => {

        const mensaje = `¡HOLA!\nQuisiera información sobre los diseños!`;
        // Construir la URL de WhatsApp
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsApp, '_blank');
    }
    return (
        // <div className='indexbtn_container container text-center d-flex flex-column align-items-center indexbtn_container'>
        <div className='indexbtn_container'>
            <h2 className='indexbtn_h2'>Junto a cualquiera de nuestros modelos!</h2>
            <IndexButtons />
            <h2 className='indexbtn_h2'>¡O incluso, podes pedir tu tabla personalizada!</h2>
            <button className="index_btnMore" onClick={() => { sendToMobile() }}>
                ¡Quiero mi tabla!
            </button>
        </div>

    )
}

export default IndexButtonsContainer