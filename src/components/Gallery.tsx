"use client";
import { useMemo } from "react";

export type RoomData = Record<string, { name: string; images: string[] }>;

export default function ListingGallery({ data }: { data: RoomData }) {
  const groups = useMemo(
    () => Object.entries(data).map(([key, v]) => ({ key, ...v })),
    [data]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {groups.map((group) => (
        <section key={group.key}>
          <h3 className="text-xl font-semibold mb-1">{group.name}</h3>
          <p className="text-sm text-neutral-500 mb-4">
            {group.key === "bedroom"
              ? "King bed"
              : group.key === "bunkRoom"
              ? "Bunk beds"
              : group.key === "livingRoom"
              ? "Sofa bed"
              : ""}
          </p>

          <div className="grid grid-cols-[repeat(2,1fr)] auto-cols-2sm:grid-cols-2  gap-4">
            {group.images.map((src, i) => (
              <div
                key={src + i}
                className={`overflow-hidden rounded-xl col-span-${
                  i === 0 ? "2" : i === 3 ? "2" : i % 2 === 0 ? "1" : "1"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${group.name} ${i + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
