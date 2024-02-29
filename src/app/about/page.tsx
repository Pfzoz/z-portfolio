import styles from "./page.module.css"
import { AboutTitle } from "../../../components/about/Components";

export default function About() {
    return <main className={styles.default}>
        <AboutTitle/>
    </main>
}