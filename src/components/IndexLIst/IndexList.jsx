import React from 'react'
import Item from '../Item/Item';

const IndexList = ({ products }) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {
                    products.map((p) => {
                        return (
                            <Item
                                key={p.id}
                                id={p.id}
                                title={p.title}
                                image={p.image}
                                card={p.card}
                                cardMobile={p.cardMobile}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default IndexList