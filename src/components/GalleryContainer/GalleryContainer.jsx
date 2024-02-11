import React from 'react'
import { images } from '../../assets/db.js'
import Gallery from '../Gallery/Gallery.jsx'
import './GalleryContainer.css'
import "react-image-gallery/styles/css/image-gallery.css"

import { imageGallery } from '../../assets/db.js'

const GalleryContainer = () => {

    return (
        <div className='container text-center galleryContainer_container'>
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <Gallery images={images} />
                </div>
            </div>
        </div>
    )
}

export default GalleryContainer
