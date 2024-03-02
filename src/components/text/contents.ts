'use client'

import styled from "styled-components";

export const Paragraph = styled.p<{width?: string}>`
    font-size: 1.5rem;
    width: ${props => props.width ? props.width : "fit-content"};
    height: fit-content;
    background-color: rgb(240, 235, 160, 0.08);
    color: ${props => props.theme.text};
    font-family: "Roboto Thin";
    align-content: center;
    transition: ease-in-out 0.4s;
`
export const SubTitle = styled.h2<{width?: string}>`
    font-size: 3rem;
    height: fit-content;
    width: ${props => props.width ? props.width : "fit-content"};
    align-content: center;
    color: ${props => props.theme.text};
    font-family: "Roboto Thin";
    transition: ease-in-out 0.4s;
`