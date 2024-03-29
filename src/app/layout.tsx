import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro H.F Zoz's Blog",
  description: "Pedro H.F Zoz's Blog",
};

function Footer() {
  return <footer></footer>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body style={{ visibility: "hidden" }} className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
