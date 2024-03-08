"use client";

import { useEffect, useState } from "react";
import { IndexDiv, IndexEntry, IndexFixDiv, IndexTitle } from "./contents";

export default function IndexRow() {
  const [active, setActive] = useState("false");
  const [mounted, setMounted] = useState("false");
  useEffect(() => {
    document.body.addEventListener("scroll", () => {
      const header = document.getElementById("header");
      if (header) {
        const rect = header.getBoundingClientRect();
        if (rect.bottom < 0 && active === "false") {
          setActive("true");
        } else if (rect.bottom >= 0 && active === "true") {
          setActive("false");
        }
      }
    });
  });

  useEffect(() => {
    setMounted("true");
  }, []);

  return (
    <IndexDiv>
      <IndexFixDiv $active={active} $mounted={mounted}>
        <IndexTitle>Index</IndexTitle>

        <IndexEntry
          onClick={() => {
            document
              .getElementById("welcomeSection")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Bem Vindo
        </IndexEntry>
        <IndexEntry
          onClick={() => {
            document
              .getElementById("projectSection")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Projeto Atual
        </IndexEntry>
        <IndexEntry
          onClick={() => {
            document
              .getElementById("newsSection")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Novidades
        </IndexEntry>
      </IndexFixDiv>
    </IndexDiv>
  );
}
