import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem'

function FAQ() {

    const [accordions, setAccordions] = useState([])

    const fetchFaq = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setAccordions(data)
    }
    
    useEffect(() => {
        fetchFaq()
    }, [])

  return (
    <section className="faq">
            <div className="faq-title">
                <div className="questions">
                    <div>
                        <h2>Any questions? Check out the FAQs</h2>
                    </div>
                    <div className="text-m">
                        <p>Still have unanswered questions and need to get in touch?</p>
                    </div>
                </div>
                <div className="contact-options">
                    <div className="contact-card">
                        <img src="src/assets/images/PageSix/call-icon.svg" alt="Phone Call"></img>
                        <p>Still have questions?</p>
                        <div className="contact-us">
                            <a href="#">Contact us</a>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="contact-card">
                        <img src="src/assets/images/PageSix/message-icon.svg" alt="Message instead"></img>
                        <p>Don't like phone calls?</p>
                        <div className="contact-us message-green">
                            <a href="#" className="message-green">Contact us</a>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            

            
            <div className="faq-cards">

                    {
                        accordions.map(item => (
                            <AccordionItem key={item.id} item={item} />
                        ))   
                    } 
                    
            </div>
 
            

        </section>
  )
}

export default FAQ