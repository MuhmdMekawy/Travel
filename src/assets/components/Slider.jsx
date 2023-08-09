import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from '../images/1.png'
import sliderImg2 from '../images/2.png'
import sliderImg3 from '../images/3.png'
import sliderImg4 from '../images/4.png'
import sliderImg5 from '../images/5.png'




export default class Fade extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        <div className="sliderImage">
          <img src={sliderImg1} alt="slider img" loading="lazy"/>
        </div>
        <div className="sliderImage special">
          <img src={sliderImg2} alt="slider img" loading="lazy"/>
        </div>
        <div className="sliderImage">
          <img src={sliderImg3} alt="slider img" loading="lazy"/>
        </div>
        <div className="sliderImage">
          <img src={sliderImg4} alt="slider img" loading="lazy"/>
        </div>
        <div className="sliderImage">
          <img src={sliderImg5} alt="slider img" loading="lazy"/>
        </div>
        <div className="sliderImage">
          <img src={sliderImg1} alt="slider img" loading="lazy"/>
        </div>
        <div className="sliderImage special">
          <img src={sliderImg2} alt="slider img" loading="lazy"/>
        </div>
        <div className="sliderImage">
          <img src={sliderImg3} alt="slider img" loading="lazy"/>
        </div>
        <div className="sliderImage">
          <img src={sliderImg4} alt="slider img" loading="lazy"/>
        </div>
        <div className="sliderImage">
          <img src={sliderImg5} alt="slider img" loading="lazy"/>
        </div>
      </Slider>
    );
  }
}