import React from 'react'
import { products } from '../../assets/db.js'
import './IndexItemContainer.css'
import IndexList from '../IndexLIst/IndexList.jsx'

const IndexItemContainer = () => {

    return (

        <div className="container text-center d-flex flex-column align-items-center indexItemContainer-container">
            <h2 className="titulo">¡Podes elegir de nuestros diseños!</h2>
            <div className="row no-margin-row" >
                <IndexList products={products} />
            </div>
        </div>
    )
}

export default IndexItemContainer
