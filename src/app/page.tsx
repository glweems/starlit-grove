"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import heroImg from "@/../public/images/starlit-hero.webp";
import { galleryImages, PACKAGES } from "@/lib/data";

export default function HomePage() {
  /* ----- hero shrink behavior ----- */
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const heroHeight = Math.max(90 - scrollY / 10, 40);
  const titleScale = Math.max(1 - scrollY / 1000, 0.85);
  const titleOpacity = Math.max(1 - scrollY / 400, 0.5);

  /* ----- lightbox state ----- */
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });
  const closeLightbox = useCallback(
    () => setLightbox({ open: false, index: 0 }),
    []
  );
  const prev = useCallback(
    () =>
      setLightbox((s) => ({
        open: true,
        index: (s.index - 1 + galleryImages.length) % galleryImages.length,
      })),
    []
  );
  const next = useCallback(
    () =>
      setLightbox((s) => ({
        open: true,
        index: (s.index + 1) % galleryImages.length,
      })),
    []
  );
  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.open, closeLightbox, prev, next]);

  return (
    <main className="bg-[var(--bg)] text-[var(--fg)]">
      {/* ================= HERO ================= */}
      <section
        className="relative w-full overflow-hidden transition-[height] duration-300 ease-out"
        style={{ height: `${heroHeight}vh` }}
      >
        <Image
          fill
          priority
          src="/images/starlit-hero.webp"
          alt="Starlit Grove — Events & Lodging"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(47,60,50,0.45)]" />
        <div
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center transition-all duration-300 ease-out"
          style={{
            transform: `scale(${titleScale}) translateY(${scrollY / 10}px)`,
            opacity: titleOpacity,
            color: "var(--bg)", // light tan on hero
          }}
        >
          <h1 className="text-5xl font-serif font-semibold sm:text-6xl">
            Starlit Grove
          </h1>
          <p className="mt-3 text-xl tracking-wide text-[var(--bg)]/90">
            Events & Lodging
          </p>
          <p className="mt-2 text-sm text-[var(--bg)]/80">
            20 acres • Private pond • Game room • Sleeps 12 • Event-friendly
          </p>

          {/* Dual primary CTAs right in the hero */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#stay"
              className="rounded-full bg-[var(--accent)] px-6 py-3 font-medium text-[var(--fg)] hover:opacity-95"
            >
              Book the House
            </a>
            <a
              href="#events"
              className="rounded-full border border-[color:var(--bg)/0.6] px-6 py-3 text-[var(--bg)] hover:bg-[color:var(--bg)/0.1]"
            >
              Host an Event
            </a>
          </div>
        </div>
      </section>

      {/* quick facts bar */}
      <section className="border-b border-[color:var(--fg)/0.12] bg-[color:var(--panel)/0.1]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-3 text-center text-sm sm:grid-cols-4">
          <div>Sleeps 12</div>
          <div>3 Bed · 3 Bath</div>
          <div>20 Acres + Pond</div>
          <div>Events Welcome</div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            {/* Welcome */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Welcome</h2>
              <p className="text-[color:var(--fg)/0.85]">
                Your private countryside escape just north of Dallas. Spread
                across 20 peaceful acres with a pond, this spacious 3-bed,
                3-bath home with a game room is perfect for family getaways,
                retreats, or unforgettable celebrations under Texas skies.
              </p>
            </div>

            {/* Dual Offer cards: Stay vs Event (this is the clarity section) */}
            <section
              id="choose"
              aria-label="Two ways to book"
              className="grid gap-4 sm:grid-cols-2"
            >
              {/* Stay card */}
              <a
                id="stay"
                href="#the-space"
                className="block rounded-2xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.12] p-6 "
              >
                <h3 className="text-lg font-semibold">Book the House</h3>
                <ul className="mt-3 space-y-2 text-[color:var(--fg)/0.9]">
                  <li>Sleeps up to 12</li>
                  <li>Game room, fully stocked kitchen</li>
                  <li>Open living with pond views</li>
                  <li>Washer & dryer for longer stays</li>
                </ul>
                <div className="mt-4 inline-block rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--fg)]">
                  See amenities
                </div>
              </a>

              {/* Event card */}
              <a
                id="events"
                href="#packages"
                className="block rounded-2xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.12] p-6 hover:bg-[color:var(--panel)/0.16]"
              >
                <h3 className="text-lg font-semibold">Host an Event</h3>
                <ul className="mt-3 space-y-2 text-[color:var(--fg)/0.9]">
                  <li>Pond-side lawn, tent-friendly</li>
                  <li>Photo-worthy sunsets</li>
                  <li>Ample on-site parking</li>
                  <li>Flexible packages</li>
                </ul>
                <div className="mt-4 inline-block rounded-lg border border-[color:var(--fg)/0.35] px-4 py-2 text-sm">
                  View packages
                </div>
              </a>
            </section>

            {/* Airbnb-style mosaic preview + Show all */}
            <section
              aria-labelledby="galleryImages-title"
              className="space-y-4"
            >
              <div className="flex items-baseline justify-between">
                <h3 id="galleryImages-title" className="text-lg font-semibold">
                  Photo galleryImages
                </h3>
                <button
                  type="button"
                  onClick={() => setLightbox({ open: true, index: 0 })}
                  className="rounded-lg border border-[color:var(--fg)/0.2] px-3 py-1.5 text-sm hover:bg-[color:var(--panel)/0.08]"
                >
                  Show all photos
                </button>
              </div>

              <div className="grid gap-2 md:grid-cols-4 md:grid-rows-2">
                {/* big lead */}
                <button
                  type="button"
                  onClick={() => setLightbox({ open: true, index: 0 })}
                  className="relative col-span-2 row-span-2 h-[44vh] min-h-[320px] overflow-hidden rounded-l-2xl rounded-r-2xl md:rounded-r-none md:rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  aria-label={`Open image 1: ${galleryImages[0].alt}`}
                >
                  <Image
                    fill
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </button>

                {[1, 2, 3, 4].map((i, idx) => (
                  <button
                    key={galleryImages[i].src}
                    onClick={() => setLightbox({ open: true, index: i })}
                    className={[
                      "relative h-[21vh] min-h-[150px] overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--accent)]",
                      idx === 0 ? "rounded-tr-2xl" : "",
                      idx === 3 ? "rounded-br-2xl" : "",
                      "md:rounded-none rounded-xl",
                    ].join(" ")}
                    aria-label={`Open image ${i + 1}: ${galleryImages[i].alt}`}
                  >
                    <Image
                      fill
                      src={galleryImages[i].src}
                      alt={galleryImages[i].alt}
                      className="object-cover"
                      sizes="(max-width:768px) 50vw, 25vw"
                    />
                  </button>
                ))}
              </div>
            </section>

            {/* The Space (amenities) */}
            <div id="the-space" className="space-y-4">
              <h2 className="text-xl font-semibold">House Amenities</h2>
              <div className="rounded-2xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.12]">
                <div className="grid gap-0 sm:grid-cols-2">
                  {[
                    {
                      t: "Capacity",
                      b: "3 Bedrooms · 3 Baths · Sleeps 12",
                      s: "Ideal for groups, families, and event stays.",
                    },
                    {
                      t: "Game Room",
                      b: "Foosball, board games, generous hangout space",
                    },
                    {
                      t: "Kitchen",
                      b: "Fully stocked for family meals and event prep",
                    },
                    {
                      t: "Living Area",
                      b: "Open plan with large windows overlooking pond and acreage",
                    },
                    { t: "Laundry", b: "Washer & dryer for extended stays" },
                  ].map((f, i) => (
                    <div
                      key={i}
                      className="border-t border-[color:var(--fg)/0.08] p-5 first:border-t-0 sm:first:border-t"
                    >
                      <div className="text-xs uppercase tracking-wide text-[color:var(--fg)/0.6]">
                        {f.t}
                      </div>
                      <div className="mt-1 font-medium">{f.b}</div>
                      {f.s && (
                        <div className="mt-1 text-sm text-[color:var(--fg)/0.75]">
                          {f.s}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Packages teaser (clear pathway to events page) */}
            <section id="packages" className="space-y-4">
              <h2 className="text-xl font-semibold">Event Packages</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {PACKAGES.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-2xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.12] p-6"
                  >
                    <div className="text-lg font-semibold">{p.name}</div>
                    <div className="mt-1 text-sm text-[color:var(--fg)/0.75]">
                      {p.price}
                    </div>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-[color:var(--fg)/0.9]">
                      {p.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <a
                      href="/events"
                      className="mt-4 inline-block rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--fg)] hover:opacity-95"
                    >
                      View details
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Property + Location */}
            <div id="the-property" className="space-y-4">
              <h2 className="text-xl font-semibold">The Property</h2>
              <ul className="list-disc space-y-2 pl-5 text-[color:var(--fg)/0.9]">
                <li>
                  20 acres of Texas beauty with room to wander and explore.
                </li>
                <li>Private pond for fishing, photos, or quiet reflection.</li>
                <li>
                  Spacious deck and yard for morning coffee or evening
                  gatherings.
                </li>
                <li>
                  Event-friendly with approval; ask about tents and vendors.
                </li>
              </ul>
            </div>

            <div id="location" className="space-y-4">
              <h2 className="text-xl font-semibold">Location</h2>
              <p className="text-[color:var(--fg)/0.85]">
                Anna, Texas — minutes from McKinney and the DFW metro. Country
                quiet, city convenience.
              </p>
              <div className="overflow-hidden rounded-2xl border border-[color:var(--fg)/0.15]">
                <iframe
                  src="https://maps.google.com/?q=10585+County+Road+505,+Anna,+TX&output=embed"
                  loading="lazy"
                  className="h-[360px] w-full"
                  title="Map to Starlit Grove"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR: quick facts and contact (no forms) */}
          <aside className="md:pl-2">
            <div className="top-24 rounded-2xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.12] p-5 md:sticky">
              <div className="text-lg font-semibold">At a Glance</div>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--fg)/0.9]">
                <li>Sleeps up to 12</li>
                <li>3 bedrooms · 3 bathrooms</li>
                <li>Event lawn by the pond</li>
                <li>Ample parking</li>
              </ul>
              <div className="mt-5 text-sm text-[color:var(--fg)/0.85]">
                This site is informational only. For availability and quotes,
                reach out directly.
              </div>
              <a
                href="mailto:stay@starlitgrove.com"
                className="mt-5 block rounded-lg bg-[var(--accent)] px-5 py-2 text-center font-medium text-[var(--fg)] hover:opacity-95"
              >
                Contact Host
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightbox.open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex h-dvh w-dvw items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative mx-auto w-full max-w-6xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between text-white/90">
              <span className="text-sm">
                {lightbox.index + 1} / {galleryImages.length}
              </span>
              <button
                onClick={closeLightbox}
                className="rounded-full border border-white/30 px-3 py-1 text-sm hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black/20">
              <Image
                fill
                src={galleryImages[lightbox.index].src}
                alt={galleryImages[lightbox.index].alt}
                className="object-contain"
                priority
                sizes="90vw"
              />
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60"
                aria-label="Next"
              >
                ›
              </button>
            </div>

            <div className="mt-3 grid grid-flow-col auto-cols-[minmax(84px,1fr)] gap-2 overflow-x-auto pb-1">
              {galleryImages.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setLightbox({ open: true, index: i })}
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg border ${
                    i === lightbox.index ? "border-white" : "border-white/30"
                  } hover:border-white`}
                  aria-label={`Go to photo ${i + 1}`}
                >
                  <Image
                    fill
                    src={img.src}
                    alt={img.alt}
                    className="object-cover"
                    sizes="15vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
