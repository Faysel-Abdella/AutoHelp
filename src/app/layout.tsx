import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const loraSans = Lora({
  variable: "--font-lora-sans",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoHelpUSA — First Car Buying in the U.S. for Newcomers",
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
    "AutoHelpUSA",
    "Newcomer auto",
    "car in U.S.",
  ],
  authors: [
    {
      name: "AutoHelpUSA",
    },
  ],

  openGraph: {
    title: "AutoHelpUSA",
    description: "First Car in the U.S. for Newcomers | Stress-Free Car Buying",
    type: "website",
    locale: "en_US",
    // url: "" Add the url of the website after hosting
    siteName: "AutoHelpUSA",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${loraSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
