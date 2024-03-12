"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) =>
    props.theme.mode === "light"
      ? "0 0.2rem 0.1rem black"
      : "0 0.2rem 0.1rem gray"};

  @media screen and (max-width: 728px) {
    height: fit-content;
  }
`;

export const TitleDiv = styled.div`
  display: grid;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  background-color: ${(props) => props.theme.fourth};
  justify-content: center;

  @media screen and (max-width: 728px) {  
    align-items: center;
    justify-content: center;
    padding: 2em;
  }
`;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.title};
  font-size: 4em;
  font-family: "Roboto Thin";
  width: fit-content;
  height: fit-content;
  justify-self: center;
  text-shadow: 0.08rem 0.09rem 0.01rem
    ${(props) =>
      props.theme.mode === "light"
        ? "rgba(255, 255, 255, 0.3)"
        : "rgba(0, 0, 0, 1)"};
  grid-column: 2;

  @media screen and (max-width: 728px) {
    text-align: center;
  }
`;

export const NavbarDiv = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: center;
  gap: 2em;
  background-color: ${(props) => props.theme.third};

  @media screen and (max-width: 728px) {
    padding: 1em 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 300px) {
    flex-direction: column;
  }
`;

export const NavbarLink = styled(Link)`
  width: fit-content;
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.text};
  font-size: 1.4rem;
  font-family: "Roboto Thin";
  text-decoration: none;
  border-bottom: 1px solid transparent;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    color: hsl(240, 0%, 0%);
    transition: ease-in-out 0.2s;
    border-color: ${(props) => props.theme.fourth};
  }

  &:active {
    color: ${(props) => props.theme.text};
  }
`;

export const GitHubIcon = styled(Image)`
  grid-column: 1;
`;
