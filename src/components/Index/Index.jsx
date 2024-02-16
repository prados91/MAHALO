import BannerOne from "../BannerOne/BannerOne";
import BannerTwo from "../BannerTwo/BannerTwo";
import IndexItemContainer from "../IndexItemContainer/IndexItemContainer";
import ReviewCardCointaner from "../ReviewCardContainer/ReviewCardCointaner";
import IndexButtonsContainer from "../IndexButtonsContainer/IndexButtonsContainer";
import CarrouselIndex from "../CarrouselIndex/CarrouselIndex.jsx";
import "./Index.css";
import BannerFooter from "../BannerFooter/BannerFooter.jsx";

const Index = ({ greeting, subGreeting }) => {
    const title = "Tablas de equilibrio hechas a mano"
    const subtitle = "Elegí el mejor diseño para vos!"
    return (
        <>
            <BannerOne greeting={greeting} subGreeting={subGreeting} />
            <BannerTwo title={title} subtitle={subtitle} />
            <IndexItemContainer />
            <IndexButtonsContainer />
            <ReviewCardCointaner />
            <BannerFooter />
        </>
    );
};

export default Index;