import React, { Component, Fragment, useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";

const Nav = withRouter(({ history, location }) => {
    return (
        <nav className="nav">
            <div className="column right is-one-third">
                <ul>
                    <Link to="/">Home</Link>
                </ul>
            </div>
        </nav >
    )
})

export default Nav;