import React from 'react'
import './BannerTwo.css'

const BannerTwo = ({ title, subtitle }) => {

    return (
        <div className="bg-image2">
            <div className='contenedorTitulos2'>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

/*
<div className="bg-image2">
            <div className='contenedorTitulos2'>
                <h2>Diseños hechos a mano</h2>
                <p>Utilizamos marcadores de acrilico para darle un estilo unico a cada tabla</p>
            </div>
        </div>
*/

export default BannerTwo

