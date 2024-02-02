import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import IndexItem from '../IndexItem/IndexItem'
import Loading from '../Loading/Loading'
import ItemList from '../ItemList/ItemList'
import { dbProducts } from '../../assets/db.js'
import './IndexItemContainer.css'

const IndexItemContainer = () => {

    const [productos, setProducts] = useState([])
    const [load, setLoad] = useState(true)
    const dbProductos = dbProducts


    useEffect(() => {
        setLoad(true);
        setProducts(dbProductos)
        setTimeout(() => {
            // Este código se ejecutará después de x milisegundos
            setLoad(false);
        }, 1000);
    }, []);

    return (
        <div className="container text-center">
            <h2 className="titulo">¡Contamos con variedad de modelos!</h2>
            <div className="cardContainer">
                {/* <IndexItem />
                <IndexItem />
    <IndexItem />*/}

                <div className="row row-cols-3">
                    <div className="col"><IndexItem /></div>
                    <div className="col"><IndexItem /></div>
                    <div className="col"><IndexItem /></div>
                </div>
                <div className="row row-cols-3">
                    <div className="col"><IndexItem /></div>
                    <div className="col"><IndexItem /></div>
                    <div className="col"><IndexItem /></div>
                </div>
            </div>

            <Link to="/contact" className="botonCard">
                Quiero saber más
            </Link>
            {/*
            <div>
                <a className="dropdown-toggle botonCard " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Quiero saber más
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <Link to='/category/balanceboard' className='dropdown-item' >BalanceBoards</Link>
                    </li>
                    <li>
                        <Link to='/category/longboard' className='dropdown-item'>LongBoards</Link>
                    </li>
                    <li>
                        <Link to='/category/clothes' className='dropdown-item'>Indumentaria</Link>
                    </li>
                </ul>
            </div>     
               */}
        </div>

    )
}

export default IndexItemContainer