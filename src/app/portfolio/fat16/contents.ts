"use client";

import styled from "styled-components";

export const Title = styled.h2`
  font-size: 5rem;
  margin-bottom: 0.8em;
  margin-top: 1em;
  height: fit-content;
  width: fit-content;
  align-content: center;
  font-weight: normal;
  color: ${(props) => props.theme.text};
  font-family: "Roboto Thin";
`

export const MainContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  font-family: "Roboto Thin";
  font-size: 1.5em;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 80%;
  width: 100%;
`;
