import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={"/"} className={styles.navButton}>
        Home
      </Link>
      <Link href={"/portfolio"} className={styles.navButton}>
        Portfolio
      </Link>
      <Link href={"/about"} className={styles.navButton}>
        About
      </Link>
    </nav>
  );
}
