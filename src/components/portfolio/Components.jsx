"use client";

import { useEffect } from "react";
import styles from "./portfolio.module.css";

export function PortfolioTitle() {
  useEffect(() => {
    document
      .getElementById("portfolioTitle")
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
      <h1 id="portfolioTitle" className={`${styles.title} ${styles.titleOff}`}>
        Portfolio
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
