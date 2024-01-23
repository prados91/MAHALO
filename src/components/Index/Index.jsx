import React from 'react'
import './Index.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Index = ({ greeting }) => {
    return (
        <>
            <div>{greeting}</div>
            <div><ItemListContainer /></div>
        </>
    )
}

export default Index