"use client";

import Image from "next/image";
import styled from "styled-components";

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
  z-index: 1;

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

  @media screen and (max-width: 728px) {
    top: auto;
    bottom: 1%;
    left: calc(80% - 2.5rem);
    font-size: 4vw;
    width: 5em;
    height: 5em;
    padding: 0.11rem;
    background-color: ${(props) => props.theme.contrast};
    border: 2px solid ${(props) => props.theme.fourth};
    border-radius: 4rem;
  }
`;

const ContrastCircle = styled.div<{ $active?: string }>`
  border-radius: 100%;
  width: 0%;
  height: 0%;
  background-color: ${(props) =>
    props.theme.mode === "light" ? "black" : "white"};
  opacity: 0%;
  position: absolute;
  pointer-events: none;

  @media screen and (min-width: 728px) {
    ${(props) =>
      props.$active &&
      props.$active === "true" &&
      `
    width: 40vh;
    height: 40vh;
    opacity: 50%;
    transition: ease-in-out 0.2s;
  `}
  }
`;

const DarkIcon = styled(Image)`
  height: 80%;
  width: 80%;
  filter: ${(props) =>
    props.theme.mode === "light"
      ? "drop-shadow(1px 1px 1px black)"
      : "invert(1) drop-shadow(2px 2px 0px gray)"};
`;

export { DBtn, ContrastCircle, DarkIcon };
