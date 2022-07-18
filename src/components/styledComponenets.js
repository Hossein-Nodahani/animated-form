import React from "react"
import styled from "styled-components"


export const FormBox = styled.form`
    padding: 1rem 2rem 0;
    position: absolute;
    right : ${ props =>  props.type =="register" ? "0" : "20rem" };
    height: 85%;
    top: 4.5rem;
    
    >div {
        margin-top: 5px;
        height: 5rem;
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
        color: #ffffff;
    }
`
export const Input = styled.input`
    outline: none;
    border: 1px solid #000;
    padding: 5px 10px;
    margin: 2px 0 0px;
    width: ${props => props.type =="checkbox" ? "2rem" : "16rem"};
    border-radius: 4px;
`;

export const Error = styled.span`
    color: #ffffff;
    font-size: .7rem;
    background-color: red;
    padding: 1px 5px;
    transition: all 2s;
`