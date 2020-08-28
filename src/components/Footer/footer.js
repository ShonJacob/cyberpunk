import React from 'react';
import './footer.css';

//Images
import divider from '../../assets/Logos/Header-Divider.png'

const Footer = () =>{
    return(
        <footer>
             <div className="dividerbarbottom"><img src={divider} alt="divider" /></div>
             <div className="footer-container">
               <div className="footer-left">
                 <p className="footertitle">CyberPunk</p>
               </div>
               <div className="footer-center">
                   <p className="creator">Created by Shon Jacob</p>
               </div>
               <div className="footer-right">
                    <div className="footerbutton">Credits</div>
                    <div className="footerbutton">CopyRight ©</div>
               </div>
             </div>   
        </footer>
    );
}

export default Footer;