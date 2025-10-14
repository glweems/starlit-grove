import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

import { content } from "@/lib/data";
const geistSans = DM_Serif_Display({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starlit Grove — Events & Lodging in Anna, Texas",
  description:
    "Modern-country retreat on 20 acres with pond, game room, and event lawn. Sleeps 12. Events welcome.",
  openGraph: {
    title: "Starlit Grove — Events & Lodging",
    description:
      "Private countryside escape north of Dallas. Pond, game room, event-friendly. Sleeps 12.",
    url: "https://starlit-grove.vercel.app/",
    siteName: "Starlit Grove",
    images: [{ url: "/images/og-image.png", width: 1600, height: 900 }],
    locale: "en_US",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
