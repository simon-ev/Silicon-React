import React, { useState } from 'react'

const SubscribeAlert = () => {

    const [formData, setFormData] = useState({ email: '' })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        alert('Thank you for subscribing to the newsletter')
    }
  
    return (
    
            <form onSubmit={handleSubmit} className="subscribe-email">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email"></input>
                
                <button type="submit" className="btn-subscribe">Subscribe</button>
                  
            </form>
    )
}

export default SubscribeAlert