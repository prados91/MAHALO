import React from "react";
import "./BannerOne.css";

const BannerOne = ({ greeting }) => {

    const sendToMobile = () => {

        const mensaje = `¡HOLA!\nQuisiera saber más sobre las tablas!`;
        const numeroDeTelefono = '5491124752671';
        // Construir la URL de WhatsApp
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroDeTelefono}&text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsApp, '_blank');
    }
    return (
        <div className="bg-image">
            <div className="contenedorTitulos">
                <h1>{greeting}</h1>
                <h2>Subtítulo</h2>
                <button className="bannerOne_button" onClick={() => { sendToMobile() }}>Quiero mi tabla</button>
            </div>
        </div>
    );
};

export default BannerOne;
