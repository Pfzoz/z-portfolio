import IndexRow from "../../components/home/index/IndexRow";
import MiddleRow from "../../components/home/middle-row/MiddleRow";
import RightRow from "../../components/home/right-row/RightRow";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <IndexRow/>
      <MiddleRow/>
      <RightRow/> 
    </main>
  );
}
