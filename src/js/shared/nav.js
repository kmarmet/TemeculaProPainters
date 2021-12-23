import React, { Component, Fragment, useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";

const Nav = withRouter(({ history, location }) => {
    const { pathname } = location;
    return (
        <nav className="nav">
            <div className="bg"></div>
            <div className="column left">
                <a href="#">Temecula Pro Painters</a>
            </div>
            <div className="column right">
                <ul>
                    <Link className={`${pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                    <Link className={`${pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                    <Link className={`${pathname === "/services" ? "active" : ""}`} to="/services">Services</Link>
                    <Link className={`${pathname === "/gallery" ? "active" : ""}`} to="/gallery">Gallery</Link>
                    <Link className={`${pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
                </ul>
            </div>
        </nav >
    )
})

export default Nav;