import React, { Component, Fragment, useContext } from 'react';
import Nav from "./nav"

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            {children}
        </div>
    )
}

export default Layout;
