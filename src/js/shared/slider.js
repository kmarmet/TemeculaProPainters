import React, { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import one from "../../img/gallery/before-and-after/1.jpg"
import two from "../../img/gallery/before-and-after/2.jpg"
import three from "../../img/gallery/before-and-after/3.jpg"
import four from "../../img/gallery/before-and-after/4.jpg"
import five from "../../img/gallery/before-and-after/5.jpg"
import six from "../../img/gallery/before-and-after/6.jpg"

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

            </Slider>
            <i className="fas arrow fa-chevron-left left" onClick={Back}></i>
            <button className="grey">
                <Link to="/gallery">view full gallery</Link>
            </button>
            <i className="fas arrow fa-chevron-right right" onClick={Next}></i>
        </div>
    );
}