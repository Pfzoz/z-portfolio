"use client";

import Header from "../layout/header/Header";
import { DBtn } from "./contents";
import { DarkTheme, LightTheme } from "./themes";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import ConstrastIcon from "@mui/icons-material/Contrast";

export default function RootComponent({ children }) {
  const [theme, setTheme] = useState(LightTheme);
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme(DarkTheme);
    }
    document.body.style.visibility = "";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <DBtn
        onClick={() => {
          setTheme(theme.mode === "light" ? DarkTheme : LightTheme);
          localStorage.setItem(
            "theme",
            theme.mode === "light" ? "dark" : "light"
          );
          console.log(theme.mode);
        }}
      />
    </ThemeProvider>
  );
}
