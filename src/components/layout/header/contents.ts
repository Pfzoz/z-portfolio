"use client";

import styled from "styled-components";
import Link from "next/link";

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: center;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80%;
  background-color: ${(props) => props.theme.fourth};
  justify-content: center;
`;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.title};
  font-size: 3.5rem;
  font-family: "Roboto Thin";
  text-shadow: 0.1rem 0.2rem 0.2rem ${props => props.theme.mode === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.9)"};
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
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.9);
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

  &:hover {
    cursor: pointer;
    color: hsl(240, 20%, 35%);
    transition: ease-in-out 0.2s;
    border-color: ${props => props.theme.fourth};
  }

  &:active {
    color: ${(props) => props.theme.text};
  }
`;
