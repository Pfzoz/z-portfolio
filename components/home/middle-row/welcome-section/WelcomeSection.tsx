import styles from "./welcome-section.module.css";
import contents from "./contents";
export default function WelcomeSection() {
  return (
    <section className={styles.default}>
      <h2>Welcome to my blog!</h2>
      <p className={styles.paragraphText}>{contents.welcomeSection.description}</p>
      <p className={styles.paragraphText}>Sorry but this site is under construction at the moment :/</p>
    </section>
  );
}
