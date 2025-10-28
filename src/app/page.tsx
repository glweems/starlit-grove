"use client";

import Image from "next/image";
import { roomData, content, bookingScript } from "@/lib/data";
import SleepGallery from "@/components/SleepGallery";
import HeroGallery from "@/components/Gallery";
import AboutSection from "@/components/AboutSection";
import SleepsSection from "@/components/SleepsSection";
import Link from "next/link";

/* ---------- UTILS ---------- */

const motionOK = () =>
  typeof window !== "undefined" &&
  (window.matchMedia?.("(prefers-reduced-motion: no-preference)").matches ??
    true);

/* ---------- PAGE ---------- */

export default function HomeOverhaul() {
  const { hero, rates, features, location, site } = content;

  return (
    <div className="">
      {/* HERO SECTION */}
      <section className="relative w-full h-[75vh] overflow-hidden">
        <Image
          fill
          priority
          src={hero.images[0].src}
          alt={hero.images[0].src}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(47,60,50,0.4)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-[var(--bg)]">
          <h1 className="text-5xl font-serif font-semibold sm:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-3 text-xl tracking-wide text-[var(--bg)]/90">
            {hero.subtitle}
          </p>
          <p className="mt-2 text-sm text-[var(--bg)]/85">{hero.kicker}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href={hero.cta.href}
              className="rounded-full bg-[var(--accent)] px-6 py-3 font-medium text-[var(--fg)] hover:opacity-95 w-[200px] text-center"
            >
              {hero.cta.label}
            </Link>
            <a
              href={hero.cta.secondaryHref}
              className="rounded-full border border-[color:var(--bg)/0.7] px-6 py-3 font-medium text-[var(--bg)] hover:bg-[color:var(--bg)/0.08] w-[200px] text-center mt-0 sm:mt-0"
            >
              {hero.cta.secondaryLabel}
            </a>
          </div>
        </div>
      </section>

      <HeroGallery photos={roomData} />
      {/* STAY DETAILS */}
      <AboutSection />

      <SleepsSection />
      {/* DUAL PATH CARDS */}
      <section id="choose" className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/packages"
            className="group relative overflow-hidden rounded-3xl border border-[color:var(--fg)/0.15] p-6 bg-gradient-to-tr from-[color:var(--panel)/0.10] to-[color:var(--panel)/0.02]"
          >
            <div className="pointer-events-none absolute -right-10 top-1/3 h-56 w-56 rounded-full bg-[var(--muted)]/18 blur-2xl transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-semibold font-serif">Host an Event</h3>
            <p className="mt-2 text-[color:var(--fg)/0.85]">
              {features.summaryBullets[features.summaryBullets.length - 1]}
            </p>
            <span className="mt-4 inline-block rounded-full border border-[color:var(--fg)/0.25] px-5 py-2 text-sm font-medium">
              See packages
            </span>
          </a>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="mx-auto max-w-6xl px-4 pb-14">
        <div className=" p-2">
          <h3 className="text-2xl font-semibold">Location</h3>
          <p className="mt-2 text-[color:var(--fg)/0.85]">
            {location.city}, {location.state} — near McKinney and DFW.{" "}
            {location.areaHighlights[0]}
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[color:var(--fg)/0.15]">
            <iframe
              src={`${location.mapEmbedUrl}&output=embed`}
              loading="lazy"
              className="h-[380px] w-full"
              title="Map to Starlit Grove"
            />
          </div>
        </div>
        <div className="mt-10">
          <Link
            href="/booking"
            className="block w-full text-center rounded-xl bg-[color:var(--accent)] px-6 py-4 text-lg font-semibold text-[color:var(--fg)] hover:opacity-90 transition"
          >
            Check Availability &amp; Book
          </Link>
        </div>
      </section>
    </div>
  );
}
