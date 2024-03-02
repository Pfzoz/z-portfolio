"use client";

import styled from "styled-components";
import ContrastIcon from "@mui/icons-material/Contrast";

const DBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  position: absolute;
  width: fit-content;
  height: fit-content;
  right: 4%;
  top: 3.5%;
  color: ${(props) => (props.theme.mode === "light" ? "white" : "black")};

  &:hover {
    cursor: pointer;
    color: ${(props) => (props.theme.mode === "light" ? "black" : "white")};
    transition: ease-in-out 0.1s;
  }

  &:active {
    color: gray;
    transition: ease-in-out 0.05s;
  }
`;

const ContrastCircle = styled.div<{$active?: string}>`
  border-radius: 100%;
  width: 0%;
  height: 0%;
  background-color: ${(props) => (props.theme.mode === "light" ? "black" : "white")};
  opacity: 0%;
  position: absolute;
  pointer-events: none;

  ${props => props.$active && props.$active === "true" &&`
    width: 600%;
    height: 600%;
    opacity: 50%;
    transition: ease-in-out 0.2s;
  `}

  /* z-index: -1; */
`

const ContrastIconStyled = styled(ContrastIcon)`
  width: 4rem;
  height: 4rem;
`;

export { DBtn, ContrastCircle, ContrastIconStyled };
