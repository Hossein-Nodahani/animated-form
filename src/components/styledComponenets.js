import React from "react"
import styled from "styled-components"


export const FormBox = styled.form`
    padding: .2rem 2rem 0;
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

    >div:nth-child(5){
        height: 3rem;
    }

    >div>div {
            display: flex;
            align-items: center;
    }

    >div>button {
        background-color: #0095F6;
        padding: .6rem;
        margin-top: ${props => props.type=="register" ? ".5rem" : "9rem"};
        width: 16rem;
        border-radius: 8px;
        border: none;
        outline:none ;
        color: #ffffff;
        cursor: pointer;
        font-size: 1rem;
    }
`

export const Label = styled.label`
        color: #606770;
        font-size: ${ props => props.accept ? ".7rem" : "1rem"};
        margin-right: ${ props => props.accept ? ".5rem" : "0"};
`;

export const Input = styled.input`
    outline: none;
    border: 1.5px solid ${props => props.isFocused[props.name] ? (props.errors[props.name] ? "rgb(241,78,69)" : "rgb(0,213,52)") : "rgba(0,0,0,.2)"} ;
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