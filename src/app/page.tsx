"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import heroImg from "@/../public/images/starlit-hero.png";

/* ---------- CONTENT ---------- */

const GALLERY = [
  { src: "/images/house.JPG", alt: "Front view of Starlit Grove" },
  { src: "/images/livingroom.JPG", alt: "Living room with pond views" },
  { src: "/images/kitchen.JPG", alt: "Kitchen with island and dining area" },
  { src: "/images/gameroom.JPG", alt: "Game room with foosball" },
  { src: "/images/master_bath.JPG", alt: "Primary bathroom" },
  { src: "/images/property.JPG", alt: "Acreage and pond" },
  { src: "/images/house2.JPG", alt: "Side view and yard" },
  { src: "/images/house3.JPG", alt: "Back deck and lawn" },
  { src: "/images/kitchen2.JPG", alt: "Fully stocked kitchen" },
  { src: "/images/livingroom2.JPG", alt: "Open living area and seating" },
];

const FEATURES = [
  { title: "Sleeps 12", body: "3 bedrooms, 3 baths, open living facing the pond." },
  { title: "20 acres", body: "Trails, wide skies, and room to breathe." },
  { title: "Game room", body: "Foosball, board games, and hangout space." },
  { title: "Event lawn", body: "Tent-friendly, pond-side, photo-ready." },
];

const PACKAGES = [
  {
    name: "Celebration",
    price: "From $500–$750",
    points: ["Up to 6 hours", "Tables & chairs", "Parking included"],
    href: "/events#celebration",
  },
  {
    name: "Weekend Retreat",
    price: "From $1,250–$1,800",
    points: ["2 nights lodging", "Event area up to 8 hours", "Game room & firepit"],
    href: "/events#weekend-retreat",
  },
  {
    name: "Starlit Wedding",
    price: "From $2,500–$3,500",
    points: ["Full-day lawn access", "2 nights lodging for 12", "Setup + breakdown window"],
    href: "/events#starlit-wedding",
  },
];

/* ---------- UTILS ---------- */

const motionOK = () =>
  typeof window !== "undefined" &&
  (window.matchMedia?.("(prefers-reduced-motion: no-preference)").matches ?? true);

/* ---------- PAGE ---------- */

