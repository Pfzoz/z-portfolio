"use client";

import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function IndexRow() {
  const [open, setOpen] = useState(false);
  const [indexes, setIndexes] = useState(<></>);

  useEffect(() => {
    const h2s = document.querySelectorAll("h2");
    const indexesArray = [<></>];
    indexesArray.pop();
    h2s.forEach((value) => {
      indexesArray.push(
        <h3 onClick={() => value.scrollIntoView({ behavior: "smooth" })}>
          {value.textContent}
        </h3>
      );
    });
    setIndexes(<>{indexesArray}</>);
  }, []);

  return (
    <>
      <div
        id="indexRow"
        className={`${styles.default} ${open ? styles.open : ""}`}
      >
      </div>
      <button className={styles.openButton} onClick={() => setOpen(!open)} />
    </>
  );
}
