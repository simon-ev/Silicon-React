import React, { useEffect, useState } from 'react'
import Testimonial from './Testimonial'


function Reviews() {

    const [testimonials, setTestimonials] = useState([])

    const getTestimonials = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonials(data)
    }

    useEffect(() => {
        getTestimonials()
    }, [])

  return (
    <section className="reviews">
            <div className="p-start">
                <h1>Clients are Loving Our App</h1>
            </div>
            <div>
                
                <div className="rev-cards">

                    {
                        testimonials.map((testimonial) => (
                            <Testimonial key={testimonial.id} item={testimonial} />
                        ))
                    }

                    
                </div>

                
            </div>
        </section>
  )
}

export default Reviews