export default function HomeOverhaul() {
  const [scrollY, setScrollY] = useState(0);
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({ open: false, index: 0 });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroHeight = Math.max(92 - scrollY / 10, 42);
  const titleScale = motionOK() ? Math.max(1 - scrollY / 1100, 0.88) : 1;
  const titleOpacity = motionOK() ? Math.max(1 - scrollY / 450, 0.6) : 1;

  const closeLightbox = useCallback(() => setLightbox({ open: false, index: 0 }), []);
  const prev = useCallback(
    () => setLightbox(s => ({ open: true, index: (s.index - 1 + GALLERY.length) % GALLERY.length })),
    []
  );
  const next = useCallback(
    () => setLightbox(s => ({ open: true, index: (s.index + 1) % GALLERY.length })),
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
      {/* BACKGROUND TEXTURE + RADIALS */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% -10%, rgba(245,236,213,0.07), transparent 60%), radial-gradient(1000px 500px at 90% 10%, rgba(240,187,120,0.06), transparent 60%), linear-gradient(var(--bg), var(--bg))",
        }}
      />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 mix-blend-soft-light opacity-[0.08]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%224%22 height=%224%22><rect width=%224%22 height=%224%22 fill=%22%23fff%22/><circle cx=%220.5%22 cy=%220.5%22 r=%220.5%22 fill=%22%23000%22/></svg>')" }}/>

      {/* NAV: glass bar */}
      <header className="fixed left-0 right-0 top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-b-2xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.35] px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Starlit Grove" width={28} height={28} className="rounded" />
            <span className="text-sm font-medium tracking-wide text-[color:var(--bg)]/90">Starlit Grove</span>
          </div>
          <nav className="hidden gap-2 sm:flex">
            <a href="#stay" className="rounded-full px-3 py-1.5 text-sm text-[var(--bg)]/85 hover:bg-[color:var(--bg)/0.1]">Stay</a>
            <a href="#events" className="rounded-full px-3 py-1.5 text-sm text-[var(--bg)]/85 hover:bg-[color:var(--bg)/0.1]">Events</a>
            <a href="#gallery" className="rounded-full px-3 py-1.5 text-sm text-[var(--bg)]/85 hover:bg-[color:var(--bg)/0.1]">Photos</a>
            <a href="#location" className="rounded-full px-3 py-1.5 text-sm text-[var(--bg)]/85 hover:bg-[color:var(--bg)/0.1]">Location</a>
          </nav>
          <a
            href="mailto:stay@starlitgrove.com"
            className="rounded-full bg-[var(--accent)] px-4 py-1.5 text-sm font-medium text-[var(--fg)] hover:opacity-95"
          >
            Contact
          </a>
        </div>
      </header>

      {/* HERO: full-bleed, graceful shrink */}
      <section
        className="relative w-full overflow-hidden transition-[height] duration-300 ease-out"
        style={{ height: `${heroHeight}vh` }}
      >
        <Image fill priority src={heroImg} alt="Starlit Grove — Events & Lodging" className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[rgba(47,60,50,0.4)]" />
        <div
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center transition-all duration-300 ease-out"
          style={{
            transform: motionOK() ? `scale(${titleScale}) translateY(${scrollY / 12}px)` : undefined,
            opacity: titleOpacity,
            color: "var(--bg)",
          }}
        >
          <h1 className="text-5xl font-serif font-semibold sm:text-6xl">Starlit Grove</h1>
          <p className="mt-3 text-xl tracking-wide text-[var(--bg)]/90">Events & Lodging in Anna, Texas</p>
          <p className="mt-2 text-sm text-[var(--bg)]/85">20 acres • Private pond • Sleeps 12 • Event-friendly</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a href="#stay" className="rounded-full bg-[var(--accent)] px-6 py-3 font-medium text-[var(--fg)] hover:opacity-95">Explore Stays</a>
            <a href="#events" className="rounded-full border border-[color:var(--bg)/0.7] px-6 py-3 font-medium text-[var(--bg)] hover:bg-[color:var(--bg)/0.08]">Event Packages</a>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-b border-[color:var(--fg)/0.12] bg-[color:var(--panel)/0.1]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-3 text-center text-sm text-[color:var(--fg)/0.85] md:grid-cols-4">
          <div>Whole house · 3 bed · 3 bath</div>
          <div>Sleeps 12</div>
          <div>Pond-side event lawn</div>
          <div>Direct inquiries</div>
        </div>
      </section>

      {/* WELCOME + ASYMMETRIC PREVIEW GALLERY */}
      <section id="gallery" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid items-start gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold">Where the countryside slows down time</h2>
            <p className="mt-3 max-w-2xl text-[color:var(--fg)/0.85]">
              Twenty quiet acres. A private pond. A modern-country home designed for gathering. Stay for the weekend,
              or host the moments that matter and let the stars do the decorating.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {FEATURES.map(f => (
                <div key={f.title} className="rounded-full border border-[color:var(--fg)/0.2] px-4 py-2 text-sm text-[color:var(--fg)/0.9]">
                  <span className="font-medium">{f.title}</span>
                  <span className="text-[color:var(--fg)/0.7]"> · {f.body}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Asymmetric collage */}
          <div className="grid grid-cols-3 grid-rows-3 gap-2">
            <GalleryTile i={0} r="col-span-2 row-span-2" onOpen={() => setLightbox({ open: true, index: 0 })} />
            <GalleryTile i={1} r="" onOpen={() => setLightbox({ open: true, index: 1 })} />
            <GalleryTile i={2} r="" onOpen={() => setLightbox({ open: true, index: 2 })} />
            <GalleryTile i={3} r="col-span-2" onOpen={() => setLightbox({ open: true, index: 3 })} />
            <GalleryTile i={4} r="" onOpen={() => setLightbox({ open: true, index: 4 })} />
          </div>
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={() => setLightbox({ open: true, index: 0 })}
            className="rounded-lg border border-[color:var(--fg)/0.2] px-3 py-1.5 text-sm hover:bg-[color:var(--panel)/0.08]"
          >
            Show all photos
          </button>
        </div>
      </section>

      {/* DUAL PATH CARDS */}
      <section id="choose" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Stay card */}
          <a id="stay" href="#stay-details"
             className="group relative overflow-hidden rounded-3xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.12] p-6 transition-colors hover:bg-[color:var(--panel)/0.18]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_180px_at_20%_10%,rgba(240,187,120,0.15),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="text-2xl font-semibold">Stay at Starlit Grove</h3>
            <p className="mt-2 text-[color:var(--fg)/0.85]">Three bedrooms, three baths, and a living room that actually faces nature.</p>
            <div className="mt-4 inline-block rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-[var(--fg)]">Explore the home</div>
          </a>

          {/* Events card */}
          <a id="events" href="#packages"
             className="group relative overflow-hidden rounded-3xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.12] p-6 transition-colors hover:bg-[color:var(--panel)/0.18]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_180px_at_80%_10%,rgba(164,180,101,0.18),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="text-2xl font-semibold">Host an Event</h3>
            <p className="mt-2 text-[color:var(--fg)/0.85]">Pond-side lawn made for celebrations, from simple gatherings to weddings.</p>
            <div className="mt-4 inline-block rounded-full border border-[color:var(--fg)/0.25] px-5 py-2 text-sm font-medium">See packages</div>
          </a>
        </div>
      </section>

      {/* STAY DETAILS */}
      <section id="stay-details" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.12] p-6">
          <h3 className="text-2xl font-semibold">The Space</h3>
          <p className="mt-2 text-[color:var(--fg)/0.85]">
            Modern-country comfort with room for everyone. Fully stocked kitchen, open living with pond views, game room,
            and laundry for longer stays.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Capacity", "3 bedrooms · 3 baths · sleeps 12"],
              ["Kitchen", "Stocked for family meals and event prep"],
              ["Living Area", "Open plan with large windows over the acreage"],
              ["Game Room", "Foosball, board games, and hangout space"],
              ["Laundry", "Washer & dryer for extended stays"],
              ["Outdoors", "Deck, firepit, and 20 acres to explore"],
            ].map(([t, b]) => (
              <div key={t} className="rounded-2xl border border-[color:var(--fg)/0.12] bg-[color:var(--panel)/0.08] p-4">
                <div className="text-xs uppercase tracking-wide text-[color:var(--fg)/0.65]">{t}</div>
                <div className="mt-1 font-medium">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section id="packages" className="mx-auto max-w-6xl px-4 py-12">
        <h3 className="text-2xl font-semibold">Event Packages</h3>
        <p className="mt-2 text-[color:var(--fg)/0.85]">
          Pick a simple celebration, a weekend with lodging, or an elegant pond-side wedding.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {PACKAGES.map(p => (
            <a key={p.name} href={p.href}
               className="group relative overflow-hidden rounded-3xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.12] p-6 transition-colors hover:bg-[color:var(--panel)/0.16]">
              <div className="text-lg font-semibold">{p.name}</div>
              <div className="mt-1 text-sm text-[color:var(--fg)/0.75]">{p.price}</div>
              <ul className="mt-3 space-y-1 text-[color:var(--fg)/0.9]">
                {p.points.map(pt => <li key={pt}>{pt}</li>)}
              </ul>
              <div className="mt-5 inline-block rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--fg)]">
                View details
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--accent)]/10 blur-2xl transition-all duration-300 group-hover:scale-125" />
            </a>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.12] p-6">
          <h3 className="text-2xl font-semibold">Location</h3>
          <p className="mt-2 text-[color:var(--fg)/0.85]">
            In Anna, Texas, near McKinney and the DFW metro area. Country calm, city access.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[color:var(--fg)/0.15]">
            <iframe
              src="https://maps.google.com/?q=10585+County+Road+505,+Anna,+TX&output=embed"
              loading="lazy"
              className="h-[380px] w-full"
              title="Map to Starlit Grove"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[color:var(--fg)/0.12] bg-[color:var(--panel)/0.08]">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[color:var(--fg)/0.8]">
          Anna, Texas · Direct inquiries · <a className="underline" href="mailto:stay@starlitgrove.com">stay@starlitgrove.com</a>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex h-dvh w-dvw items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <div className="relative mx-auto w-full max-w-6xl px-4" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between text-white/90">
              <span className="text-sm">{lightbox.index + 1} / {GALLERY.length}</span>
              <button onClick={closeLightbox} className="rounded-full border border-white/30 px-3 py-1 text-sm hover:bg-white/10">Close</button>
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black/20">
              <Image fill src={GALLERY[lightbox.index].src} alt={GALLERY[lightbox.index].alt} className="object-contain" priority />
              <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60" aria-label="Previous">‹</button>
              <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60" aria-label="Next">›</button>
            </div>
            <div className="mt-3 grid grid-flow-col auto-cols-[minmax(80px,1fr)] gap-2 overflow-x-auto pb-1">
              {GALLERY.map((img, i) => (
                <button key={img.src} onClick={() => setLightbox({ open: true, index: i })}
                        className={`relative aspect-[4/3] overflow-hidden rounded-lg border ${i === lightbox.index ? "border-white" : "border-white/30"} hover:border-white`}
                        aria-label={`Go to photo ${i + 1}`}>
                  <Image fill src={img.src} alt={img.alt} className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

/* ---------- LOCAL TILE ---------- */
function GalleryTile({ i, r, onOpen }: { i: number; r?: string; onOpen: () => void }) {
  const img = GALLERY[i];
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`relative overflow-hidden rounded-2xl ${r ?? ""} focus:outline-none focus:ring-2 focus:ring-[var(--accent)]`}
      aria-label={`Open image ${i + 1}: ${img.alt}`}
    >
      <Image fill src={img.src} alt={img.alt} className="object-cover transition-transform duration-300 hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 40vw" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
    </button>
  );
}
