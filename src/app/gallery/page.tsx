"use client";
import ListingGallery from "@/components/Gallery";
import SleepGallery from "@/components/SleepGallery";
import { roomData } from "@/lib/data";
import { useEffect, useMemo, useRef, useState } from "react";
export default function GalleryPage() {
  return (
    <div>
      <SleepGallery data={roomData} />
      <ListingGallery data={roomData} />
    </div>
  );
}
