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
export const galleryImages = [
  { src: "/images/house.png", alt: "Front view of Starlit Grove" },
  { src: "/images/livingroom.png", alt: "Living room with pond views" },
  { src: "/images/kitchen.png", alt: "Kitchen with island and dining area" },
  { src: "/images/gameroom.png", alt: "Game room with foosball" },
  { src: "/images/master_bath.png", alt: "Primary bathroom" },
  { src: "/images/property.png", alt: "Acreage and pond" },
  { src: "/images/house2.png", alt: "Side view and yard" },
  { src: "/images/house3.png", alt: "Back deck and lawn" },
  { src: "/images/kitchen2.png", alt: "Fully stocked kitchen" },
  { src: "/images/livingroom2.png", alt: "Open living area and seating" },
];

/* ---------- EVENT PACKAGE TEASERS ---------- */
export const PACKAGES = [
  {
    id: "celebration",
    name: "Celebration",
    price: "From $500–$750",
    bullets: [
      "Outdoor event area up to 6 hours",
      "Restroom + prep access",
      "Tables & chairs (qty TBD)",
      "On-site parking",
    ],
  },
  {
    id: "weekend-retreat",
    name: "Weekend Retreat",
    price: "From $1,250–$1,800",
    bullets: [
      "2 nights lodging (sleeps 12)",
      "Full access to 20 acres + pond",
      "Event area up to 8 hours",
      "Game room + firepit",
    ],
  },
  {
    id: "starlit-wedding",
    name: "Starlit Wedding",
    price: "From $2,500–$3,500",
    bullets: [
      "Full-day lawn + pond area",
      "2 nights lodging for 12",
      "Kitchen/prep spaces",
      "Early setup & next-day breakdown",
    ],
  },
];
