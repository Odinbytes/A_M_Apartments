import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Apple Mango Apartments",
  description: "Book your stay with us today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Navbar />

        <div className="pt-32">
        {children}
        </div>
      </body>
    </html>
  );
}
