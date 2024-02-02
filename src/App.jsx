import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar.jsx';
import IndexContainer from './components/IndexContainer/IndexContainer.jsx';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import CartContainer from './components/CartContainer/CartContainer.jsx';
import Form from './components/Form/Form.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx';
import GalleryContainer from './components/GalleryContainer/GalleryContainer.jsx';
import Faqs from './components/Faqs/Faqs.jsx'
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

import { CartProvider } from './context/CartContext.jsx';

import './App.css'

function App() {

    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<IndexContainer greeting={'MAHALO'} />} />
                    <Route exact path='/category/:category' element={<ItemListContainer />} />
                    <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartContainer />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/gallery" element={<GalleryContainer />} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route exact path='*' element={<h1> 404 NOT FOUND </h1>} />
                </Routes>
                <Questions/>
                <Footer />
            </BrowserRouter>
        </CartProvider>

    )
}

export default App;