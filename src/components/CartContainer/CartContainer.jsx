import React from 'react'
import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext'

import CartItem from '../CartItem/CartItem'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './CartContainer.css'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

const CartContainer = () => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [cartEmpty, setCartEmpty] = useState(true);

    const { cart, clearItemsFromCart } = useContext(CartContext);


    const toasty = () => {
        toast.error('Se eliminaron todos los productos del carrito', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    }

    const callFunction = () => {
        clearItemsFromCart();
        toasty();
    }

    useEffect(() => {
        setTotalPrice(cart.reduce((acum, item) => acum + item.quantity * item.price, 0));
        setCartEmpty(cart.length === 0);
    }, [cart]);


    const sendToMobile = (data, price) => {

        const mensajes = data.map((item) => {
            const { title, quantity } = item;
            return `Nombre: ${title}, Cantidad: ${quantity}`;
        });

        const mensajeFinal = mensajes.join('\n') + "\n" + `Precio Total: $${price}`;

        let cadena = ""
        if (data.length == 1) {
            cadena = "Quisiera comprar el siguiente producto: " + "\n"
        } else {
            cadena = "Quisiera comprar los siguientes productos: " + "\n"
        }
        const mensaje = `¡HOLA!\n${cadena}${mensajeFinal}`;

        const numeroDeTelefono = '';

        // Construir la URL de WhatsApp
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroDeTelefono}&text=${encodeURIComponent(mensaje)}`;

        window.open(urlWhatsApp, '_blank');

    }

    return (
        <div className="cartContainer">
            <div className="cartContainer__container">
                <h2>Carrito de compras</h2>

                <hr />
                <div className="cartContainer__products">
                    {cartEmpty ? <div>El carrito de compras está vacio!</div> : <CartItem />}
                </div>
                <hr />
                <p className="cartContainer__totalPrice">
                    <b>TOTAL: ${totalPrice}</b>
                </p>
                <hr />
                {!cartEmpty && (
                    <div className="cartContainer__buttons">
                        <button
                            className="cartContainer__btnclearItemsFromCart"
                            onClick={() => { callFunction() }}
                        >
                            Vaciar carrito
                        </button>
                        <Link to="/form" >
                            <button className="cartContainer__btnForm">Finalizar compra</button>
                        </Link>

                        <button
                            className=""
                            onClick={() => { sendToMobile(cart, totalPrice) }}
                        >
                            Whatsapp
                        </button>
                    </div>
                )}
            </div>
            <ToastContainer />
        </div>

    )
}

export default CartContainer

