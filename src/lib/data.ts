export const roomData = {
  property: {
    name: "Property",
    images: [
      {
        src: "/images/property/property-1.jpg",
        alt: "Property exterior view 1",
      },
      {
        src: "/images/property/property-2.jpg",
        alt: "Property exterior view 2",
      },
    ],
  },
  livingRoom: {
    name: "Living Room",
    images: [
      {
        src: "/images/living-room/living-room-1.jpg",
        alt: "Living room view 1",
      },
      {
        src: "/images/living-room/living-room-2.jpg",
        alt: "Living room view 2",
      },
      {
        src: "/images/living-room/living-room-3.jpg",
        alt: "Living room view 3",
      },
      {
        src: "/images/living-room/living-room-4.jpg",
        alt: "Living room view 4",
      },
      {
        src: "/images/living-room/living-room-5.jpg",
        alt: "Living room view 5",
      },
    ],
  },
  kitchen: {
    name: "Kitchen",
    images: [
      { src: "/images/kitchen/kitchen-1.jpg", alt: "Kitchen view 1" },
      { src: "/images/kitchen/kitchen-2.jpg", alt: "Kitchen view 2" },
      { src: "/images/kitchen/kitchen-3.jpg", alt: "Kitchen view 3" },
      { src: "/images/kitchen/kitchen-4.jpg", alt: "Kitchen view 4" },
      { src: "/images/kitchen/kitchen-5.jpg", alt: "Kitchen view 5" },
      { src: "/images/kitchen/kitchen-6.jpg", alt: "Kitchen view 6" },
      { src: "/images/kitchen/kitchen-7.jpg", alt: "Kitchen view 7" },
    ],
  },
  masterBedroom: {
    name: "Master Bedroom",
    images: [
      {
        src: "/images/master-bedroom/bedroom-1.jpg",
        alt: "Master bedroom view 1",
      },
      {
        src: "/images/master-bedroom/bedroom-2.jpg",
        alt: "Master bedroom view 2",
      },
      {
        src: "/images/master-bedroom/bedroom-3.jpg",
        alt: "Master bedroom view 3",
      },
      {
        src: "/images/master-bedroom/bedroom-4.jpg",
        alt: "Master bedroom view 4",
      },
      {
        src: "/images/master-bedroom/bedroom-5.jpg",
        alt: "Master bedroom view 5",
      },
      {
        src: "/images/master-bedroom/bedroom-6.jpg",
        alt: "Master bedroom view 6",
      },
      {
        src: "/images/master-bedroom/bedroom-7.jpg",
        alt: "Master bedroom view 7",
      },
      {
        src: "/images/master-bedroom/bedroom-8.jpg",
        alt: "Master bedroom view 8",
      },
      {
        src: "/images/master-bedroom/bedroom-9.jpg",
        alt: "Master bedroom view 9",
      },
    ],
  },
  bedroom: {
    name: "Bedroom",
    images: [
      { src: "/images/bedroom/bedroom-1.jpg", alt: "Bedroom view 1" },
      { src: "/images/bedroom/bedroom-2.jpg", alt: "Bedroom view 2" },
      { src: "/images/bedroom/bedroom-3.jpg", alt: "Bedroom view 3" },
      { src: "/images/bedroom/bedroom-4.jpg", alt: "Bedroom view 4" },
      { src: "/images/bedroom/bedroom-5.jpg", alt: "Bedroom view 5" },
    ],
  },
  bunkRoom: {
    name: "Bunk Room",
    images: [
      { src: "/images/bunk-room/bunk-room-1.jpg", alt: "Bunk room view 1" },
      { src: "/images/bunk-room/bunk-room-2.jpg", alt: "Bunk room view 2" },
      { src: "/images/bunk-room/bunk-room-3.jpg", alt: "Bunk room view 3" },
      { src: "/images/bunk-room/bunk-room-4.jpg", alt: "Bunk room view 4" },
    ],
  },
  entryWay: {
    name: "Entry Way",
    images: [{ src: "/images/entry-way/entry-way.jpg", alt: "Entry way view" }],
  },
  gameRoom: {
    name: "Game Room",
    images: [
      { src: "/images/game-room/game-room-1.jpg", alt: "Game room view 1" },
      { src: "/images/game-room/game-room-2.jpg", alt: "Game room view 2" },
      { src: "/images/game-room/game-room-3.jpg", alt: "Game room view 3" },
      { src: "/images/game-room/game-room-4.jpg", alt: "Game room view 4" },
      { src: "/images/game-room/game-room-5.jpg", alt: "Game room view 5" },
      { src: "/images/game-room/game-room-6.jpg", alt: "Game room view 6" },
    ],
  },
};

