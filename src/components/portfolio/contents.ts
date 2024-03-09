"use client"

import styled from "styled-components";

export const DefaultPostInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    border: 1px solid ${(props) => props.theme.text};
    padding: 1em;
`

export const DefaultPostInfoP = styled.p`
    font-size: 1.5rem;
    color: ${(props) => props.theme.text};
`