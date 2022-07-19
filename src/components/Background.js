import React from 'react';
import styled, { keyframes } from 'styled-components'

import bg1 from '../images/backgrounds/01.jpg';
import bg2 from '../images/backgrounds/02.jpg';
import bg3 from '../images/backgrounds/03.jpg';
import bg4 from '../images/backgrounds/04.jpg';
import bg5 from '../images/backgrounds/05.jpg'; 

const animation =keyframes`
    0% { opacity: 0}
    10% { opacity: 1}
    30% {opacity: 1}
    40% { opacity:0 }
    ` ;

const BackgroundPicture = styled.div`
                                                    width : 100% ;
                                                    opacity:0;
                                                    height : 100% ;
                                                    position : absolute ;
                                                    top : 0 ;
                                                    z-index : -1;
                                                    background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)),url(${props => props.image}) no-repeat center;
                                                    background-size: cover;
                                                    animation-name: ${animation};
                                                    animation-duration: 30s;
                                                    animation-iteration-count: infinite;
                                                    animation-delay: ${props => props.delay};
                                                `;

const Background = () => {
    return (
        <>
                <BackgroundPicture image={bg1}  delay="0s" />
                <BackgroundPicture image={bg2}  delay="4s" />
                <BackgroundPicture image={bg3}   delay="12s"/>
                <BackgroundPicture image={bg4}   delay="18s"/>
                <BackgroundPicture image={bg5}   delay="24s"/> 
        </>
    );
};

export default Background;