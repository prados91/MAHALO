import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import './Gallery.css'
import "react-image-gallery/styles/css/image-gallery.css"

import { imageGallery } from '../../assets/db.js'

const Gallery = () => {

    return (
        <div style={{ width: "70vh", marginTop: "80px" }}>
            <ReactImageGallery items={imageGallery}
                showPlayButton={false}
                showFullscreenButton={false}
                showBullets={true}
                autoPlay={false}
                slideInterval={3000}
                slideDuration={1000}
                thumbnailPosition='bottom'
            />
        </div>
    )
}

export default Gallery