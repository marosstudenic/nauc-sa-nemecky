import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plynule nemecky",
  description: "Kurz nemeckého jazyka pre začiatočníkov a pokročilých - individuálne hodiny s lektorkou online. Dohodnite si prvú hodinu zadarmo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-w-screen">
      <body className={inter.className}><Header />{children}<Footer />
      </body>
    </html>
  );
}
