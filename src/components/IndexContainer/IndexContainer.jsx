import React from 'react'
import './IndexContainer.css'
import Index from '../Index/Index.jsx'

const IndexContainer = ({ greeting , subGreeting}) => {

    return (
        <main className="indexContainer__container">
            <Index greeting={greeting} subGreeting={subGreeting}/>
        </main>
    )
}

export default IndexContainer