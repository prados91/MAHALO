import React from 'react'
import { products } from '../../assets/db.js'
import './IndexItemContainer.css'
import IndexList from '../IndexLIst/IndexList.jsx'

const IndexItemContainer = () => {

    const sendToMobile = () => {

        const mensaje = `¡HOLA!\nQuisiera información sobre los diseños!`;
        const numeroDeTelefono = '5491124752671';
        // Construir la URL de WhatsApp
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroDeTelefono}&text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsApp, '_blank');
    }

    return (

        <div className="container text-center d-flex flex-column align-items-center indexItemContainer-container">
            <h2 className="titulo">¡Podes elegir de nuestros diseños!</h2>
            <div className="row no-margin-row" >
                <IndexList productos={products} />
            </div>
            {/* <button className="botonCard" onClick={() => { sendToMobile() }}>
                Quiero saber más
            </button> */}
        </div>
    )
}

export default IndexItemContainer
