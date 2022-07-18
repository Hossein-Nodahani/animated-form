import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    position: relative;
`;

const Button = styled.button`
        padding: .5rem 1rem;
        cursor: pointer;
        background-color: transparent;
        border: none;
        border-radius: 10px;
        /* font */
`;

const Active = styled(Button)`
        background-color: blue;
        height: 100%;
        width: 50%;
        position: absolute;
        z-index: -1;
`;


const ToggleBox = () => {
    return (
        <Box>
            <Active />
            <Button> ورود</Button>
            <Button> ثبت نام</Button>
        </Box>
    );
};

export default ToggleBox;