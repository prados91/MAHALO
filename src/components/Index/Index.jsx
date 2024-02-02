import React from "react";
import "./Index.css";
import BannerOne from "../BannerOne/BannerOne";
import BannerTwo from "../BannerTwo/BannerTwo";
import IndexItemContainer from "../IndexItemContainer/IndexItemContainer";
import ReviewCardCointaner from "../ReviewCardContainer/ReviewCardCointaner";

const Index = ({ greeting }) => {
    return (
        <>
            <BannerOne greeting={greeting} />
            <BannerTwo />
            <IndexItemContainer />
            <ReviewCardCointaner />
        </>
    );
};

export default Index;
