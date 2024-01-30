import React from 'react'
import './IndexItem.css'

const productsIndex = [
    
]
const IndexItem = () => {
    return (
        <div className="card card-custom">
            <img
                src="https://static.wixstatic.com/media/160e4f_7e7272a468754acd890fb72bcd216f99~mv2.png/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/160e4f_7e7272a468754acd890fb72bcd216f99~mv2.png"
                className="card-img-top"
                alt="Imagen del Producto"
            />
            <div className="card-body">
                <h5 className="card-title text-center">Nombre del Producto</h5>
                
            </div>
        </div>
    )
}

export default IndexItem