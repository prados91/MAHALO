import React from 'react'
import IndexItem from '../IndexItem/IndexItem';

const ItemList = ({ productos }) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {
                    productos.map((p) => {
                        return (
                            <IndexItem
                                key={p.id}
                                id={p.id}
                                title={p.title}
                                image={p.image}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ItemList