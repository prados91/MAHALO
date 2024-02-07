import React from 'react'
import ReactImageGallery from 'react-image-gallery'

import './GalleryContainer.css'
import "react-image-gallery/styles/css/image-gallery.css"

import { imageGallery } from '../../assets/db.js'
import Gallery from '../Gallery/Gallery.jsx'

const GalleryContainer = () => {

    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    return (
        /*<div className=' container-fluid gallery_container' style={{ width: "70vh", marginTop: "80px" }}>
            <ReactImageGallery items={imageGallery}
                showPlayButton={false}
                showFullscreenButton={false}
                showBullets={true}
                autoPlay={false}
                slideInterval={3000}
                slideDuration={1000}
                thumbnailPosition='bottom'
            />
        </div>*/

        <div className='container' style={{ width: "70vh", marginTop: "80px" }}>
            <Gallery />
        </div>
    )
}

export default GalleryContainer
