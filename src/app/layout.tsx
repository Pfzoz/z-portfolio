import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro H.F Zoz's Blog",
  description: "Pedro H.F Zoz's Blog",
};

function TitleBar() {
  return (
    <div className={styles.titleBar}>
      <h1 className={styles.title}>Pedro H.F. Zoz</h1>
    </div>
  );
}

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={"/"} className={styles.navButton}>
        Home
      </Link>
      <Link href={"/portfolio"} className={styles.navButton}>
        Portfolio
      </Link>
      <Link href={"/about"} className={styles.navButton}>
        About
      </Link>
    </nav>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <TitleBar />
      <Navbar />
    </header>
  );
}

function Footer() {
  return <footer className={styles.footer}></footer>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
