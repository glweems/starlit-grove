"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import heroImg from "@/../public/images/starlit-hero.png";

// Real images from /public/images
const GALLERY = [
  { src: "/images/house.JPG", alt: "Front view of Starlit Grove" },
  { src: "/images/house2.JPG", alt: "House and yard with trees" },
  { src: "/images/house3.JPG", alt: "Back view with deck" },
  { src: "/images/house4.JPG", alt: "Driveway and property entrance" },
  { src: "/images/livingroom.JPG", alt: "Living room with pond views" },
  { src: "/images/livingroom2.JPG", alt: "Open living area and seating" },
  { src: "/images/kitchen.JPG", alt: "Kitchen with island and dining area" },
  { src: "/images/kitchen2.JPG", alt: "Fully stocked kitchen" },
  { src: "/images/gameroom.JPG", alt: "Game room with foosball and games" },
  { src: "/images/master_bath.JPG", alt: "Primary bathroom" },
  { src: "/images/master_bath2.JPG", alt: "Primary bathroom double vanity" },
  { src: "/images/master_bath3.JPG", alt: "Primary shower area" },
  { src: "/images/bathroom.JPG", alt: "Guest bathroom" },
  { src: "/images/bathroom2.JPG", alt: "Second guest bathroom" },
  { src: "/images/property.JPG", alt: "Aerial view of property and pond" },
];

export default function ListingLikePage() {
  const [scrollY, setScrollY] = useState(0);
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroHeight = Math.max(90 - scrollY / 10, 40);
  const titleScale = Math.max(1 - scrollY / 1000, 0.85);
  const titleOpacity = Math.max(1 - scrollY / 400, 0.5);

  const closeLightbox = useCallback(
    () => setLightbox({ open: false, index: 0 }),
    []
  );
  const prev = useCallback(
    () =>
      setLightbox((s) => ({
        open: true,
        index: (s.index - 1 + GALLERY.length) % GALLERY.length,
      })),
    []
  );
  const next = useCallback(
    () =>
      setLightbox((s) => ({
        open: true,
        index: (s.index + 1) % GALLERY.length,
      })),
    []
  );

  // keyboard navigation
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
      {/* HERO */}
      <section
        className="relative w-full overflow-hidden transition-[height] duration-300 ease-out"
        style={{ height: `${heroHeight}vh` }}
      >
        <Image
          fill
          priority
          src={heroImg}
          alt="Starlit Grove — Events & Lodging"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(47,60,50,0.45)]" />
        <div
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center transition-all duration-300 ease-out"
          style={{
            transform: `scale(${titleScale}) translateY(${scrollY / 10}px)`,
            opacity: titleOpacity,
            color: "var(--bg)",
          }}
        >
          <h1 className="text-5xl font-serif font-semibold sm:text-6xl">
            Starlit Grove
          </h1>
          <p className="mt-3 text-xl tracking-wide text-[var(--bg)]/90">
            Events & Lodging
          </p>
          <p className="mt-2 text-sm text-[var(--bg)]/80">
            Pond • Game Room • 20 Acres • Sleeps 12 • Events Welcome
          </p>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="border-b border-[color:var(--fg)/0.12] bg-[color:var(--panel)/0.1]">
        <div className="mx-auto max-w-6xl px-4 py-3 text-center text-sm text-[color:var(--fg)/0.8]">
          10585 County Road 505, Anna, Texas
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            {/* Welcome */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Welcome</h2>
              <p className="text-[color:var(--fg)/0.85]">
                Welcome to Starlit Grove, your private countryside escape just
                north of Dallas! Nestled on 20 peaceful acres with a beautiful
                pond, this spacious 3-bedroom, 3-bath home with a game room is
                perfect for family getaways, retreats, or unforgettable
                celebrations under the Texas stars.
              </p>
            </div>

            {/* PHOTO GALLERY */}
            <section aria-labelledby="gallery-title" className="space-y-4">
              <h3 id="gallery-title" className="text-lg font-semibold">
                Photo Gallery
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {GALLERY.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setLightbox({ open: true, index: i })}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.12] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  >
                    <Image
                      fill
                      src={img.src}
                      alt={img.alt}
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </button>
                ))}
              </div>
              <p className="text-xs text-[color:var(--fg)/0.65]">
                Tap any photo to view larger. Use arrows or swipe.
              </p>
            </section>

            {/* THE SPACE */}
            <div id="the-space" className="space-y-4">
              <h2 className="text-xl font-semibold">The Space</h2>
              <p className="text-[color:var(--fg)/0.85]">
                This modern-country retreat blends comfort, charm, and fun for
                every age.
              </p>
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
                      b: "Foosball, board games, and generous hangout space",
                    },
                    {
                      t: "Kitchen",
                      b: "Fully stocked for family meals and event prep",
                    },
                    {
                      t: "Living Area",
                      b: "Open plan with large windows overlooking the pond and acreage",
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

            {/* THE PROPERTY */}
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
                  Event-friendly: weddings, reunions, birthdays, retreats, and
                  photo sessions welcome (with approval).
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <aside className="md:pl-2">
            <div className="top-24 rounded-2xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.12] p-5 md:sticky">
              <div className="text-lg font-semibold">Information</div>
              <p className="mt-2 text-sm text-[color:var(--fg)/0.85]">
                This site is informational only. To check availability, request
                a quote, or book an event, please contact us directly.
              </p>
              <div className="mt-5 grid gap-3 text-sm">
                <div className="border-b border-[color:var(--fg)/0.1] pb-2">
                  <strong>Location:</strong> Anna, Texas
                </div>
                <div className="border-b border-[color:var(--fg)/0.1] pb-2">
                  <strong>Lodging:</strong> Sleeps up to 12
                </div>
                <div className="border-b border-[color:var(--fg)/0.1] pb-2">
                  <strong>Bedrooms:</strong> 3 · <strong>Bathrooms:</strong> 3
                </div>
                <div className="pb-2">
                  <strong>Contact:</strong>{" "}
                  <a className="underline" href="mailto:stay@starlitgrove.com">
                    stay@starlitgrove.com
                  </a>
                </div>
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

      {/* FOOTER */}
      <section className="border-t border-[color:var(--fg)/0.12] bg-[color:var(--panel)/0.08]">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[color:var(--fg)/0.75]">
          Anna, Texas · Direct inquiries only · Contact: stay@starlitgrove.com
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-black/30">
              <Image
                fill
                src={GALLERY[lightbox.index].src}
                alt={GALLERY[lightbox.index].alt}
                className="object-contain"
                priority
              />
            </div>

            {/* Controls */}
            <button
              onClick={closeLightbox}
              className="absolute right-2 top-2 rounded-full border border-white/30 bg-black/50 px-3 py-1 text-white hover:bg-black/70"
              aria-label="Close"
            >
              ✕
            </button>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-r-lg border border-white/20 bg-black/40 px-3 py-2 text-white hover:bg-black/60"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-l-lg border border-white/20 bg-black/40 px-3 py-2 text-white hover:bg-black/60"
              aria-label="Next image"
            >
              ›
            </button>

            <div className="mt-3 text-center text-sm text-white/80">
              {lightbox.index + 1} / {GALLERY.length} —{" "}
              {GALLERY[lightbox.index].alt}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
