import Image from "next/image";
import { FooterButton, FooterDiv } from "./contents";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterDiv>
      <FooterButton href={"https://github.com/pfzoz"}>
        <Image
          src={"/images/github-icon.svg"}
          alt="github icon"
          width={78}
          height={78}
        ></Image>
      </FooterButton>
      <FooterButton href={"https://www.linkedin.com/in/pedro-zoz"}>
        <Image
          style={{filter: "invert(1)"}}
          src={"/images/linkedin-icon.svg"}
          alt="linkedin icon"
          width={78}
          height={78}
        ></Image>
      </FooterButton>
    </FooterDiv>
  );
}
