import styles from "./title-bar.module.css";

export default function TitleBar() {
  return (
    <div className={`${styles.titleBar}`}>
      <h1 className={styles.title}>Pedro H.F. Zoz</h1>
    </div>
  );
}
