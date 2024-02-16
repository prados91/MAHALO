import BannerOne from "../BannerOne/BannerOne";
import BannerTwo from "../BannerTwo/BannerTwo";
import IndexItemContainer from "../IndexItemContainer/IndexItemContainer";
import ReviewCardCointaner from "../ReviewCardContainer/ReviewCardCointaner";
import IndexButtonsContainer from "../IndexButtonsContainer/IndexButtonsContainer";
import "./Index.css";

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
        </>
    );
};

export default Index;
