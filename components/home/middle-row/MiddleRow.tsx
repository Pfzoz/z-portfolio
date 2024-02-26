import styles from "./middle-row.module.css"
import WelcomeSection from "./welcome-section/WelcomeSection"

export default function MiddleRow() {
    return <div className={styles.default}>
        <WelcomeSection/>
    </div>
}