import type { Metadata } from "next";
import "./globals.css";
import "../styles/fonts.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

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
