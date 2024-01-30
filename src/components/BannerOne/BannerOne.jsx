import React from "react";
import "./BannerOne.css";

const BannerOne = ({ greeting }) => {
    return (
        <div className="bg-image">
            <div className="contenedorTitulos">
                <h1>{greeting}</h1>
                <h2>Subtítulo</h2>
                <button className="bannerOne_button">Quiero mi tabla</button>
            </div>
        </div>
    );
};

export default BannerOne;
