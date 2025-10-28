"use client";
import { useMemo } from "react";

export type SleepGalleryProps = {
  data: Record<string, { name: string; images: string[]; bedInfo?: string }>;
};

export default function SleepGallery({ data }: SleepGalleryProps) {
  const groups = useMemo(
    () => Object.entries(data).map(([key, v]) => ({ key, ...v })),
    [data]
  );

  return (
    <section className="mx-auto  px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-semibold mb-4">Where you'll sleep</h2>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {groups.map((room) => (
          <div
            key={room.key}
            className="snap-start shrink-0 w-72 sm:w-80 rounded-xl border bg-white overflow-hidden shadow-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={room.images[0]}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-medium text-neutral-800">
                {room.name}
              </h3>
              <p className="text-sm text-neutral-500">
                {room.bedInfo || defaultBedLabel(room.key)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function defaultBedLabel(key: string) {
  if (key.toLowerCase().includes("bunk")) return "Bunk beds";
  if (key.toLowerCase().includes("bedroom")) return "King bed";
  if (key.toLowerCase().includes("living")) return "Sofa bed";
  return "Comfortable sleeping area";
}
