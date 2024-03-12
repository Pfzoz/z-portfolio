"use client";

import Image from "next/image";
import styled, { css } from "styled-components";

export const IndexDiv = styled.div<{ $mobileActive?: string }>`
  width: 20%;
  background-color: ${(props) => props.theme.secondary};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  @media screen and (max-width: 728px) {
    position: absolute;
    left: -70vw;
    top: 0;
    height: 100vh;
    width: 70vw;
    transition: ease-in-out 0.7s;

    ${(props) =>
      props.$mobileActive === "true"
        ? css`
            left: 0;
            box-shadow: 2rem 0.4rem 2.2rem black;
          `
        : ""}
  }
`;

export const IndexFixDiv = styled.div<{ $active?: string; $mounted?: string }>`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 0;
  gap: 1em;
  transition: ease-in-out 0.7s;
  ${(props) =>
    props.$mounted === "true"
      ? "transform: translateX(0%);"
      : "transform: translateX(-100%);"}
  ${(props) =>
    props.$active &&
    props.$active === "true" &&
    css`
      top: 0;
      position: fixed;
    `}
`;

export const IndexTitle = styled.h2<{ $mounted?: string }>`
  color: ${(props) => props.theme.text};
  font-size: 3rem;
  margin-bottom: 1em;
  font-family: "Roboto Thin";
`;

export const IndexEntry = styled.a<{ $hook?: string }>`
  text-decoration: none;
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

export const IndexButton = styled.div`
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.contrast};
  border: 2px solid ${(props) => props.theme.fourth};
  border-radius: 4rem;
  position: fixed;
  font-size: 3vh;
  width: 5em;
  height: 5em;
  min-width: 95px;
  min-height: 95px;
  padding: 0.11rem;
  left: calc(20% - 2.5em);
  bottom: 1%;
  color: ${(props) => (props.theme.mode === "light" ? "white" : "black")};
  z-index: 1;

  @media screen and (max-width: 728px) {
    visibility: visible;
  }

  @media screen and (max-width: 340px) {
    width: 2em;
    height: 2em;
  }
`;

export const IndexIcon = styled(Image)`
  height: 80%;
  width: 80%;
  filter: ${(props) =>
    props.theme.mode === "light"
      ? "drop-shadow(1px 1px 1px black)"
      : "drop-shadow(1px 1px 0px gray)"};
`;
