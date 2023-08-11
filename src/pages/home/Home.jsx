import React from 'react'
import people from '../../assets/images/Group 81.png'
import Navbar from '../../assets/components/Navbar'
import SimpleSlider from '../../assets/components/Slider'
import tourGuide from '../../assets/images/tour-guide 1.png'
import travelling from '../../assets/images/travelling 1.png'
import hands from '../../assets/images/hands 1.png'
import medical  from '../../assets/images/medical-team 1.png'
import rectangle from '../../assets/images/Rectangle 157 (1).png'
import honeymoonImg from '../../assets/images/image 50.png'
import Illustration from '../../assets/images/Illustration.png'
import Group7 from '../../assets/images/Group 7.png'
import Group12 from '../../assets/images/Group12.png'
import Group11 from '../../assets/images/Group11.png'
import sign from '../../assets/images/sign.png'
import eiffel from '../../assets/images/image 50 (1).png'
import img1 from '../../assets/images/Rectangle 19295.png'
import img2 from '../../assets/images/Rectangle 19296.png'
import img3 from '../../assets/images/Rectangle 19297.png'
import img4 from '../../assets/images/Rectangle 19298.png'
import '../../assets/styles/css/homePage/home.css'


function Home() {

  return (
    <>
      <div className="home-page">
        <div className="header">
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
        <SimpleSlider />
        <div className="category">
          <div className="container">
            <div className="specialHeading">
              <h4>CATEGORY</h4>
              <h3>We Offer Best Services</h3>
            </div>
            <div className="content">
              <div className="cont">
                {/* <div  className='rectangle'><img src={rectangle} alt="rectangle" loading='lazy'/></div> */}
                <div className="image">
                  <img src={tourGuide} alt="img" loading='lazy'/>
                </div>
                <h4>Guided Tours</h4>
                <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
              </div>
              <div className="cont">
                {/* <div  className='rectangle'><img src={rectangle} alt="rectangle" loading='lazy'/></div> */}
                <div className="image">
                  <img src={travelling} alt="img" loading='lazy'/>
                </div>
                <h4>Best Flights Options</h4>
                <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
              </div>
              <div className="cont">
                {/* <div  className='rectangle'><img src={rectangle} alt="rectangle" loading='lazy'/></div> */}
                <div className="image">
                  <img src={hands} alt="img" loading='lazy'/>
                </div>
                <h4>Religious Tours</h4>
                <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
              </div>
              <div className="cont">
                {/* <div  className='rectangle'><img src={rectangle} alt="rectangle" loading='lazy'/></div> */}
                <div className="image">
                  <img src={medical} alt="img" loading='lazy'/>
                </div>
                <h4>Medical insurance</h4>
                <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="honeymoon-specials">
          <div className="container">
            <div className="content">
              <div className="image">
                <img src={honeymoonImg} alt="honeymoonImg" loading='lazy'/>
              </div>
              <div className="text">
                <div className="specialHeading">
                  <h4>Honeymoon Specials</h4>
                  <h3>Our Romantic Tropical Destinations</h3>
                </div>
                <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                <button className='buttonHover'>View Packages</button>
              </div>
            </div>
          </div>
        </div>
        <div className="fast-safarya">
          <div className="container">
            <div className="safar-content">
            <div className="left">
                <div className="specialHeading">
                  <h4>Fast & Easy</h4>
                  <h3>Get Your Favourite <br /> Resort Bookings</h3>
                </div>
                <div className="content">
                  <div className="cont">
                    <div className="icon">
                      <img src={Group7} alt="icon" loading='lazy'/>
                    </div>
                    <div className="text">
                      <h5>Choose Destination</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                    </div>
                  </div>
                  <div className="cont">
                    <div className="icon">
                      <img src={Group12} alt="icon" loading='lazy'/>
                    </div>
                    <div className="text">
                      <h5>Check Availability</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                    </div>
                  </div>
                  <div className="cont">
                    <div className="icon">
                      <img src={Group11} alt="icon" loading='lazy'/>
                    </div>
                    <div className="text">
                      <h5>Let’s Go</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image"><img src={Illustration} alt="plane img" loading='lazy'/></div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="container">
            <h1>Let’s make your next <br /> holiday <span>amazing <div className="image"><img src={sign} alt="sign" loading='lazy'/></div></span> </h1>
          </div>
        </div>
        <div className="promotion">
          <div className="container">
            <div className="content">
              <div className="left">
                <div className="specialHeading">
                  <h4>Promotion</h4>
                  <h3>We Provide You Best <br /> Europe Sightseeing Tours</h3>
                </div>
                <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                <button className="buttonHover">View Packages</button>
              </div>
              <div className="image"><img src={eiffel} alt="eiffel tower" loading='lazy'/></div>
            </div>
              <div className="images">
                <div className="cont">
                  <img src={img1} alt="image" loading='lazy' />
                  <div className="badge">$700</div>
                </div>
                <div className="cont">
                  <img src={img2} alt="image" loading='lazy' />
                  <div className="badge">$800</div>
                </div>
                <div className="cont">
                  <img src={img3} alt="image" loading='lazy' />
                  <div className="badge">$500</div>
                </div>
                <div className="cont">
                  <img src={img4} alt="image" loading='lazy' />
                  <div className="badge">$200</div>
                </div>
              </div>
          </div>
        </div>
        <div className="two-images">
          <div className="cont">
            <h3>Promotion</h3>
            <h4>Explore Nature</h4>
            <button className="buttonHover">View Packages</button>
          </div>
          <div className="cont">
            <h3>Promotion</h3>
            <h4>Explore Nature</h4>
            <button className="buttonHover">View Packages</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
