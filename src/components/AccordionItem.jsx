import React, { useState } from 'react'

const AccordionItem = ({item}) => {

    const [isOpen, SetIsOpen] = useState(false)

    const toggleAccordion = () => {
        SetIsOpen(!isOpen)
    }

    return (
        <div className="faq-questions">
            <div className={`faq-card ${isOpen ? 'open': ''}`} onClick={toggleAccordion}>
                <div className="question">
                    <p>{item.title}</p>
                    <div className="btn-round-faq">
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
                
                {
                    isOpen && (
                        <div className="answer">
                                <p className="expandable">
                                    {item.content}
                                </p>
                        </div>
                    )
                }
                
            </div>
        </div>

    )
}

export default AccordionItem
