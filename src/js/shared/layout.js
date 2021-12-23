import React, { Component, Fragment, useContext } from 'react';
import Nav from "./nav"
const Layout = ({ children }) => {

    const HandleScroll = (event) => {
        const scrollHeight = event.currentTarget.scrollHeight;

        const scrollTop = event.currentTarget.scrollTop;

        console.log(scrollTop)
    }
    return (
        <div className='layout' onScroll={HandleScroll}>
            <Nav />
            {children}
        </div>
    )
}

export default Layout;
