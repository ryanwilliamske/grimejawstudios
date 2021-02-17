import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { Button} from './reuse/Button';


function Navbar() {
    //const navClasses = ["nav-default", "nav-scroll"];
    // const [navclass, setNavclass] = useState(false);

    // const checkNavScroll = ()=>{
    //     if(window.scrollY > 50){
    //         setNavclass(!navclass);
    //         return "navbar nav-scroll";
    //     }else{
    //         setNavclass(navclass);
    //         return "navbar navbar-default";
    //     }
    // };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    GRIME JAW STUDIOS
                </Link>
            <ul className="nav-menu">
                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/beats" className="nav-link">Beats</Link></li>

            </ul>
                <Link to="/account" >
                    {/* <button className="nav-account">Account</button> */}
                    <Button className="btn btn-default">
                        Account
                    </Button>
                </Link>  
            </div>

        </nav>

        // <ul>
        //     <Link to='/about'>About</Link>
        //     <Link to='/beats'>Beats</Link>
        //     <Link to='/account'>Account</Link>
        // </ul>
    )
}

export default Navbar
