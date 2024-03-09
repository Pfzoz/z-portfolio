import Image from "next/image";
import {
  GitHubIcon,
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
        <NavbarLink href={"/portfolio"}>Portfólio</NavbarLink>
        <NavbarLink href={"/stack"}>Stack</NavbarLink>
        <NavbarLink href={"/about"}>Sobre</NavbarLink>
      </NavbarDiv>
    </HeaderDiv>
  );
}
