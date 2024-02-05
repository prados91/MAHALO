import React from "react";
import "./Index.css";
import BannerOne from "../BannerOne/BannerOne";
import BannerTwo from "../BannerTwo/BannerTwo";
import IndexItemContainer from "../IndexItemContainer/IndexItemContainer";
import ReviewCardCointaner from "../ReviewCardContainer/ReviewCardCointaner";
import IndexButtonsContainer from "../IndexButtonsContainer/IndexButtonsContainer";

const Index = ({ greeting }) => {
    const title = "Diseños hechos a mano"
    const subtitle = "Utilizamos marcadores de acrilico para darle un estilo unico a cada tabla"
    return (
        <>
            <BannerOne greeting={greeting} />
            <BannerTwo title={title} subtitle={subtitle} />
            <IndexItemContainer />
            <IndexButtonsContainer />
            <ReviewCardCointaner />
        </>
    );
};

export default Index;
