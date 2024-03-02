"use client";

import styled from "styled-components";

export const IndexDiv = styled.div`
  width: 20%;
  background-color: ${(props) => props.theme.secondary};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IndexFixDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 0;
  gap: 1em;
`;

export const IndexTitle = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: 3rem;
  margin-bottom: 1em;
  font-family: "Roboto Thin";
`;

export const IndexEntry = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 1.75rem;
  font-family: "Roboto Thin";
  border-bottom: 1px solid ${(props) => props.theme.text};

  &:hover {
    cursor: pointer;
    color: hsl(0, 0%, 50%);
  }

  &:active {
    color: ${(props) => props.theme.text};
  }

`;
