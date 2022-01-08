import React, { Component, Fragment, useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import { Squash as Hamburger, Squash } from 'hamburger-react'

const Nav = withRouter(({ history, location }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const { pathname } = location;

    const CloseNav = () => {
        setMenuIsOpen(false)
    }

    return (
        <nav className={`nav ${menuIsOpen ? "open" : ""}`}>
            <div className="bg"></div>
            <div className="column left">
                <Link className={`${pathname === "/" ? "active brand-name" : "brand-name"}`} to="/">Temecula Pro Painters <i className="fas fa-brush"></i></Link>
                <Squash toggled={menuIsOpen} toggle={setMenuIsOpen} />

            </div>
            <div className="column right">
                <ul>
                    <li onClick={CloseNav}><Link className={`${pathname === "/" ? "active" : ""}`} to="/">Home</Link></li>
                    <li onClick={CloseNav}> <Link className={`${pathname === "/about" ? "active" : ""}`} to="/about">About</Link></li>
                    <li onClick={CloseNav}> <Link className={`${pathname === "/services" ? "active" : ""}`} to="/services">Services</Link></li>
                    <li onClick={CloseNav}> <Link className={`${pathname === "/gallery" ? "active" : ""}`} to="/gallery">Gallery</Link></li>
                    <li onClick={CloseNav}><Link className={`${pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link></li>
                    <li onClick={CloseNav}>  <a href="tel:0000000000" className="call-cta blue">Call <i className="fas fa-phone"></i></a></li>
                </ul>
            </div>
        </nav >
    )
})

export default Nav;