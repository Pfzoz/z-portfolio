"use client";

import { useEffect } from "react";
import styles from "./indexes.module.css";

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function manageIndexes() {
  const sections = {
    welcomeTitle: "welcomeIndex",
  };
  let selected = false;
  for (const [key, value] of Object.entries(sections)) {
    const section = document.getElementById(key);
    const index = document.getElementById(value);
    if (!selected && section && isInViewport(section)) {
      index?.classList.add(styles.currentIndex);
      selected = true;
    } else {
      index?.classList.remove(styles.currentIndex);
    }
  }
}

function indexOnClick(section: string) {
  manageIndexes();
  document
    .getElementById(section)
    ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

export default function Indexes() {
  useEffect(() => {
    manageIndexes();
    document.body.addEventListener("scroll", () => {
      manageIndexes();
    });
    const indexes = document.getElementsByClassName(styles.index);
    for (let i = 0; i < indexes.length; i++) {
      indexes[i].classList.toggle(styles.indexOff, false);
    }
    document.getElementById("indexTitle")?.classList.toggle(styles.indexOff, false);
  }, []);
  return (
    <div className={styles.default}>
      <h2 id="indexTitle" className={`${styles.indexTitle} ${styles.indexOff}`}>
        Index
      </h2>
      <h3
        id="welcomeIndex"
        className={`${styles.index} ${styles.indexOff}`}
        onClick={() => indexOnClick("welcomeSection")}
      >
        ○ Welcome
      </h3>
    </div>
  );
}
