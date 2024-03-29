"use client";

import { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "../../themes";
import { ContrastCircle, DBtn, DarkIcon } from "./contents";

export default function Layout({ children }) {
  const [theme, setTheme] = useState(LightTheme);
  const [active, setActive] = useState("false");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme(DarkTheme);
    }
    document.body.style.visibility = "";
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <DBtn
        onMouseEnter={() => setActive("true")}
        onMouseLeave={() => setActive("false")}
        onClick={() => {
          if (theme.mode === "light") {
            setTheme(DarkTheme);
            localStorage.setItem("theme", "dark");
          } else {
            setTheme(LightTheme);
            localStorage.setItem("theme", "light");
          }
        }}
      >
        <DarkIcon width={75} height={75} src="/images/dark-icon.png" alt="dark mode btn" fontSize="inherit"/>
        <ContrastCircle $active={active} />
      </DBtn>
      {children}
      <Footer />
    </ThemeProvider>
  );
}
