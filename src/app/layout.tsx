import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* GRADASI WARNA */}
        <div className="h-screen w-screen bg-gradient-to-b from-[#D3D9D4] to-[#748D92]">
          <nav className="h-24">
            <Navbar />
          </nav>
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
