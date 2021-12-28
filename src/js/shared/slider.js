import React, { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import one from "../../img/image-slider/1.jpg"
import two from "../../img/image-slider/2.jpg"
import three from "../../img/image-slider/3.jpg"
import four from "../../img/image-slider/4.jpg"
import five from "../../img/image-slider/5.jpg"
import six from "../../img/image-slider/6.jpg"
import seven from "../../img/image-slider/7.jpg"
import eight from "../../img/image-slider/8.jpg"
import nine from "../../img/image-slider/9.jpg"

import "../../styles/bundle.scss"
export default function ImageSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        adaptiveHeight: true
    };
    const sliderRef = useRef();
    const Next = () => {
        sliderRef.current.slickNext();
    }
    const Back = () => {
        sliderRef.current.slickPrev();
    }
    return (
        <div className="slider-parent">
            <Slider {...settings} ref={sliderRef}>
                <img src={one} alt="One" />
                <img src={two} alt="Two" />
                <img src={three} alt="Three" />
                <img src={four} alt="Four" />
                <img src={five} alt="Five" />
                <img src={six} alt="Six" />
                <img src={seven} alt="seven" />
                <img src={eight} alt="eight" />
                <img src={nine} alt="nine" />

            </Slider>
            <i className="fas arrow fa-chevron-left left" onClick={Back}></i>
            <button className="grey ml-5 mr-5">
                <Link to="/gallery">view full gallery</Link>
            </button>
            <i className="fas arrow fa-chevron-right right" onClick={Next}></i>
        </div>
    );
}