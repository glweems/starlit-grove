"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import { roomData } from "@/lib/data";

interface Photo {
  src: string;
  alt: string;
}

interface HeroGalleryProps {
  photos: typeof roomData;
}

export default function HeroGallery({ photos }: HeroGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Flatten roomData into an array of all image objects
  const allImages: Photo[] = Object.values(photos).flatMap((room) =>
    room.images.map((img) => ({ src: img.src, alt: img.alt }))
  );

  // Use the first image from each room for the hero collage
  const heroImages = Object.values(photos)
    .map((room) => room.images[0])
    .slice(0, 5);

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
      {/* Airbnb-style 5-image grid */}
      <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:gap-3 rounded-2xl overflow-hidden aspect-[16/7]">
        {heroImages.map((img, idx) => (
          <button
            key={img.src}
            className={`relative overflow-hidden ${
              idx === 0 ? "col-span-2 row-span-2" : ""
            }`}
            onClick={() => {
              setActiveIndex(idx);
              setLightboxOpen(true);
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 68vw"
              className="object-cover hover:scale-[1.02] transition-transform duration-500"
              quality={70}
            />
            {/* Overlay button on last tile */}
            {idx === 4 && (
              <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-xl bg-white/95 px-3.5 py-2 text-sm font-medium text-black shadow-md">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="6" cy="6" r="1.6" />
                  <circle cx="12" cy="6" r="1.6" />
                  <circle cx="18" cy="6" r="1.6" />
                  <circle cx="6" cy="12" r="1.6" />
                  <circle cx="12" cy="12" r="1.6" />
                  <circle cx="18" cy="12" r="1.6" />
                  <circle cx="6" cy="18" r="1.6" />
                  <circle cx="12" cy="18" r="1.6" />
                  <circle cx="18" cy="18" r="1.6" />
                </svg>
                Show all photos
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          photos={allImages}
          startIndex={activeIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}
