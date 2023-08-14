import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ellipse624 from '../images/Ellipse 624.png'


function PromotionSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="promotion-slider">
        <div className="container">
          <div className="specialHeading">
            <h4>Promotion</h4>
            <h3>See What Our Clients Say About Us</h3>
          </div>
          <Slider {...settings}>
            <div className="opinion">
              <div className="image"><img src={Ellipse624} alt="image" loading='lazy' /></div>
              <div className="text">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
                  <path d="M15.6586 59.18C12.1394 55.4422 10.25 51.2499 10.25 44.4542C10.25 32.4958 18.6447 21.7778 30.8525 16.4785L33.9036 21.1867C22.509 27.3503 20.2813 35.3488 19.393 40.3918C21.2278 39.4419 23.6297 39.1105 25.9838 39.3292C32.1474 39.8998 37.0059 44.9598 37.0059 51.2499C37.0059 54.4215 35.746 57.4631 33.5034 59.7058C31.2608 61.9484 28.2191 63.2083 25.0476 63.2083C23.2937 63.1929 21.5603 62.8289 19.9484 62.1373C18.3365 61.4458 16.8783 60.4405 15.6586 59.18ZM49.8253 59.18C46.3061 55.4422 44.4167 51.2499 44.4167 44.4542C44.4167 32.4958 52.8114 21.7778 65.0192 16.4785L68.0703 21.1867C56.6757 27.3503 54.448 35.3488 53.5597 40.3918C55.3944 39.4419 57.7963 39.1105 60.1504 39.3292C66.3141 39.8998 71.1726 44.9598 71.1726 51.2499C71.1726 54.4215 69.9127 57.4631 67.6701 59.7058C65.4274 61.9484 62.3858 63.2083 59.2142 63.2083C57.4603 63.1929 55.727 62.8289 54.1151 62.1373C52.5032 61.4458 51.045 60.4405 49.8253 59.18Z" fill="black" fillOpacity="0.19"/>
                </svg>
                Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.
                </p>
                <h4>Christine Beckam - Designer</h4>
              </div>
            </div>
            <div className="opinion">
              <div className="image"><img src={Ellipse624} alt="image" loading='lazy' /></div>
              <div className="text">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
                    <path d="M15.6586 59.18C12.1394 55.4422 10.25 51.2499 10.25 44.4542C10.25 32.4958 18.6447 21.7778 30.8525 16.4785L33.9036 21.1867C22.509 27.3503 20.2813 35.3488 19.393 40.3918C21.2278 39.4419 23.6297 39.1105 25.9838 39.3292C32.1474 39.8998 37.0059 44.9598 37.0059 51.2499C37.0059 54.4215 35.746 57.4631 33.5034 59.7058C31.2608 61.9484 28.2191 63.2083 25.0476 63.2083C23.2937 63.1929 21.5603 62.8289 19.9484 62.1373C18.3365 61.4458 16.8783 60.4405 15.6586 59.18ZM49.8253 59.18C46.3061 55.4422 44.4167 51.2499 44.4167 44.4542C44.4167 32.4958 52.8114 21.7778 65.0192 16.4785L68.0703 21.1867C56.6757 27.3503 54.448 35.3488 53.5597 40.3918C55.3944 39.4419 57.7963 39.1105 60.1504 39.3292C66.3141 39.8998 71.1726 44.9598 71.1726 51.2499C71.1726 54.4215 69.9127 57.4631 67.6701 59.7058C65.4274 61.9484 62.3858 63.2083 59.2142 63.2083C57.4603 63.1929 55.727 62.8289 54.1151 62.1373C52.5032 61.4458 51.045 60.4405 49.8253 59.18Z" fill="black" fillOpacity="0.19"/>
                  </svg>
                Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.
                </p>
                <h4>Christine Beckam - Designer</h4>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default PromotionSlider
