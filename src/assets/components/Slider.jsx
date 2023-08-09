import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from '../images/home_background.png'
import sliderImg2 from '../images/wallpaperflare.com_wallpaper (1).jpg'
import sliderImg3 from '../images/wallpaperflare.com_wallpaper (2).jpg'
import sliderImg4 from '../images/wallpaperflare.com_wallpaper (3).jpg'




export default class Fade extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "linear",
      // adaptiveHeight: true
    };
    return (
      <Slider {...settings}>
        <div className="sliderImage">
          <img src={sliderImg1} alt="slider img" loading="lazy"/>
        </div>
        <div className="sliderImage">
          <img src={sliderImg2} alt="slider img" loading="lazy"/>
        </div>
        <div className="sliderImage">
          <img src={sliderImg3} alt="slider img" loading="lazy"/>
        </div>
        <div>
          <img src={sliderImg4} alt="slider img" loading="lazy"/>
        </div>
      </Slider>
    );
  }
}