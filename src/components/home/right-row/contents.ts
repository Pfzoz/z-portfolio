"use client";

import styled from "styled-components";

export const RightRowDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 20%;
  background-color: ${(props) => props.theme.secondary};
  font-family: "Roboto Thin";
  align-items: center;
`;
