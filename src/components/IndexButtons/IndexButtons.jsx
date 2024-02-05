import React from 'react'

import { desingButtons } from '../../assets/db.js'
import ButtonsDesign from '../ButtonsDesign/ButtonsDesign.jsx'

import './IndexButtons.css'

const IndexButtons = () => {

    return (
        <div className="container btn_container">
            <div className="row justify-content-center gap-3">
                {
                    desingButtons.map((p) => {
                        return (
                            <ButtonsDesign
                                key={p.id}
                                id={p.id}
                                title={p.title}
                                image={p.image}
                                imageH={p.imageH}
                            />
                        )
                    })
                }
            </div>
        </div >

    )
}

export default IndexButtons

