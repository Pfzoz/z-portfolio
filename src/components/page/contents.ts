"use client";

import styled from "styled-components";
import ConstrastIcon from "@mui/icons-material/Contrast";

const DBtn = styled(ConstrastIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  width: 2em;
  height: 2em;
  position: absolute;
  right: 7em;
  top: 2em;
  color: ${(props) => (props.theme.mode === "light" ? "white" : "black")};
  transition: ease-in-out 0.2s;

  &:hover {
    cursor: pointer;
    color: ${(props) => (props.theme.mode === "light" ? "black" : "white")};
  }

  &:active {
    color: gray;
  }
`;

export { DBtn };
