"use client";

import { useEffect } from "react";
import styles from "./about.module.css";

export function AboutTitle() {
  useEffect(() => {
    document
      .getElementById("aboutTitle")
      ?.classList.toggle(styles.titleOff, false);
    document
      .getElementById("titleUnderline")
      ?.classList.toggle(styles.titleUnderlineOff, false);
    document
      .getElementById("titleUnderlineFade")
      ?.classList.toggle(styles.titleUnderlineOff, false);
  }, []);
  return (
    <>
      <h1 id="aboutTitle" className={`${styles.title} ${styles.titleOff}`}>
        About Me  
      </h1>
      <div className={styles.titleUnderlineContainer}>
        <span
          id="titleUnderline"
          className={`${styles.titleUnderline} ${styles.titleUnderlineOff}`}
        ></span>
        <span
          id="titleUnderlineFade"
          className={`${styles.titleUnderlineFade} ${styles.titleUnderlineOff}`}
        ></span>
      </div>
    </>
  );
}
