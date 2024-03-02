"use client";

import styled from "styled-components";

export const RightRowDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 20%;
  background-color: ${(props) => props.theme.secondary};
  border-left: 0.2rem dashed rgba(0, 0, 0, 0.4);
  font-family: "Roboto Thin";
  align-items: center;
`;
