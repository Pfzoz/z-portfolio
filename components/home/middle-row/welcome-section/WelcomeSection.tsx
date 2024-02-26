import styles from "./welcome-section.module.css";
import contents from "./contents";
export default function WelcomeSection() {
  return (
    <section className={styles.default}>
      <h2>Welcome to my blog!</h2>
      <p className={styles.paragraphText}>{contents["welcome-section"]["description"]}</p>
    </section>
  );
}
