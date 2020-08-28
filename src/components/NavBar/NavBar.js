import React from 'react';

import './NavBar.css';
//Images
import logo from '../../assets/cyberpunkIcon.png';
import divider from '../../assets/Logos/Header-Divider.png';

const NavBar = () =>{
        return (
            <header>
                <div className="navbar-container">
                    <div className="navbar-left">
                        <img className="cyberpunklogo" src={logo} alt="Logo" />
                        <p className="navtitle">CyberPunk</p>
                    </div>
                    <div className="navbar-right">
                        <div className="navbutton">GamePage</div>
                        <div className="navbutton">Gallery</div>
                        <div className="navbutton">About</div>
                    </div>    
                </div>
                <div className="dividerbar"><img src={divider} alt="divider" /></div>
            </header>
        );
    }

export default NavBar;
