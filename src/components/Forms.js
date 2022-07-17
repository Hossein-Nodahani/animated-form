import React from 'react';
import styled from 'styled-components';
import Background from './Background';     

const Container = styled.div`
        width: 20rem;
        height: 30rem;
        background-color: #FFFFFF;
        border-radius: 20px;
        margin: 3rem auto;
`;

const Forms = () => {
    return (
        <div>
               <Container >
                        it is Container
               </Container >
                <Background />
        </div>
    );
};

export default Forms;