import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'
import { useParams } from 'react-router-dom'

import { dbProducts } from '../../assets/db.js'
import './ItemListContainer.css'

const ItemListContainer = () => {

    const [productos, setProducts] = useState([])
    const [load, setLoad] = useState(true)
    const { category } = useParams()

    const getProducts = () => {
        const dbProductos = dbProducts
        const findProducts = dbProductos.filter(product => product.category === category);
        if (findProducts.length === 0) {
            setProducts(dbProductos)
        }
        else {
            setProducts(findProducts)
        }
    };

    useEffect(() => {
        setLoad(true);
        getProducts();
        setTimeout(() => {
            // Este código se ejecutará después de x milisegundos
            setLoad(false);
        }, 1000);
    }, [category]);


    return (
        <div className="container-fluid">
            <div className="bg-image">
                <div className="contenedorTitulos">
                    <h1>Nuestra tienda!</h1>
                    <h2>{category.toUpperCase()}</h2>
                </div>
            </div>
            <div className="container second-div">
                <div className='row'>
                    {load ? (<Loading />) :
                        (
                            <>
                                <ItemList productos={productos} />
                            </>
                        )
                    }
                </div>
            </div>
        </div>


    )
}

export default ItemListContainer