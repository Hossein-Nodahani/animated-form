import React ,{useState} from 'react';
import styled from 'styled-components';



const Box = styled.div`
    position: absolute;
    width: 50%;
    box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.5);
    -webkit-box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.5);
    border-radius: 25px;    
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
        transition: right .5s;
`;

const activForm = React.createContext();

const ToggleBox = () => {

    const [active , setActive] = useState("register");

    const clickHandeler = (event) =>{
            event.target.name=="register" ? setActive("register") : setActive("login");
    }

    return (
        <Box>
                <Active active={active} />
                <Button active={active} name="register" onClick={clickHandeler} > ثبت نام</Button>
                <Button active={active} name="login" onClick={clickHandeler} > ورود</Button>
        </Box>
    );
};

export default ToggleBox;