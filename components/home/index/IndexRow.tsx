"use client";

import { useState } from "react";
import styles from "./index.module.css";

export default function IndexRow() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        id="indexRow"
        className={`${styles.default} ${open ? styles.open : ""}`}
      >
        <h3 className={styles.index}
          onClick={() =>
            document
              .getElementById("welcomeTitle")
              ?.scrollIntoView({ behavior: "smooth", block: "nearest" } )
          }
        >
          ○ Welcome
        </h3>
      </div>
      <button className={styles.openButton} onClick={() => setOpen(!open)} />
    </>
  );
}
