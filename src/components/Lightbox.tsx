"use client";

import Image from "next/image";
import { useEffect, useState, KeyboardEvent } from "react";

interface Photo {
  src: string;
  alt: string;
}

interface LightboxProps {
  photos: Photo[];
  startIndex?: number;
  onClose: () => void;
}

export default function Lightbox({
  photos,
  startIndex = 0,
  onClose,
}: LightboxProps) {
  const [index, setIndex] = useState(startIndex);

  // Keyboard navigation + escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent | any) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [index]);

  const next = () => setIndex((i) => (i + 1) % photos.length);
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);

  if (!photos?.length) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/80 hover:text-white text-3xl p-5 font-light z-50"
        aria-label="Close lightbox"
      >
        ×
      </button>

      {/* Image */}
      <div className="relative w-full max-w-5xl aspect-[16/10]">
        <Image
          key={photos[index].src}
          src={photos[index].src}
          alt={photos[index].alt}
          fill
          priority
          sizes="100vw"
          className="object-contain transition-all duration-300"
        />
      </div>

      {/* Caption */}
      <p className="mt-3 text-sm text-white/80 text-center">
        {photos[index].alt}
      </p>

      {/* Controls */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={prev}
          className="p-4 text-white/70 hover:text-white text-4xl font-thin"
          aria-label="Previous photo"
        >
          ‹
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={next}
          className="p-4 text-white/70 hover:text-white text-4xl font-thin"
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-6 flex gap-2 overflow-x-auto px-4 pb-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setIndex(i)}
            className={`relative w-20 h-14 rounded-md overflow-hidden border-2 ${
              i === index ? "border-white" : "border-transparent opacity-70"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
