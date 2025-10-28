"use client";

import Image from "next/image";
import { useState } from "react";
import { roomData } from "@/lib/data";
import Lightbox from "@/components/Lightbox";

interface Photo {
  src: string;
  alt: string;
}

export default function GalleryPage() {
  const allImages: Photo[] = Object.values(roomData).flatMap((room) =>
    room.images.map((img) => ({ src: img.src, alt: img.alt }))
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const findImageIndex = (src: string) =>
    allImages.findIndex((img) => img.src === src);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-[color:var(--fg)/0.9]">
      <header className="mb-12 ">
        <h1 className="text-4xl font-semibold tracking-tight mb-3 font-serif">
          Photo Gallery
        </h1>
        <p className="text-[color:var(--fg)/0.7]">
          Explore every space at Starlit Grove — each room, every view, all in
          one place.
        </p>
      </header>

      <div className="space-y-16">
        {Object.entries(roomData).map(([key, room]) => (
          <section key={key}>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[color:var(--fg)/0.1] pb-2 font-serif">
              {room.name}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {room.images.map((img, idx) => (
                <button
                  key={img.src}
                  onClick={() => {
                    setActiveIndex(findImageIndex(img.src));
                    setLightboxOpen(true);
                  }}
                  className={`relative overflow-hidden group focus:outline-none rounded-xl
                    ${
                      idx === 0
                        ? "col-span-full aspect-[16/6] sm:aspect-[16/5] md:aspect-[16/4]"
                        : "aspect-[4/3]"
                    }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl" />
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16">
        <a
          href="/booking"
          className="block w-full text-center rounded-xl bg-[color:var(--accent)] px-6 py-4 text-lg font-semibold text-[color:var(--fg)] hover:opacity-90 transition"
        >
          Check Availability &amp; Book
        </a>
      </div>

      {lightboxOpen && (
        <Lightbox
          photos={allImages}
          startIndex={activeIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </main>
  );
}
