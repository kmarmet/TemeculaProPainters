import React, { Component, Fragment, useContext } from 'react';
import Nav from "./nav"
const Layout = ({ children }) => {
    return (
        <Fragment>
            <Nav />
            {children}
        </Fragment>
    )
}

export default Layout;
