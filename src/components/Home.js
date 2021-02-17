import React from 'react';
import { Button } from './reuse/Button';
import './Home.scss';


function Home() {
    return (
        
        <div className="home-content">
                {/* <video src="./videos/galaxy.mp4" type="video/mp4" autoPlay muted loop/> */}
                <div className="call-to-action">
                    <h1>Song of the Day</h1>
                    <Button>Play</Button> 
                </div>
          
        </div>
    )
}

export default Home
