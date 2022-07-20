import React from 'react';
import styled from 'styled-components';



const Box = styled.div`
    position: absolute;
    width: 50%;
    height: 3rem;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
    border-radius: 25px;    
    display: flex;
`;

const Button = styled.button`
        padding: .5rem;
        cursor: pointer;
        position: relative;
        background-color: transparent;
        border: none;
        border-radius: 25px;
        width: 50%;
        transition: color .5s;
        color: ${props => props.active==props.name ? "#ffffff" : "#000000"};
`;

const Active = styled(Button)`
        background-color: #0095F6;
        height: 100%;
        width: 50%;
        position: absolute;
        right: ${props => props.active=="register" ? "0" : "5rem"};
        transition: right .7s;
`;

const activForm = React.createContext();

const ToggleBox = (props) => {

    return (
        <Box>
                <Active active={props.activeForm} />
                <Button active={props.activeForm} name="register" onClick={props.changeAcitveForm} > ثبت نام</Button>
                <Button active={props.activeForm} name="login" onClick={props.changeAcitveForm} > ورود</Button>
        </Box>
    );
};

export default ToggleBox;