"use client";

import styled from "styled-components";

export const AboutTitle = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: 5rem;
  align-self: flex-end;
  margin-right: 2em;
  margin-top: 0.8em;
  font-family: "Roboto Thin";
  font-weight: normal;
`

export const AboutMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80%;
  background-color: ${(props) => props.theme.primary};
  font-family: "Roboto Thin";
  font-size: 1.5em;
  align-items: center;
`;
