import React from 'react'

import { desingButtons } from '../../assets/db.js'

const IndexButtons = () => {

    return (
        <div className='container-fluid d-flex '>
            <div className="row justify-content-center">
                {
                    desingButtons.map((p) => {
                        return (
                            <div className="col-10 col-sm-6 col-md-4 col-lg-4 card-item-container">
                                <div className="card card-custom ">
                                    <img src={`/images/logos/${p.image}`} alt={p.name} className="card-img-top" />
                                </div>
                            </div >
                        )
                    })
                }
            </div>
        </div >

    )
}

export default IndexButtons

