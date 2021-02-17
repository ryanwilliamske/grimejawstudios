import React from 'react';
import Nav from './Nav';
import './styles/Hero.scss';
import BackVid from './../videos/galaxy.mp4';
import BackPoster from './../images/poster.png';
import CallToAction from './CallToAction';


function Hero() {
    return (
        <div className="Hero">
            <Nav />
            <h1>GRIME JAW</h1>
            <video className="backVid" poster={BackPoster} autoPlay muted loop>
                <source src={BackVid} type="video/mp4"></source>
            </video>
        
            
        </div>
    )
}

export default Hero
