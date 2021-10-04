import React from 'react';
import Tilt from 'react-tilt'
import 'tachyons';
import logoPNG from './brain.png';
import "./Logo.css";
 

const Logo = () => {
    return (
        <div className='ma4 mt0' >
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 130, width: 130 }} >
                <img className="Tilt-inner pa3" src={logoPNG} alt='brain logo' />
            </Tilt>
        </div>
    ); 
}

export default Logo;