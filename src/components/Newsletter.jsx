import React from 'react'

function Newsletter() {
  return (
    <section className="newsletter">
            <div className="subscribe">
                <img src="src/assets/images/PageSix/notification.svg" alt="Notification Bell"></img>
                <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
            </div>
            <div className="subscribe-email">
                <input type="text" placeholder="Your Email"></input>
                <button className="btn-subscribe">Subscribe</button>
                
            </div>

        </section>
  )
}

export default Newsletter