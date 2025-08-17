import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Signal - Airdrop for meeting new people",
  description: "Signal lets you send and receive interest in real time—no swiping, no guesswork. Join the waitlist for meaningful connections.",
  keywords: ["signal", "dating", "meeting people", "social", "connections", "waitlist", "nyc", "universities"],
  authors: [{ name: "Signal Team" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sendasignal.org'),
  openGraph: {
    title: "Signal - Airdrop for meeting new people",
    description: "Signal lets you send and receive interest in real time—no swiping, no guesswork.",
    type: "website",
    locale: "en_US",
    siteName: "Signal",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sendasignal.org',
  },
  twitter: {
    card: "summary_large_image",
    title: "Signal - Airdrop for meeting new people",
    description: "Signal lets you send and receive interest in real time—no swiping, no guesswork.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
