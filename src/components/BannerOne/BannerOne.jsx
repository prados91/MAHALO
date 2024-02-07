import React from "react";
import "./BannerOne.css";

import { phoneNumber } from "../../assets/db";

const BannerOne = ({ greeting, subGreeting }) => {

    const sendToMobile = () => {

        const mensaje = `¡HOLA!\nQuisiera saber más sobre las tablas!`;
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsApp, '_blank');
    }
    return (
        <div className="bg-image">
            <div className="contenedorTitulos">
                <h1>{greeting}</h1>
                <h2>{subGreeting}</h2>
                <button className="bannerOne_button" onClick={() => { sendToMobile() }}>Quiero mi tabla</button>
            </div>
        </div>
    );
};

export default BannerOne;
