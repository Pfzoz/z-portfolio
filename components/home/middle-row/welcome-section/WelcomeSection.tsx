"use client";

import upperStyles from "../middle-row.module.css";
import styles from "./welcome-section.module.css";
import contents from "./contents";
import { Paragraph, SubTitle } from "../../../text/contents";
import { useEffect } from "react";
export default function WelcomeSection() {
  useEffect(() => {
    const texts = document.getElementsByClassName(upperStyles.textOff);
    for (let i = 0; i < texts.length; i++) {
      texts[i].classList.toggle(upperStyles.textOff, false);
    }
  }, [])

  return (
    <section id="welcomeSection" className={`${styles.default} ${upperStyles.textOff}`}>
      <SubTitle id="welcomeTitle">
        Welcome to my blog!
      </SubTitle>
      <Paragraph>
        {contents.welcomeSection.p1}
      </Paragraph>
      <Paragraph>
        {contents.welcomeSection.p2}
      </Paragraph>
    </section>
  );
}
