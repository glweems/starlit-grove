import { bookingScript } from "@/lib/data";
import React from "react";

export const BookingWidget = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 my-2">
      <h1 className="text-3xl font-semibold text-[color:var(--fg)] sm:text-4xl">
        Book Your Stay
      </h1>
      <div
        className="contaner bg-white rounded-md"
        dangerouslySetInnerHTML={{ __html: bookingScript }}
      />
    </div>
  );
};

export function extractAllImagePaths(roomData: Record<string, any>): string[] {
  const paths: string[] = [];

  for (const key in roomData) {
    const room = roomData[key];
    if (!room || typeof room !== "object") continue;

    // if this key has an images array, collect them
    if (Array.isArray(room.images)) {
      for (const img of room.images) {
        if (typeof img === "string") {
          paths.push(img);
        } else if (img && typeof img.src === "string") {
          paths.push(img.src);
        }
      }
    }

    // in case of nested objects (not really needed here but future-proof)
    for (const subKey in room) {
      const value = room[subKey];
      if (value && typeof value === "object" && !Array.isArray(value)) {
        paths.push(...extractAllImagePaths(value));
      }
    }
  }

  return paths;
}
