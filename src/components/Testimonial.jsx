import React from 'react'
import StarRating from './StarRating'

const Testimonial = ({item}) => {
  return (
        <div className="rev-cards">
            
            <div className="review-cont">
                <div className="icon-quote">
                    <img src="src/assets/images/PageFive/icon_quotes.svg" alt="Quotation"></img>
                </div>
                <StarRating starRating={item.starRating} />
                <p>{item.comment}</p>
                <div className="author">
                    <img src={item.avatarUrl} alt={item.author}></img>
                    <div className="author-name">
                        <h4>{item.author}</h4>
                        <h5>{item.jobRole}</h5>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default Testimonial