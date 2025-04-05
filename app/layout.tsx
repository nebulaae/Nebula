import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProviders } from "./providers/ThemeProviders";

import { Header } from "@/components/shared/Header";

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
  icons: "favicon.svg",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProviders>
            <Header />
            {children}
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
