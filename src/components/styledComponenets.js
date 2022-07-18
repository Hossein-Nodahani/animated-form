import React from "react"
import styled from "styled-components"


export const FormBox = styled.form`
    padding: 2rem;
    position: absolute;
    right : ${ props =>  props.type =="register" ? "0" : "20rem" };
    display: flex;
    flex-direction: column;
    height: 80%;
    margin-top: 15px;
`
export const Input = styled.input`
    /* outline: none;
    border: none; */
    padding: 10px;
    margin: 5px 0;
    width: ${props => props.type =="checkbox" ? "2rem" : "16rem"};
`;

export const Error = styled.span`
    color: #ffffff;
    font-size: .7rem;
    background-color: red;
    padding: 1px 5px;
`