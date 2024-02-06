import React from 'react'
import './IndexContainer.css'
import Index from '../Index/Index.jsx'

const IndexContainer = ({ greeting , subGreeting}) => {

    return (
        <div className="indexContainer__container">
            <Index greeting={greeting} subGreeting={subGreeting}/>
        </div>
    )
}

export default IndexContainer