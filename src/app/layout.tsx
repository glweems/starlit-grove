import type { Metadata } from "next";
import Image from "next/image";
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
        {/* NAV: glass bar */}
        <header className="fixed left-0 right-0 top-0 z-40">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-b-2xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.35] px-4 py-3 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium tracking-wide text-[color:var(--bg)]/90">
                Starlit Grove
              </span>{" "}
            </div>
            <nav className="hidden gap-2 sm:flex">
              <a
                href="#stay"
                className="rounded-full px-3 py-1.5 text-sm text-[var(--bg)]/85 hover:bg-[color:var(--bg)/0.1]"
              >
                Stay
              </a>
              <a
                href="#events"
                className="rounded-full px-3 py-1.5 text-sm text-[var(--bg)]/85 hover:bg-[color:var(--bg)/0.1]"
              >
                Events
              </a>
              <a
                href="#gallery"
                className="rounded-full px-3 py-1.5 text-sm text-[var(--bg)]/85 hover:bg-[color:var(--bg)/0.1]"
              >
                Photos
              </a>
              <a
                href="#location"
                className="rounded-full px-3 py-1.5 text-sm text-[var(--bg)]/85 hover:bg-[color:var(--bg)/0.1]"
              >
                Location
              </a>
            </nav>
            <a
              href="mailto:stay@starlitgrove.com"
              className="rounded-full bg-[var(--accent)] px-4 py-1.5 text-sm font-medium text-[var(--fg)] hover:opacity-95"
            >
              Contact
            </a>
          </div>
        </header>
        <main className="mt-10">{children}</main>

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
