import React from 'react';

import styled, { keyframes } from 'styled-components'


const animation =keyframes`
    0% { opacity: 0}
    10% { opacity: 1}
    30% {opacity: 1}
    40% { opacity:0}
`;

 const BackgroundPicture = styled.div`
                                                    width : 100% ;
                                                    opacity:0;
                                                    height : 100vh ;
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

export default BackgroundPicture;
