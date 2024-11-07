import React from 'react'

function Recieve() {
  return (
    <section className="receive">
            <div className="contacts">
                <img src="src/assets/images/PageFour/contacts.svg" alt=""></img>
            </div>
            <div className="tr-cont-2">
                
                <div className="info">
                    <h2>Receive payment from international bank details</h2>
                </div>
                <div className="more-container">
                    <div className="icon-container">
                        <div className="icons">
                            <img src="src/assets/images/PageTwo/icon_easypayments.svg" alt="Credit card"></img>
                        </div>
                        <div>
                            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                        </div>
                    </div>
                    <div className="icon-container">
                        <div className="icons">
                            <img src="src/assets/images/PageTwo/icon_regularcashback.svg" alt="Wallet"></img>
                        </div>
                        <div>
                            <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="#" className="btn-primary btn-learn">
                        <span>Learn more</span>
                        <i>
                            <img src="src/assets/images/PageFour/arrowleft.svg" alt="Arrow pointing right"></img>
                        </i>
                    </a>
                </div>
            </div>
        </section>
  )
}

export default Recieve