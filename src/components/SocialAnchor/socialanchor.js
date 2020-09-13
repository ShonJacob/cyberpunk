import React from 'react';
import './socialanchor.css'

import youtube from '../../assets/Logos/youtube.svg';
import facebook from '../../assets/Logos/facebook.svg';
import twitter from '../../assets/Logos/twitter.svg';


const socialanchor = () =>{
    return(
        <div className="SocialAnchor">
                <a className='youtube' href="https://www.youtube.com/user/CyberPunkGame" target="_blank" rel="noopener noreferrer">
                   <img src={youtube} alt='youtube' />
                   <p>Youtube</p>
                </a>
 
                <a className='facebook' href="https://www.facebook.com/CyberpunkGame" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt='facebook' />
                    <p>Facebook</p>
                </a>
 
                <a className='twitter' href="https://twitter.com/CyberpunkGame?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt='twitter' />
                <p>Twitter</p>
                </a>

    </div>
    );
}

export default socialanchor;

