import React, { Component, Fragment, useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";

const Nav = withRouter(({ history, location }) => {
    const { pathname } = location;
    return (
        <nav className="nav">
            <div className="bg"></div>
            <div className="column left">
                <Link className={`${pathname === "/" ? "active brand-name" : "brand-name"}`} to="/">Temecula Pro Painters <i className="fas fa-brush"></i></Link>

            </div>
            <div className="column right">
                <ul>
                    <li><Link className={`${pathname === "/" ? "active" : ""}`} to="/">Home</Link></li>
                    <li> <Link className={`${pathname === "/about" ? "active" : ""}`} to="/about">About</Link></li>
                    <li> <Link className={`${pathname === "/services" ? "active" : ""}`} to="/services">Services</Link></li>
                    <li> <Link className={`${pathname === "/gallery" ? "active" : ""}`} to="/gallery">Gallery</Link></li>
                    <li><Link className={`${pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link></li>
                    <li>  <a href="tel:0000000000" className="call-cta blue">Call <i className="fas fa-phone"></i></a></li>
                </ul>
            </div>
        </nav >
    )
})

export default Nav;