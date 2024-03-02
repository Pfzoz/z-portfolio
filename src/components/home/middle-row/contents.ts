'use client'

import styled from "styled-components";

export const MidRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  width: 60%;
  background-color: ${(props) => props.theme.primary};
  border-right: 0.2rem dashed rgba(0, 0, 0, 0.4);
  border-left: 0.2rem dashed rgba(0, 0, 0, 0.4);
  font-family: "Roboto Thin";
  align-items: center;
  transition: ease-in-out 0.4s;

  .textOff {
    opacity: 0%;
  }

  @media only screen and (max-width: 768px) {
    .default {
      border: none;
    }
  }
`;
