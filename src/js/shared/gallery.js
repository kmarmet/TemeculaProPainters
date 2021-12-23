import React, { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import BrushImage from "../../img/gallery/brushes.jpg"
import BrushImage2 from "../../img/gallery/brushes-2.jpg"
import YellowWall from "../../img/gallery/yellow-wall.jpg"
import "../../styles/bundle.scss"
export default function Gallery() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
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
                <img src={BrushImage} alt="Brushes" />
                <img src={YellowWall} alt="Yellow Wall" />
                <img src={BrushImage2} alt="Brushes" />
                <img src={YellowWall} alt="Yellow Wall" />
            </Slider>
            <i className="fas arrow fa-chevron-left left" onClick={Back}></i>
            <button className="grey">
                <Link to="/about">view full gallery</Link>
            </button>
            <i className="fas arrow fa-chevron-right right" onClick={Next}></i>
        </div>
    );
}