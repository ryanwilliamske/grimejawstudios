import React from 'react';
import "../components/styles/Nav.scss";

function Nav() {
    return (
        <div className="container">
            <div className="logo">
                <h1>Grime Jaw Studios</h1>
            </div>
            <div className="blank">

            </div>
            <div className="menu">
                <ul>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Beats</a></li>
                    <li><a href="/">Account</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
