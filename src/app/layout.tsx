import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const loraSans = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SureDriveUSA — First Car Buying in the U.S. for Newcomers",
  description:
    "Buying your first car in the U.S. as a newcomer? We make it stress-free, affordable, and simple. Get expert help, save $4,200+ on average, and secure auto loans with a 92% approval rate. Start with a FREE consultation today!",
  keywords: [
    "buying a car as a newcomer",
    "auto loans for immigrants",
    "first car in the U.S.",
    "car buying help",
    "auto loans for newcomers",
    "car buying help for immigrants",
    "buy a car in the U.S. with no credit",
    "SureDriveUSA",
    "Sure drive USA",
    "Newcomer auto",
    "car in U.S.",
  ],
  authors: [
    {
      name: "SureDriveUSA",
    },
  ],

  openGraph: {
    title: "SureDriveUSA",
    description: "First Car in the U.S. for Newcomers | Stress-Free Car Buying",
    type: "website",
    locale: "en_US",
    url: "www.suredriveusa.com",
    siteName: "SureDriveUSA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${interSans.variable} ${loraSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
