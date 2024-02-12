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

export default BannerTwo
