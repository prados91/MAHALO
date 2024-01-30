import React from 'react'
import './IndexContainer.css'
import Index from '../Index/Index.jsx'

const IndexContainer = ({ greeting }) => {

    return (
        <div className="indexContainer__container">
            <Index greeting={greeting} />
        </div>
    )
}

export default IndexContainer