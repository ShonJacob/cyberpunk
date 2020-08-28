import React from 'react';
import './contentarea.css';
import SocialAnchor from '../../components/SocialAnchor/socialanchor';

// Images
import youtubeIcon from '../../assets/Logos/YoutubeIcon.svg';
import gameplayDivider from '../../assets/Logos/GameplayDivider.svg';
import keanu from '../../assets/Keanu.webp';
import maincharacterDivider from '../../assets/Logos/maincharacterDivider.svg';
import releasedatedivider from '../../assets/Logos/releasedate.svg';
import xbox from '../../assets/Logos/xbox.svg';
import pc from '../../assets/Logos/pc.svg';
import ps4 from '../../assets/Logos/ps4.svg';

const ContentArea = () =>{
    return(
        <main>
            <div className="background-container">


            {/* CONTAINER AREA 1 */}
                <div className="contentarea-1">
                
                    <div className="gameplayArea">
                        <h1>Gameplay</h1>
                        <img src={gameplayDivider} alt="gameplaydivider" />
                        <p>
                        Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.
                        </p>
                    </div>

                    <svg className="svgElement">
                        <path xmlns="http://www.w3.org/2000/svg" d="M3 397.675V3H470.478L566 90.325V485H98.5219L3 397.675Z" fill="url(#pattern0)"   stroke="#F9EA01" strokeWidth="5"/>
                        <clipPath id="clipPath">
                             <path xmlns="http://www.w3.org/2000/svg" d="M3 397.675V3H470.478L566 90.325V485H98.5219L3 397.675Z" fill="url(#pattern0)"   stroke="#F9EA01" strokeWidth="5"/>
                        </clipPath>    

                        <foreignObject x="0" y="0" width="35.4rem" height="30.5rem">
                            <video className="video" autoPlay="autoplay" loop="loop" muted="muted" preload="preload" >
                                <source src="https://cdn-l-cyberpunk.cdprojektred.com/video/CP77_web_loop_4K_June_Beat_trailer_2020.mp4" type="video/mp4" />
                            </video>
                        </foreignObject>
                        <foreignObject x="219px" y="202px" width="130px" height="85px">
                            <a className="youtubeAnchor" href="https://www.youtube.com/watch?v=aBU34EigBxo"  target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} alt="youtube" /></a>
                        </foreignObject>                    
                    </svg>
                    <SocialAnchor />
                </div>





                {/* CONTAINER AREA 2 */}
                <div className="contentarea-2">
                    <img className="keanuImg" src={keanu} alt="keanu" />
                    <div className="maincharacter">
                        <h1>Main Character</h1>
                        <img src={maincharacterDivider} alt="maincharacterdivider"/>
                        <p>
                         Featuring Keanu Reeves , in a futuristic Japan , with mesmerizing visual graphics and a captivating storyline
                        </p>
                    </div>
                    <div className="preorderarea">
                        <svg className="preorderSVG" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M494 1H1V71.9714L53.7273 93H494V1Z" fill="#F9EA01" stroke="#000000" strokeWidth="3"/>
                            <clipPath id="clipPath1">
                                <path xmlns="http://www.w3.org/2000/svg" d="M494 1H1V71.9714L53.7273 93H494V1Z" fill="url(#pattern0)"   stroke="#000000" strokeWidth="3"/>
                             </clipPath>   
                            <foreignObject x="103px" y="24.5px" width="31rem" height="5.85rem">
                                <a href="https://www.cyberpunk.net/us/en/pre-order">Pre Order Now_</a>
                            </foreignObject>
                        </svg>
                        
                        <div className="releasedate">
                            <h1>Release Date</h1>
                            <img src={releasedatedivider} alt="releasedateDivider"/>
                            <p>Most awaited game of the year, releasing on </p>
                            <p>November 19, 2020</p>
                            <div className="platformNames">
                                <img src={xbox} alt="xbox" />
                                <img src={pc} alt="pc" />
                                <img src={ps4} alt="ps4" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </main>
    );
}

export default ContentArea;