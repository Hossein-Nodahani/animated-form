import React , {useState} from 'react';
import styled from 'styled-components';

import ToggleBox from './ToggleBox';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Box = styled.div`
        width: 20rem;
        height: 35rem;
        background-color: #FFFFFF;
        border-radius: 20px;
        padding: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
`;

const Container = () => {

    const [active , setActive] = useState("register");

    const clickHandeler = (event) =>{
            event.target.name=="register" ? setActive("register") : setActive("login");
            console.log(event.target);
    }

    return (
        <>
               <Box >
                    <ToggleBox activeForm={active}  changeAcitveForm={clickHandeler} />
                    <RegisterForm  activeForm={active}/>
                    <LoginForm activeForm={active} />
               </Box >
        </>
    );
};

export default Container;