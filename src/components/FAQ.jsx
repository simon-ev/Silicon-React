import React from 'react'

function FAQ() {
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
            

            <div className="faq-questions">

                <div className="faq-card">
                    <div className="question">
                        <p>Is any of my personal information stored in the App?</p>
        
                        <button className="btn-round-faq">
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
        
                    <div className="answer open">
                        <div className="expandable">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo molestias sequi! Autem minus ipsa saepe, expedita voluptatem deleniti. Debitis quas non est omnis praesentium dolore tempora culpa excepturi ullam.
                        </div>
                    </div>
                </div>

                <div className="faq-card">
                    <div className="question">
                        <p>What formats can I download my transaction history in?</p>
        
                        <button className="btn-round-faq">
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
        
                    <div className="answer open">
                        <div className="expandable">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo molestias sequi! Autem minus ipsa saepe, expedita voluptatem deleniti. Debitis quas non est omnis praesentium dolore tempora culpa excepturi ullam.
                        </div>
                    </div>
                </div>

                <div className="faq-card open">
                    <div className="question">
                        <p>Can I schedule future transfers?</p>
        
                        <button className="btn-round-faq">
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
        
                    <div className="answer">
                        <div className="expandable">
                            <p>
                                Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="faq-card">
                    <div className="question">
                        <p>When can I use Banking App services?</p>
        
                        <button className="btn-round-faq">
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
        
                    <div className="answer open">
                        <div className="expandable">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo molestias sequi! Autem minus ipsa saepe, expedita voluptatem deleniti. Debitis quas non est omnis praesentium dolore tempora culpa excepturi ullam.
                        </div>
                    </div>
                </div>
                <div className="faq-card">
                    <div className="question">
                        <p>Can I create my own password that is easy for me to remember?</p>
        
                        <button className="btn-round-faq">
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
        
                    <div className="answer open">
                        <div className="expandable">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo molestias sequi! Autem minus ipsa saepe, expedita voluptatem deleniti. Debitis quas non est omnis praesentium dolore tempora culpa excepturi ullam.
                        </div>
                    </div>
                </div>
                <div className="faq-card">
                    <div className="question">
                        <p>What happens if I forget or lose my password?</p>
        
                        <button className="btn-round-faq">
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
        
                    <div className="answer open">
                        <div className="expandable">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo molestias sequi! Autem minus ipsa saepe, expedita voluptatem deleniti. Debitis quas non est omnis praesentium dolore tempora culpa excepturi ullam.
                        </div>
                    </div>
                </div>
        
            </div>

        </section>
  )
}

export default FAQ