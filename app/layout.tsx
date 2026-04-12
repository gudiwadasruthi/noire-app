import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Noire",
  description: "Noire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col bg-[#080604] font-sans text-[#D4C4A0]">
      <Navbar />
        {children}
      </body>
    </html>
  );
}
