import React from 'react'
import ItemIndex from '../IndexItem/IndexItem'
import './IndexItemContainer.css'
import { Link } from 'react-router-dom'
const IndexItemContainer = () => {
    return (
        <div className="container">
            <h2 className="titulo">¡Contamos con variedad de modelos!</h2>
            <div className="cardContainer">
                <ItemIndex />
                <ItemIndex />
                <ItemIndex />
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