import styles from "./page.module.css";

function Welcome() {
  return (
    <h2 style={{ fontFamily: "Roboto Thin" }}>Welcome To My Blog: More updates to come!</h2>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.middleRow}>
        <Welcome />
      </section>
    </main>
  );
}
