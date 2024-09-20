import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/homepage/navbar/Navbar";


export const metadata: Metadata = {
  title: "DotCon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
