"use client";

import styled from "styled-components";

export const PortfolioMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80%;
  background-color: ${(props) => props.theme.primary};
  font-family: "Roboto Thin";
  font-size: 1.5rem;
  align-items: center;
`;

export const PortfolioTitle = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: 5rem;
  margin-left: 2em;
  margin-top: 0.8em;
  align-self: flex-start;
  font-family: "Roboto Thin";
  font-weight: normal;
`;
