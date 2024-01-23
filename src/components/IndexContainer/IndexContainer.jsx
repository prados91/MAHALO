import React, { useState, useEffect } from 'react'
import './IndexContainer.css'
import Loading from '../Loading/Loading.jsx'
import Index from '../Index/Index.jsx'
import Gallery from '../GalleryContainer/GalleryContainer.jsx'
import { useParams } from 'react-router-dom'

const IndexContainer = ({ greeting }) => {

    return (
        <div className="indexContainer__container">
            <h1>{greeting}</h1>
            <Gallery />
            <Index />
        </div>
    )
}

export default IndexContainer