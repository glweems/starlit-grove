// src/app/page.tsx
import Image from "next/image";

const images = [
  { src: "/images/starlit-hero.png", alt: "Starlit Grove at night" }, // large lead image
  { src: "/images/pond.jpg", alt: "Private pond" },
  { src: "/images/living-room.jpg", alt: "Living area" },
  { src: "/images/kitchen.jpg", alt: "Kitchen" },
  { src: "/images/game-room.jpg", alt: "Game room" },
];

export default function ListingLikePage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--fg)]">
      {/* GALLERY (Airbnb-style: 1 big + 4 small on desktop, single hero on mobile) */}
      <section className="mx-auto max-w-6xl px-4 pt-6">
        <div className="hidden gap-2 md:grid md:grid-cols-4">
          <div className="relative h-[48vh] min-h-[360px] overflow-hidden rounded-xl md:col-span-2 md:row-span-2">
            <Image
              fill
              priority
              src={images[0].src}
              alt={images[0].alt}
              className="object-cover"
            />
          </div>
          {images.slice(1).map((img, i) => (
            <div
              key={i}
              className="relative h-[23vh] min-h-[160px] overflow-hidden rounded-xl"
            >
              <Image
                fill
                src={img.src}
                alt={img.alt}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {/* Mobile hero */}
        <div className="relative mt-2 h-[40vh] min-h-[260px] overflow-hidden rounded-xl md:hidden">
          <Image
            fill
            priority
            src={images[0].src}
            alt={images[0].alt}
            className="object-cover"
          />
        </div>
      </section>

      {/* TITLE + META */}
      <section className="mx-auto max-w-6xl border-b border-[color:var(--fg)/0.12] px-4 py-6">
        <h1 className="text-2xl font-semibold">
          Starlit Grove · Events & Lodging
        </h1>
        <div className="mt-1 text-sm text-[color:var(--fg)/0.75]">
          Pond • Game Room • 20 Acres • Sleeps 12 • Events Welcome · 10585
          County Road 505, Anna, Texas
        </div>
      </section>

      {/* CONTENT + STICKY BOOKING SIDEBAR */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            {/* The Space */}
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

            {/* The Property */}
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

            {/* Why Guests Love It */}
            <div id="why-guests-love-it" className="space-y-4">
              <h2 className="text-xl font-semibold">Why Guests Love It</h2>
              <div className="grid grid-cols-2 gap-3 text-[color:var(--fg)/0.9] md:grid-cols-4">
                <div>Wide-open skies for stargazing</div>
                <div>Peaceful privacy minutes from town</div>
                <div>Family- and pet-friendly</div>
                <div>Plenty of parking for guests and events</div>
              </div>
            </div>

            {/* Location */}
            <div id="location" className="space-y-4">
              <h2 className="text-xl font-semibold">Location</h2>
              <p className="text-[color:var(--fg)/0.85]">
                Located in Anna, Texas, just a short drive from McKinney,
                Sherman, and the DFW metro area. Enjoy serene country living
                with easy access to shops, restaurants, and wineries.
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

            {/* Guest Access */}
            <div id="guest-access" className="space-y-4">
              <h2 className="text-xl font-semibold">Guest Access</h2>
              <p className="text-[color:var(--fg)/0.85]">
                Guests have full access to the home, game room, pond area, and
                all 20 acres of outdoor space.
              </p>
            </div>

            {/* Events Overview */}
            <div id="events" className="space-y-4">
              <h2 className="text-xl font-semibold">
                Host Your Next Celebration
              </h2>
              <p className="text-[color:var(--fg)/0.85]">
                Where the beauty of the Texas countryside meets warm hospitality
                and endless possibilities. Nestled on 20 serene acres in Anna,
                Texas, our property offers the perfect backdrop for your most
                meaningful moments.
              </p>
              <div className="rounded-2xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.12] p-5">
                <h3 className="text-lg font-semibold">The Event Space</h3>
                <ul className="mt-3 space-y-2 text-[color:var(--fg)/0.9]">
                  <li>
                    Ideal for tented celebrations or outdoor gatherings under
                    the stars
                  </li>
                  <li>Space for up to [insert capacity if known] guests</li>
                  <li>
                    Private pond views, walking trails, and golden-hour photos
                  </li>
                  <li>Ample on-site parking for guests and vendors</li>
                </ul>
              </div>
              <div>
                <a
                  href="/events"
                  className="inline-block rounded-xl bg-[var(--accent)] px-6 py-3 font-medium text-[var(--fg)] hover:opacity-95"
                >
                  View Packages
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: STICKY BOOKING CARD */}
          <aside className="md:pl-2">
            <div className="top-24 rounded-2xl border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.12] p-5 md:sticky">
              <div className="flex items-baseline justify-between">
                <div className="text-xl font-semibold">Direct Booking</div>
                <div className="text-sm text-[color:var(--fg)/0.7]">
                  Save on platform fees
                </div>
              </div>

              <form
                className="mt-4 grid gap-3"
                action="/api/request"
                method="post"
                onSubmit={(e) => {
                  // server can handle POST; no client JS required
                }}
              >
                <label className="text-sm">
                  Check-in
                  <input
                    name="start"
                    type="date"
                    required
                    className="mt-1 w-full rounded-lg border border-[color:var(--fg)/0.2] bg-[var(--bg)] px-3 py-2"
                  />
                </label>
                <label className="text-sm">
                  Check-out
                  <input
                    name="end"
                    type="date"
                    required
                    className="mt-1 w-full rounded-lg border border-[color:var(--fg)/0.2] bg-[var(--bg)] px-3 py-2"
                  />
                </label>
                <label className="text-sm">
                  Guests
                  <input
                    name="guests"
                    type="number"
                    min={1}
                    defaultValue={4}
                    required
                    className="mt-1 w-full rounded-lg border border-[color:var(--fg)/0.2] bg-[var(--bg)] px-3 py-2"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-lg bg-[var(--accent)] px-4 py-2 font-medium text-[var(--fg)] hover:opacity-95"
                >
                  Request to Book
                </button>
              </form>

              <div className="mt-4 border-t border-[color:var(--fg)/0.1] pt-3 text-xs text-[color:var(--fg)/0.7]">
                By sending a request, you’ll receive a direct invoice and final
                details by email. No extra platform fees.
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FOOTER-ish strip */}
      <section className="border-t border-[color:var(--fg)/0.12] bg-[color:var(--panel)/0.08]">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[color:var(--fg)/0.75]">
          Anna, Texas · Direct booking available · Contact:
          stay@starlitgrove.com
        </div>
      </section>
    </main>
  );
}
