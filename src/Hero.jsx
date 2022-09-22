import React from 'react'

function Hero() {
  return (
    <>
        <div className="hero">
        <div className="hero-header">
        <p>Savings to Set Your Website<br/> <span className='hero-header-plus'  >in Motion</span> </p>
        </div>
        <div className="hero-price-main">
        <span  ><i style={{
            
            
            // display:"flex",
            // justifyContent:"left"

        }} class="fa-solid fa-indian-rupee-sign"></i></span> 149.00 
        <span className='hero-month' >/month</span>
        </div>
        <div className="hero-description">
            <p>Get things moving with a free domain, lifetime SSL, and DDoS protection included with a four-year  subscription.</p>
        </div>
        <div className="hero-button">
            <button>Get Started</button>
        </div>
        <div className="hero-gurantee">
            <p> <span><i style={{
                color:"red"
            }} class="fa-solid fa-check"></i></span> Get exclusive 30-day money-back guarantee</p>
        </div>

        </div>
    </>
  )
}

export default Hero
