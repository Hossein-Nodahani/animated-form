import React from 'react';

import BackgroundPicture from './BackgroundPicture';

import bg1 from '../images/backgrounds/01.jpg';
import bg2 from '../images/backgrounds/02.jpg';
import bg3 from '../images/backgrounds/03.jpg';
import bg4 from '../images/backgrounds/04.jpg';
import bg5 from '../images/backgrounds/05.jpg'; 

const Background = () => {
    return (
        <div>
                <BackgroundPicture image={bg1}  delay="0s" />
                <BackgroundPicture image={bg2}  delay="4s" />
                <BackgroundPicture image={bg3}   delay="12s"/>
                <BackgroundPicture image={bg4}   delay="18s"/>
                <BackgroundPicture image={bg5}   delay="24s"/> 
        </div>
    );
};

export default Background;