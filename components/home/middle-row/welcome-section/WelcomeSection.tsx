import styles from "./welcome-section.module.css";
import contents from "./contents";
import { Paragraph, SubTitle } from "../../../text/contents";
export default function WelcomeSection() {
  return (
    <section id="welcomeSection" className={styles.default}>
      <SubTitle id="welcomeTitle">Welcome to my blog!</SubTitle>
      <Paragraph>
        {contents.welcomeSection.p1}
      </Paragraph>
      <Paragraph>
        {contents.welcomeSection.p2}
      </Paragraph>
    </section>
  );
}
