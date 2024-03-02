import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import RootComponent from "../components/page/RootComponent";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro H.F Zoz's Blog",
  description: "Pedro H.F Zoz's Blog",
};

function Footer() {
  return <footer className={styles.footer}></footer>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body style={{ visibility: "hidden" }} className={inter.className}>
        <RootComponent children={children} />
      </body>
    </html>
  );
}
