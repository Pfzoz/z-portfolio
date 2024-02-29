import styles from './page.module.css';
import { PortfolioTitle } from '../../../components/portfolio/Components';

export default function Portfolio() {
    return <main className={styles.default}>
        <PortfolioTitle/>
    </main>;
}