import React from 'react'

function Hero() {
  return (
        <section aria-label="Page-One" className="showcase">
            <div className="frontpage-container">
                <h1 className="d4">Manage All Your Money in One App</h1>                
                <div className="content">
                    <p className="text-large">We offer you a new generation of the mobile banking.
                    Save, spend & manage money in your pocket.</p>
                    <div className="market-btns">
                        <a href="#" className="store-btn">
                            <span className="sr-only">Download on the App Store</span>
                            <img src="/src/assets/images/PageOne/AppStore.svg" alt="App Store"></img>
                        </a>
                        <a href="#" className="store-btn">
                            <span className="sr-only">Get it on Google Play</span>
                            <img src="/src/assets/images/PageOne/GooglePlay.svg" alt="Google Play"></img>
                        </a>
                    </div>

                    
            
                    <div className="more">
                        <a href="#features" className="btn-round btn-white">
                            <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <span>Discover more</span>
                    </div>
                    
                    
                </div>
                <div className="phone-img-container">
                    <img src="/src/assets/images/PageOne/Phones.svg" alt="App showcase on phones"></img>
                </div>
                <div className="logos-p">
                    <img src="/src/assets/images/PageOne/Logos.svg" alt="Partner Logos"></img>
                </div>
                
            </div>
        </section>
  )
}

export default Hero