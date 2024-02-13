import React from "react";
import BannerOne from "../BannerOne/BannerOne";
import BannerTwo from "../BannerTwo/BannerTwo";
import IndexItemContainer from "../IndexItemContainer/IndexItemContainer";
import ReviewCardCointaner from "../ReviewCardContainer/ReviewCardCointaner";
import IndexButtonsContainer from "../IndexButtonsContainer/IndexButtonsContainer";
import "./Index.css";

const Index = ({ greeting, subGreeting }) => {
    const title = "Diseños hechos a mano"
    const subtitle = "Utilizamos marcadores de acrílico para darle un estilo único a cada tabla"
    return (
        <>
            <BannerOne greeting={greeting} subGreeting={subGreeting} />
            <BannerTwo title={title} subtitle={subtitle} />
            <IndexItemContainer />
            <IndexButtonsContainer />
            <ReviewCardCointaner />
        </>
    );
};

export default Index;
