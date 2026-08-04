import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ceyhan Ağır Vasıta Servisi | Kocaeli Körfez 7/24 Yol Yardım",
  description: "Kocaeli Körfez'de 7/24 ağır vasıta yol yardım, fren (Körfez Frenci), lastik tamiri (Körfez Lastik), oto elektrik, makas ve periyodik bakım hizmetleri. Hızlı ve uzman tır servisi.",
  keywords: "Körfez Frenci, Körfez ağır vasıta, Körfez yol yardım, Körfez lastik, ceyhan tır servisi, kocaeli tır servisi, körfez tır lastikçi, abs ebs fren tamiri, makas tamiri, ağır vasıta oto elektrik",
  authors: [{ name: "Ceyhan CYH Grup" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body>
        <Header />
        <main style={{ flex: "1 0 auto" }}>{children}</main>
        <Footer />
        <FloatingCTAs />
      </body>
    </html>
  );
}
