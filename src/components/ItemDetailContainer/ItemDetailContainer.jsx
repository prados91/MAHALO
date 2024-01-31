import React from 'react'
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'
import { dbProducts } from '../../assets/db.js'

import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [producto, setProduct] = useState(null)
    const [load, setLoad] = useState(true)
    const { id } = useParams()

    const getProduct = () => {
        const dbProductos = dbProducts
        const dbProdById = dbProductos.find(product => product.id === id);
        if (dbProdById) {
            setProduct(dbProdById)
            setLoad(false)
        }
    };


    useEffect(() => {
        setLoad(true);
        getProduct();
        setTimeout(() => {
            // Este código se ejecutará después de x milisegundos
            setLoad(false);
        }, 500);
    }, [id]);


    return (
        <div className='itemDetailContainer__container'>
            {load ? (<Loading />) : <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer