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

  font-size: 4.2rem;
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
  font-size: large;
  filter: ${props => props.theme.mode === "light" ? "drop-shadow(1px 1px 1px black)" : "drop-shadow(2px 2px 0px gray)"}
`;

export { DBtn, ContrastCircle, ContrastIconStyled };
