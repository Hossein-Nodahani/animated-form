import React from 'react';
import styled from 'styled-components';

import ToggleBox from './ToggleBox';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Box = styled.div`
        width: 20rem;
        height: 35rem;
        background-color: #FFFFFF;
        border-radius: 20px;
        margin: 3rem auto;
        padding: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
`;

const Container = () => {
    return (
        <>
               <Box >
                    <ToggleBox />
                    <RegisterForm />
                    <LoginForm />
               </Box >
        </>
    );
};

export default Container;