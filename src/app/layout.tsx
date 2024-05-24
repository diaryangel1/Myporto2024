import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvide";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sena Developer Portofolio",
  description: "Portofolio of Sena Developer",
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
        <TransitionProvider> {children}</TransitionProvider>
      </body>
    </html>
  );
}