export const propertyData = {
  airbnb: {
    url: "https://www.airbnb.com/rooms/1530911358222776578",
    id: 1530911358222776578,
  },
};

export const content = {
  site: {
    name: "Starlit Grove",
    domain: "https://www.thestarlitgrovevenue.com/",
    description:
      "Experience modern country comfort near McKinney Historic Downtown, BarnHill Vineyards, and Natural Springs Park! This 4-bedroom home sleeps up to 12 guests and blends rustic Texas charm with modern convenience. Unwind in the spacious living area, enjoy cookouts on the patio, or sip coffee while taking in peaceful country views. Explore nearby wineries, trails, and local dining just minutes away, or spend cozy evenings with loved ones in a warm, welcoming space designed for connection and relaxation.",
    contactEmail: "christi@moonlightfallsstjo.com",
    phone: 2147187017,
    host: {
      name: "Christi",
      isSuperhost: true,
      bio: "Christi is a Superhost — committed to providing great stays for guests.",
      location: "Anna, Texas",
      responseRate: "100%",
      responseTime: "within an hour",
    },
  },
  hero: {
    kicker: "4 Bedrooms • 3 Baths • Sleeps 12 • Country Views • Near McKinney",
    title: "Starlit Grove",
    subtitle: "Events and Lodging",
    cta: {
      label: "Reserve",
      href: "/booking",
      secondaryLabel: "Packages",
      secondaryHref: "/packages",
    },
    images: [
      {
        src: "/images/starlit-hero.png",
        alt: "Front exterior of Starlit Grove with large lawn and country views",
      },
    ],
  },
  sleeps: {
    totalGuests: 12,
    bedrooms: 4,
    beds: [
      { room: "Bedroom 1", type: "King", count: 1 },
      { room: "Bedroom 2", type: "Queen", count: 1 },
      { room: "Bedroom 3", type: "Bunk beds", count: 2 },
      { room: "Bedroom 4", type: "Air mattress + Couch", count: 2 },
      { room: "Living Room", type: "Couch", count: 1 },
    ],
    baths: { full: 3 },
    sqft: 2500,
  },
  features: {
    summaryBullets: [
      "4 bedrooms, 3 baths • Sleeps 12",
      "Fully stocked kitchen with dining area",
      "Smart TV & high-speed Wi-Fi",
      "Washer & dryer • Indoor fireplace",
      "Dedicated workspace for remote work",
      "BBQ grill & covered patio with seating",
      "Free parking on premises",
      "Minutes to BarnHill Vineyards, Erwin Park, and Historic McKinney",
      "Concierge services available upon request",
    ],
    amenities: [
      { label: "Wi-Fi", featured: true },
      { label: "Smart TV" },
      { label: "Air conditioning" },
      { label: "Indoor fireplace" },
      { label: "Dedicated workspace" },
      { label: "Full kitchen" },
      { label: "Coffee maker" },
      { label: "Toaster" },
      { label: "Cookware & utensils" },
      { label: "BBQ grill" },
      { label: "Deck & patio seating" },
      { label: "Washer" },
      { label: "Free parking on premises" },
      { label: "Pet-friendly" },
      { label: "Smoke alarm" },
      { label: "Carbon monoxide alarm" },
      { label: "Fire extinguisher" },
      { label: "First aid kit" },
      { label: "Exterior security cameras (front, garage, back)" },
      { label: "Essentials — Not provided" },
      { label: "Hair dryer — Not provided" },
      { label: "Private entrance — Not available" },
      { label: "Heating — Not available" },
    ],
  },
  galleryFeatures: [
    roomData.property.images[0],
    roomData.masterBedroom.images[0],
    roomData.kitchen.images[0],
    roomData.livingRoom.images[0],
  ],
  photos: [
    {
      src: "/images/living-room/living-room.jpg",
      alt: "Cozy living area with natural light and smart TV",
    },
    {
      src: "/images/kitchen.jpg",
      alt: "Fully stocked kitchen with dining table and appliances",
    },
    {
      src: "/images/bedroom.jpg",
      alt: "Spacious master bedroom with king bed and soft lighting",
    },
    {
      src: "/images/pond.jpg",
      alt: "Peaceful Texas country views from the backyard patio",
    },
    {
      src: "/images/event-lawn.jpg",
      alt: "Outdoor patio with grill and seating",
    },
  ],
  booking: {
    minNights: 2,
    checkIn: "After 3 PM",
    checkOut: "Before 11 AM",
    cancellation:
      "Full refund if canceled 7 days before check-in. 50% refund up to 2 days before check-in.",
    depositRequired: true,
  },
  policies: [
    {
      title: "Guest Access",
      body: "Enjoy self check-in for your convenience. Guests have full access to the home, outdoor patio, and yard for the duration of their stay.",
    },
    {
      title: "Events",
      body: "Weddings, birthdays, retreats, and celebrations are welcome with prior approval and applicable event fees.",
    },
    {
      title: "Concierge Services",
      body: "Available for an additional fee and must be arranged in advance. Includes catered meals, s’more baskets, champagne & strawberries, charcuterie boards, decorated cookies, cakes, themed décor, custom shirts, private wine tours, and limo service.",
    },
    {
      title: "Pets",
      body: "Pets are welcome with an additional cleaning fee. Please keep them leashed outdoors.",
    },
    {
      title: "Safety & Property",
      body: "Exterior security cameras are located at the front, garage, and back of the house. Smoke and carbon monoxide alarms are installed. A fire extinguisher and first aid kit are available.",
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
      "Near BarnHill Vineyards",
      "Close to Historic Downtown McKinney",
      "Minutes from Natural Springs Park and Erwin Park",
      "45 min to Dallas",
    ],
    mapEmbedUrl: "https://maps.google.com/?q=10585+County+Road+505,+Anna,+TX",
  },
  faq: [
    {
      q: "Can we host weddings or events?",
      a: "Yes! Events are welcome with prior approval and event fees.",
    },
    {
      q: "Is the property pet-friendly?",
      a: "Yes — pets are allowed with an additional cleaning fee.",
    },
    {
      q: "Do you offer concierge services?",
      a: "Yes. Options include catered meals, s’mores baskets, wine tours, themed décor, and more. Must be arranged before arrival.",
    },
  ],
  seo: {
    title:
      "Starlit Grove | Spacious 4BR Getaway • Sleeps 12 • BBQ & Country Views near McKinney, TX",
    description:
      "Modern country home in Anna, TX. 4 bedrooms, 3 baths, full kitchen, and outdoor patio with BBQ. Minutes from McKinney’s Historic Downtown and BarnHill Vineyards.",
    ogImage: "/images/og-cover.jpg",
  },
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
};

