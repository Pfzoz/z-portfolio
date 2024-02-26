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
      ></div>
      <button className={styles.openButton} onClick={() => setOpen(!open)} />
    </>
  );
}
