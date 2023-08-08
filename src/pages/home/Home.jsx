import React from 'react'
import people from '../../assets/images/Group 81.png'
import Navbar from '../../assets/components/Navbar'
import SimpleSlider from '../../assets/components/Slider'
import '../../assets/styles/css/homePage/home.css'



function Home() {
  return (
    <>
      <div className="home-page">
      <SimpleSlider />
      <Navbar />
        <div className="container">
          <div className="head">
            <h1>No matter where you’re going to, we’ll take you there</h1>
            <div className="form">
              <div className="cont">
                <p>Where to?</p>
              </div>
                <span>|</span>
              <div className="cont">
                <p>Travel Type
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                  </svg>  
                </p>
              </div>
                <span>|</span>
              <div className="cont">
                <p>Duration
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                  </svg>  
                </p>
              </div>
              <span>|</span>
              <button className='submit buttonHover'>Submit</button>
            </div>
            <div className="people">
              <img src={people} alt="people" loading='lazy' />
              <h3>2,500 people booked Tommorowland Event in last 24 hours</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
