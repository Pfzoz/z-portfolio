"use client";

import { useEffect } from "react";
import {
  HeaderDiv,
  HeaderTitle,
  NavbarDiv,
  NavbarLink,
  TitleDiv,
} from "./contents";

export default function Header() {
  return (
    <HeaderDiv id="header">
      <TitleDiv>
        <HeaderTitle>Pedro H. F. Zoz</HeaderTitle>
      </TitleDiv>
      <NavbarDiv>
        <NavbarLink href={"/"}>Home</NavbarLink>
        <NavbarLink href={"/portfolio"}>Portfolio</NavbarLink>
        <NavbarLink href={"/stack"}>Stack</NavbarLink>
        <NavbarLink href={"/about"}>About</NavbarLink>
      </NavbarDiv>
    </HeaderDiv>
  );
}
