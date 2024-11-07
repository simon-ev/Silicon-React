import React from 'react'

function Reviews() {
  return (
    <section className="reviews">
            <div className="p-start">
                <h1>Clients are Loving Our App</h1>
            </div>
            <div className="review-cont">
                <div className="icon-quote">
                    <img src="src/assets/images/PageFive/icon_quotes.svg" alt="Quotation"></img>
                </div>
                <div className="icon-quote">
                    <img src="src/assets/images/PageFive/icon_quotes.svg" alt="Quotation"></img>
                </div>
                <div className="rev-cards">
                    <img src="src/assets/images/PageFive/4stars.svg" alt="4 star rating"></img>
                    <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                    <div className="author">
                        <img src="src/assets/images/PageFive/Fannie_Summers.svg" alt="User avatar"></img>
                        <div className="author-name">
                            <h4>Fannie Summers</h4>
                            <h5>Designer</h5>
                        </div>
                    </div>
                </div>
                <div className="rev-cards">
                    
                    <img src="src/assets/images/PageFive/5stars.svg" alt="5 star rating"></img>
                    <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                    <div className="author">
                        <img src="src/assets/images/PageFive/Albert_Flores.svg" alt="User avatar"></img>
                        <div className="author-name">
                            <h4>Albert Flores</h4>
                            <h5>Developer</h5>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Reviews