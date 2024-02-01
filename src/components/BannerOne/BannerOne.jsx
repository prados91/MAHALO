import React from "react";
import "./BannerOne.css";
import { Link } from "react-router-dom";

const BannerOne = ({ greeting }) => {
    return (
        <div className="bg-image">
            <div className="contenedorTitulos">
                <h1>{greeting}</h1>
                <h2>Subtítulo</h2>
                <Link to="/category/balanceboard">
                    <button className="bannerOne_button">Quiero mi tabla</button>
                </Link>
            </div>
        </div>
    );
};

export default BannerOne;
