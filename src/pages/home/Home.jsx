import React , {useState} from 'react'
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
import switzerland from '../../assets/images/switzerland.png'
import EllipseSwitzerland from '../../assets/images/Ellipse 623.png'
import brazil from '../../assets/images/brazil.png'
import EllipseBrazil from '../../assets/images/Ellipse 623 (1).png'
import egypt from '../../assets/images/egypt.png'
import EllipseEgypt from '../../assets/images/Ellipse 623 (2).png'
import PromotionSlider from '../../assets/components/PromotionSlider'
import Footer from '../../assets/components/Footer'
import '../../assets/styles/css/homePage/home.css'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { DateRange } from 'react-date-range';

function Home() {
  const [showPopup , setShowPopup] = useState(false)
  const [showDateRange , setShowDateRange] = useState(false)
  const [showFeatures , setShowFeatures] = useState(false)
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  const pageFilter = showPopup === true ? 'blur(5px)' : 'initial'
  return (
    <>
      {showPopup === true && (
        <div className="home-popup">
          {showDateRange === true ? (
            <div className="date-table">
              <button className="close-dateTable" onClick={()=>setShowDateRange(false)}>x</button>
              <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
              />
            </div>
          ) :
            <>
              <button className="close-dateTable" onClick={()=>setShowPopup(false)}>x</button>
              <h2>Build Your Own Package</h2>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Enter destination (country)" />
                <label htmlFor="floatingInput">Enter destination (country)</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Enter destination (city)" />
                <label htmlFor="floatingInput">Enter destination (city)</label>
              </div>
              <div className="date-range-people">
                <div className="date" onClick={() => setShowDateRange(!showDateRange)}>
                  <small>Date Range</small>
                  <div className="dates">
                    <h3>Start Date</h3>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M3.18603 7.38205L12.4404 7.38205M8.39163 3.33325L12.4404 7.38205L8.39163 11.4309" stroke="black" strokeWidth="1.1568" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <h5>End Date</h5>
                  </div>
                </div>
                <div className="people">
                  <small>Guests</small>
                  <select className="form-select" aria-label="Default select example">
                    <option defaultValue value="1">2 adults</option>
                    <option value="1">3 adults</option>
                    <option value="1">4 adults</option>
                  </select>
                </div>
              </div>
              <h4 onClick={() => setShowFeatures(!showFeatures)}>Activities preferences (optional)</h4>
              {showFeatures === true && (
                <div className="checkboxes">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Culture</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Outdoors</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Relaxing</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox45" value="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox45">Wildlife</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox5">Romantic</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox6">Religious</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox7">Hiking</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox8">Musical</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox9" value="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox9">Shopping</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox10" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox10">Business</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox11" value="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox11">Museams</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox12" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox12">Party</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox13" value="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox13">Traditions</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox14" value="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox14">Walks</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox15" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox15">FIshing</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox16" value="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox16">Healthcare</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox17" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox17">Accomodation</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox18" value="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox18">Cruise</label>
                  </div>
                </div>
              )}
              <button className="buttonHover">Build Package</button>
            </>
          }
        </div>
      )}
      <div className="home-page" style={{filter : pageFilter}}>
        <div className="header">
          <Navbar active={'home'} />
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
                <button className='submit buttonHover' onClick={()=>setShowPopup(true)}>Submit</button>
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
        <div className="trendy">
          <div className="container">
            <div className="specialHeading">
              <h4>TRENDY</h4>
              <h3>Our Trending Tour Packages</h3>
            </div>
            <div className="content">
              <div className="cont">
                <div className="image">
                  <img src={switzerland} alt="switzerland" loading='lazy' />
                  <img src={EllipseSwitzerland} alt="EllipseSwitzerland" loading='lazy' className="patch" />
                </div>
                <div className="text">
                  <div className="top">
                    <div className="con">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                      </svg>
                      <span>8 days</span>
                    </div>
                    <div className="con">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                      </svg>
                      <span>25 People going</span>
                    </div>
                  </div>
                  <div className="middle">
                    <h1>
                      <span>Switzerland</span>
                      <div className="stars">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      </div>
                    </h1>
                    <div className="con">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>
                      <span>Europe</span>
                    </div>
                      <div className="price">
                        <h3>1,000 $</h3>
                        <del>1,200 $</del>
                      </div>
                      <p>Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.</p>
                      <button className="buttonHover">Explore Now</button>
                  </div>
                </div>
              </div>
              <div className="cont">
                <div className="image">
                  <img src={brazil} alt="brazil" loading='lazy' />
                  <img src={EllipseBrazil} alt="EllipseBrazil" loading='lazy' className="patch" />
                </div>
                <div className="text">
                  <div className="top">
                    <div className="con">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                      </svg>
                      <span>8 days</span>
                    </div>
                    <div className="con">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                      </svg>
                      <span>30 People going</span>
                    </div>
                  </div>
                  <div className="middle">
                    <h1>
                      <span>Amazon</span>
                      <div className="stars">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      </div>
                    </h1>
                    <div className="con">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>
                      <span>Brazil</span>
                    </div>
                      <div className="price">
                        <h3>1,223 $</h3>
                        <del>1,200 $</del>
                      </div>
                      <p>Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.</p>
                      <button className="buttonHover">Explore Now</button>
                  </div>
                </div>
              </div>
              <div className="cont">
                <div className="image">
                  <img src={egypt} alt="egypt" loading='lazy' />
                  <img src={EllipseEgypt} alt="EllipseEgypt" loading='lazy' className="patch" />
                </div>
                <div className="text">
                  <div className="top">
                    <div className="con">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                      </svg>
                      <span>8 days</span>
                    </div>
                    <div className="con">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                      </svg>
                      <span>115 People going</span>
                    </div>
                  </div>
                  <div className="middle">
                    <h1>
                      <span>Egypt</span>
                      <div className="stars">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      </div>
                    </h1>
                    <div className="con">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>
                      <span>Giza</span>
                    </div>
                      <div className="price">
                        <h3>1,200 $</h3>
                        <del>1,800 $</del>
                      </div>
                      <p>Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.</p>
                      <button className="buttonHover">Explore Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PromotionSlider />
        <Footer />
      </div>
    </>
  )
}

export default Home
