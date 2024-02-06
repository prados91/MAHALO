import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.jsx';
import IndexContainer from './components/IndexContainer/IndexContainer.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import GalleryContainer from './components/GalleryContainer/GalleryContainer.jsx';
import Faqs from './components/Faqs/Faqs.jsx'
import Footer from './components/Footer/Footer.jsx';

/*import './App.css'*/

function App() {

    return (
        <BrowserRouter>
            <div className='App' style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<IndexContainer greeting={'MAHALO'} subGreeting={'Desafiando el balance'} />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/gallery" element={<GalleryContainer />} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route exact path='*' element={<h1> 404 NOT FOUND </h1>} />
                </Routes>
                <div>

                    <Footer />
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App;

/*<div className='App'>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<IndexContainer greeting={'MAHALO'} />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/gallery" element={<GalleryContainer />} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route exact path='*' element={<h1> 404 NOT FOUND </h1>} />
                </Routes>
                
                <Footer />
            </BrowserRouter>

        </div>
*/ 