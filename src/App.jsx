import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.jsx';
import IndexContainer from './components/IndexContainer/IndexContainer.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import GalleryContainer from './components/GalleryContainer/GalleryContainer.jsx';
import Faqs from './components/Faqs/Faqs.jsx'
import Footer from './components/Footer/Footer.jsx';

function App() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<IndexContainer greeting={'MAHALO'} subGreeting={'Desafiando el balance'} />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/gallery" element={<GalleryContainer />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route exact path='*' element={<h1> 404 NOT FOUND </h1>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;