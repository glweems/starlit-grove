export const roomData = {
  masterBedroom: {
    name: "Master Bedroom",
    images: [
      "/images/master-bedroom/bedroom-1.jpg",
      "/images/master-bedroom/bedroom-2.jpg",
      "/images/master-bedroom/bedroom-3.jpg",
      "/images/master-bedroom/bedroom-4.jpg",
      "/images/master-bedroom/bedroom-5.jpg",
      "/images/master-bedroom/bedroom-6.jpg",
      "/images/master-bedroom/bedroom-7.jpg",
      "/images/master-bedroom/bedroom-8.jpg",
      "/images/master-bedroom/bedroom-9.jpg",
    ],
  },
  bedroom: {
    name: "Bedroom",
    images: [
      "/images/bedroom/bedroom-1.jpg",
      "/images/bedroom/bedroom-2.jpg",
      "/images/bedroom/bedroom-3.jpg",
      "/images/bedroom/bedroom-4.jpg",
      "/images/bedroom/bedroom-5.jpg",
    ],
  },
  bunkRoom: {
    name: "Bunk Room",
    images: [
      "/images/bunk-room/bunk-room-1.jpg",
      "/images/bunk-room/bunk-room-2.jpg",
      "/images/bunk-room/bunk-room-3.jpg",
      "/images/bunk-room/bunk-room-4.jpg",
    ],
  },
  entryWay: {
    name: "Entry Way",
    images: ["/images/entry-way/entry-way.jpg"],
  },
  gameRoom: {
    name: "Game Room",
    images: [
      "/images/game-room/game-room-1.jpg",
      "/images/game-room/game-room-2.jpg",
      "/images/game-room/game-room-3.jpg",
      "/images/game-room/game-room-4.jpg",
      "/images/game-room/game-room-5.jpg",
      "/images/game-room/game-room-6.jpg",
    ],
  },
  kitchen: {
    name: "Kitchen",
    images: [
      "/images/kitchen/kitchen-1.jpg",
      "/images/kitchen/kitchen-2.jpg",
      "/images/kitchen/kitchen-3.jpg",
      "/images/kitchen/kitchen-4.jpg",
      "/images/kitchen/kitchen-5.jpg",
      "/images/kitchen/kitchen-6.jpg",
      "/images/kitchen/kitchen-7.jpg",
    ],
  },
};

export const content = {
  site: {
    name: "Starlit Grove",
    domain: "starlitgrove.com",
    description:
      "Your private countryside escape in Anna, Texas — 20 acres of open sky, a peaceful pond, and room for unforgettable gatherings under the stars.",
    contactEmail: "stay@starlitgrove.com",
    phone: 2147187017,
  },
  hero: {
    kicker: "Pond • Game Room • 20 Acres • Sleeps 12 • Events Welcome",
    title: "Starlit Grove",
    subtitle:
      "Your private countryside escape in Anna, Texas — 20 acres of open sky, a peaceful pond, and room for unforgettable gatherings under the stars.",
    cta: {
      label: "Check Availability",
      href: "#book",
      secondaryLabel: "Host an Event",
      secondaryHref: "/events",
    },
    images: [
      {
        src: "/images/hero-house.jpg",
        alt: "Front porch overlooking the pond",
        priority: true,
      },
      { src: "/images/hero-pond.jpg", alt: "Private pond at sunset" },
    ],
  },
  sleeps: {
    totalGuests: 12,
    bedrooms: 3,
    beds: [
      { room: "Primary Suite", type: "King", count: 1 },
      { room: "Bedroom 2", type: "Queen", count: 1 },
      { room: "Bedroom 3", type: "Twin", count: 2 },
      { room: "Game Room", type: "Sofa Sleeper", count: 2 },
    ],
    baths: { full: 3 },
    sqft: 2500,
  },
  features: {
    summaryBullets: [
      "3 bedrooms, 3 baths • Sleeps 12",
      "Game room with foosball & board games",
      "Fully stocked kitchen",
      "Large open living area with pond views",
      "Washer & dryer for extended stays",
      "Private 20-acre property with pond & deck",
      "Event-friendly with parking & outdoor space",
    ],
    amenities: [
      { label: "Wi-Fi", featured: true },
      { label: "Full kitchen" },
      { label: "Foosball table" },
      { label: "Smart TV" },
      { label: "Outdoor firepit" },
      { label: "Deck & patio seating" },
      { label: "Central A/C & heat" },
      { label: "Laundry on site" },
      { label: "Free parking" },
      { label: "Pet-friendly" },
    ],
  },
  photos: [
    { src: "/images/living-room.jpg", alt: "Open living area with pond view" },
    { src: "/images/game-room.jpg", alt: "Game room with foosball" },
    { src: "/images/kitchen.jpg", alt: "Fully stocked kitchen" },
    { src: "/images/pond.jpg", alt: "Private pond with reflection of sunset" },
    { src: "/images/event-lawn.jpg", alt: "Event lawn with tent setup" },
  ],
  rates: [
    {
      label: "Celebration Package",
      amountCents: 50000,
      notes: "Up to 6-hour outdoor event",
    },
    {
      label: "Weekend Retreat Package",
      amountCents: 125000,
      notes: "2 nights lodging + 1 event day",
    },
    {
      label: "Starlit Wedding Package",
      amountCents: 250000,
      notes: "Full-day event + 2 nights lodging",
    },
  ],
  booking: {
    minNights: 2,
    checkIn: "After 3 PM",
    checkOut: "Before 11 AM",
    cancellation:
      "Full refund if canceled 7 days before check-in. 50% refund up to 2 days before.",
    depositRequired: true,
  },
  policies: [
    {
      title: "Guest Access",
      body: "Guests have full access to the home, game room, pond area, and all 20 acres of outdoor space.",
    },
    {
      title: "Events",
      body: "Weddings, reunions, birthdays, and photo sessions are welcome with prior approval and applicable event fees.",
    },
    {
      title: "Pets",
      body: "Pets are welcome with an additional cleaning fee. Please keep them leashed outdoors.",
    },
  ],
  houseRules: [
    { label: "No smoking indoors" },
    { label: "Quiet hours after 10 PM" },
    { label: "Event approval required before booking" },
    { label: "Check-out by 11 AM" },
  ],
  location: {
    addressLine1: "10585 County Road 505",
    city: "Anna",
    state: "TX",
    postalCode: "75409",
    areaHighlights: [
      "10 min to McKinney",
      "45 min to Dallas",
      "Close to local shops, wineries, and restaurants",
    ],
    mapEmbedUrl: "https://maps.google.com/?q=10585+County+Road+505,+Anna,+TX",
  },
  faq: [
    {
      q: "Can we host weddings or events?",
      a: "Yes! We welcome weddings, showers, birthdays, and retreats. Event fees and approval apply.",
    },
    {
      q: "Is the property pet-friendly?",
      a: "Absolutely. Pets are welcome with an additional cleaning fee.",
    },
    {
      q: "Do you allow day-use only bookings?",
      a: "Yes — check out our Celebration Package for short-term event use.",
    },
  ],
  seo: {
    title:
      "Starlit Grove | Pond • Game Room • 20 Acres • Sleeps 12 • Events Welcome",
    description:
      "Escape to Starlit Grove in Anna, TX — a 3-bedroom, 3-bath home on 20 acres with pond, game room, and event space. Perfect for getaways, weddings, and retreats.",
    ogImage: "/images/og-cover.jpg",
  },
};
