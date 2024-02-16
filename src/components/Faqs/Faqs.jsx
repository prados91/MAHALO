import React from 'react'
import { question } from '../../assets/db.js'
import './Faqs.css'

const Faqs = () => {

    return (
        < div className="container-fluid faqs_container">
            <div className='accordion_container'>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    {question.map((item) => (
                        <div className="accordion-item" key={item.id}>
                            <h2 className="accordion-header">
                                <button
                                    className={`accordion-button${item.id !== 1 ? ' collapsed' : ''}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#panelsStayOpen-collapse${item.id}`}
                                    aria-expanded={item.id === 1}
                                    aria-controls={`panelsStayOpen-collapse${item.id}`}
                                >
                                    <strong>{item.question}</strong>
                                </button>
                            </h2>
                            <div
                                id={`panelsStayOpen-collapse${item.id}`}
                                className={`accordion-collapse collapse${item.id === 1 ? ' show' : ''}`}
                            >
                                <div className="accordion-body">
                                    {item.response}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Faqs