// Booking Widget
const currentDate: Date = new Date();
const today: Date = new Date();

const formattedDate: string = `${
  currentDate.getMonth() + 1
}-${currentDate.getDate()}-${currentDate.getFullYear()}`;

const widgetData = {
  maximun_availability: formattedDate,
  type: "agency",
  fields: ["phone", "notes"],
  showAvailability: true,
  lang: "US",
  minStay: true,
  price: true,
  hidePriceWithoutDates: true,
  cc: content.site.contactEmail,
  emailClient: true,
  saveCookie: true,
  showDynamicMinStay: true,
  backgroundColor: "#FFF",
  buttonSubmit: { backgroundColor: "#f0bb78" },
  showPriceDetailsLink: true,
  showGetQuoteLink: false,
  labelColor: "#000",
  showTotalWithoutSD: true,
  redirectURL: "https://thestarlitgrovevenue.com?booking=success",
  showDiscount: true,
  includeReferrerToRequest: true,
  customDomainName: null,
  source: null,
  aid: "ORB-49587220416635719",
  clickID: null,
  valuesByDefaults: {
    checkIn: { value: today.toDateString() },
    checkOut: { value: "" },
    guests: { value: "" },
    discountCode: { value: "" },
  },
  pathRoot: "https://platform.hostfully.com/",
};

export const bookingScript = `<script type="text/javascript" src="https://platform.hostfully.com/assets/js/pikaday.js"></script>
<script type="text/javascript" src="https://platform.hostfully.com/assets/js/leadCaptureWidget_2.0.js"></script>
<div id="leadWidget"></div>
<script>
var widget = new Widget('leadWidget', '1510fa08-fbe0-4f2c-abc6-c5225900b486', ${JSON.stringify(
  widgetData
)});
widget.init();
</script>`;
