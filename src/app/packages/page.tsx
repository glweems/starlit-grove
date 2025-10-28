import { content } from "@/lib/data";
import Link from "next/dist/client/link";

export default function Page() {
  return (
    <div>
      {" "}
      {/* PACKAGES */}
      <section id="packages" className="mx-auto max-w-6xl px-4 py-12">
        <h3 className="text-2xl font-semibold">Event Packages</h3>
        <p className="mt-2 text-[color:var(--fg)/0.85]">
          Choose your celebration package below.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {content.rates.map((pkg, idx) => (
            <div
              key={pkg.label}
              className="group relative overflow-hidden rounded-3xl border border-[color:var(--fg)/0.15] p-6 bg-[color:var(--panel)/0.10] hover:bg-[color:var(--panel)/0.14]"
            >
              <div className="text-lg font-semibold">{pkg.label}</div>
              <div className="mt-5 inline-block rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--fg)]">
                ${pkg.amountCents / 100}+
              </div>
              <p className="mt-3 text-[color:var(--fg)/0.9]">{pkg.notes}</p>
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl transition-all duration-300 group-hover:scale-125 ${
                  idx === 0
                    ? "bg-[var(--muted)]/18"
                    : idx === 1
                    ? "bg-[var(--accent)]/12"
                    : "bg-white/10"
                }`}
              />
            </div>
          ))}
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
