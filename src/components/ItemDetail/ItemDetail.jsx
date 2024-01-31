import React from 'react'
import { useState, useContext, useEffect } from "react"
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {
    const { addItemToCart, itemInCart } = useContext(CartContext);
    const [count, setCount] = useState(1);

    const toastyNew = (count) => {
        toast.success(count == 1 ? 'Producto agregado al carrito' : 'Se agregaron ' + `${count}` + ' productos al carrito', {
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

    const toastyDuplicated = (count) => {
        toast.warn(count == 1 ? 'Se agregó un elemento adicional' : 'Se agregaron  ' + `${count}` + ' elementos adicionales', {
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
        if (itemInCart(producto.id)) {
            toastyDuplicated(count);
            addItemToCart(producto, count);
        } else {
            toastyNew(count);
            addItemToCart(producto, count);
        }
    }

    const [mobileResponsive, setmobileResponsive] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setmobileResponsive(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="itemDetail__container">

            <div className="itemDetail__columns">

                <div className="itemDetail__column--image">
                    <img className="item-image" src={`/images/products/${producto.image[0]}`} alt={producto.title} />
                </div>
                <div className="itemDetail__column--description">
                    <h1>{producto.title}</h1>
                    <h2>${producto.price}.</h2>
                    <p>{producto.description}</p>
                    <p>Disponibles: {producto.stock}</p>
                    <ItemCount count={count} setCount={setCount} stock={producto.stock} />
                    <button
                        className="itemDetail__btn--AddItemToCart"
                        onClick={() => { callFunction(); }}
                    >
                        Agregar al carrito
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};
export default ItemDetail