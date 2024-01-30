import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">...</span>
            </div>
        </div>
    )
}

export default Loading