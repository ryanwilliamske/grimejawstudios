import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/beats'>Beats</Link>
            <Link to='/account'>Account</Link>
        </div>
    )
}

export default Navbar
