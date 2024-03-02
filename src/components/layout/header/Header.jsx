import Navbar from "./navbar/Navbar";
import TitleBar from "./title-bar/TitleBar";
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <TitleBar />
      <Navbar />
    </header>
  );
}
