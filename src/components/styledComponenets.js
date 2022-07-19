import React from "react"
import styled from "styled-components"


export const FormBox = styled.form`
    padding: 1rem 2rem 0;
    position: absolute;
    right : ${ props =>  props.type =="register" ? (props.activeForm =="register" ? "0" : "-20rem") : (props.activeForm =="login" ? "0" : "20rem")};
    height: 85%;
    top: 4.5rem;
    transition: right .7s;
    width: 100%;
    
    >div {
        margin-top: 5px;
        height: 5rem;
    }

    >div>div {
            display: flex;
            align-items: center;
    }

    >div>button {
        background-color: #0095F6;
        position: absolute;
        bottom: 1.2rem ;
        margin: 0 auto;
        padding: .6rem;
        width: 16rem;
        border-radius: 8px;
        border: none;
        outline:none ;
        color: #ffffff;
        cursor: pointer;
    }
`

export const Label = styled.label`
        color: #606770;
        font-size: ${ props => props.accept ? ".7rem" : "1rem"};
        margin-right: ${ props => props.accept ? ".5rem" : "0"};
`;

export const Input = styled.input`
    outline: none;
    border: 1px solid #606770;
    padding: 5px 10px;
    width: ${props => props.type =="checkbox" ? "defult" : "16rem"};
    border-radius: 4px;
`;

export const Error = styled.span`
    color: red;
    font-size: .7rem;
    background-color: rgba(200,20,0,.3);
    padding: 1px 5px;
    transition: all 2s;
`