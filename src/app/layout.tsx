import type { Metadata } from "next";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

import "../styles/fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "بلیط هواپیما و قطار",
  description: "تهیه بلیط هواپیما و قطارت با من",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
