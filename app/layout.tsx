import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProviders } from "./providers/ThemeProviders";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nebula Portfolio",
  description: "Learning the galaxy is great, especially when you explore the wormholes...I am the curios, middle frontend developer, you can hire me btw!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProviders>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
