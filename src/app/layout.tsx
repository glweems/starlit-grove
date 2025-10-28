import type { Metadata } from "next";
import Image from "next/image";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

import { content } from "@/lib/data";
import Link from "next/dist/client/link";
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
    url: content.site.domain,
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
        {/* NAV: glass bar */}
        <header className="w-full bg-[color:var(--bg)] text-[color:var(--fg)] shadow-sm font-serif">
          <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
            {/* Logo or Title */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-semibold tracking-tight">
                Starlit Grove
              </span>
            </Link>

            {/* Simple Nav */}
            <nav className="flex items-center gap-3 text-md font-medium">
              <Link
                href="/packages"
                className="hover:text-[color:var(--accent)] transition-colors"
              >
                Events
              </Link>
              <Link
                href="/gallery"
                className="hover:text-[color:var(--accent)] transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/booking"
                className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-[color:var(--fg)] font-semibold hover:opacity-90 transition"
              >
                Book Now
              </Link>
            </nav>
          </div>
        </header>
        <main className="bg-white text-[var(--fg)] flex-grow">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-[color:var(--fg)/0.12] bg-[color:var(--panel)/0.08]">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[color:var(--fg)/0.8]">
            Anna, Texas · Direct inquiries ·{" "}
            <a
              className="underline"
              href={`mailto:${content.site.contactEmail}`}
            >
              {content.site.contactEmail}
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
