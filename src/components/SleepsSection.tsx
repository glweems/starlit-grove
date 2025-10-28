"use client";

import { content } from "@/lib/data";

export default function SleepsSection() {
  const { totalGuests, bedrooms, baths, sqft, beds } = content.sleeps;

  return (
    <section
      id="sleeps"
      className="mx-auto max-w-5xl px-4 py-6 text-[color:var(--fg)/0.9]"
    >
      <h2 className="text-3xl font-semibold mb-6 font-serif">
        Where You’ll Sleep
      </h2>

      {/* Summary Row */}
      <div className="flex flex-wrap gap-4 text-sm text-[color:var(--fg)/0.8] mb-6">
        <span>🛏️ {bedrooms} bedrooms</span>
        <span>🚿 {baths.full} baths</span>
        <span>👥 Sleeps {totalGuests}</span>
        {sqft && <span>📐 {sqft.toLocaleString()} sq ft</span>}
      </div>

      {/* Bed breakdown */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-2">
        {beds.map((bed, idx) => (
          <div
            key={idx}
            className="rounded-md border border-[color:var(--fg)/0.15] bg-[color:var(--panel)/0.06] p-2 col-span-1"
          >
            <h3 className="text-lg font-semibold font-serif">{bed.room}</h3>
            <p className="text-sm mt-1 text-[color:var(--fg)/0.8]">
              {bed.count} × {bed.type}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
