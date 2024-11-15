import React from 'react'
import SubscribeAlert from './SubscribeAlert'

function Newsletter() {
  return (
    <div className="newsletter-bg">
      
      <section className="newsletter">
              <div className="subscribe">
                  <img src="src/assets/images/PageSix/notification.svg" alt="Notification Bell"></img>
                  <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
              </div>
              <SubscribeAlert />

      </section>
    </div>
  )
}

export default Newsletter