import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PAGIR",
  description: "Pagir, in Tamil means “share”. Growing is hard at every age, but the transition into what society calls “adulthood” can really do a number on us. Educational and allied institutions of competitive learning are the primary places of care we have for young people today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
