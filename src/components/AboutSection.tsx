"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <section
      id="about"
      className="mx-auto max-w-4xl px-4 py-6 text-[color:var(--fg)/0.9] leading-relaxed"
    >
      <h2 className="text-3xl font-semibold mb-4 font-serif">
        About This Space
      </h2>

      {/* Always visible short intro */}
      <p>
        Experience modern country comfort near McKinney Historic Downtown,
        BarnHill Vineyards, and Natural Springs Park! This 4-bedroom home sleeps
        up to 12 guests and blends rustic Texas charm with modern convenience.
        Unwind in the spacious living area, enjoy cookouts on the patio, or sip
        coffee while taking in peaceful country views.
      </p>

      {/* Read More Button */}
      <div className="mt-5">
        <button
          onClick={() => setOpen(true)}
          className="rounded-full border border-[color:var(--fg)/0.3] px-6 py-2 text-sm font-medium text-[color:var(--fg)] hover:bg-[color:var(--panel)/0.1] transition"
        >
          Read More
        </button>
      </div>

      {/* Fullscreen Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => setOpen(false)}
        >
          <div className="relative bg-white text-black max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-6 md:p-10 z-50">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-3xl text-black/60 hover:text-black"
              aria-label="Close"
            >
              ×
            </button>

            <h2 className="text-3xl font-semibold mb-4 font-serif">
              About This Space
            </h2>
            <p>
              Experience modern country comfort near McKinney Historic Downtown,
              BarnHill Vineyards, and Natural Springs Park! This 4-bedroom home
              sleeps up to 12 guests and blends rustic Texas charm with modern
              comfort. Unwind in the spacious living area, enjoy cookouts on the
              patio, or sip coffee while taking in peaceful country views.
              Explore nearby wineries, trails, and local dining just minutes
              away, or spend cozy evenings with loved ones in a warm, welcoming
              space designed for connection and relaxation.
            </p>

            <h2 className="text-3xl font-semibold mt-10 mb-4 font-serif">
              The Space
            </h2>
            <p>
              Welcome to your Anna retreat, where Texas charm meets modern
              convenience. This newly listed home offers a bright, open-concept
              layout with plenty of space to relax and reconnect.
            </p>
            <p className="mt-2 font-serif">
              Enjoy home-cooked meals in the fully stocked kitchen, gather
              around the dining table for quality time, and wind down in the
              cozy living room after a day exploring nearby attractions like
              BarnHill Vineyards, Erwin Park, and McKinney’s Historic Downtown.
              Refresh and rejuvenate in the spa-like bathrooms featuring modern
              fixtures, plush towels, and calming touches that make every shower
              or soak feel like a retreat.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3 font-serif">
              ★ Living Area
            </h3>
            <p>
              Step into a cozy living area where comfort and connection come
              naturally—a bright, welcoming space perfect for relaxing after
              exploring North Texas. Whether you’re sharing stories by the TV,
              lounging on the comfortable couch, or enjoying a quiet evening
              with loved ones, this inviting space sets the stage for memorable
              moments.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 font-serif">
              <li>Spacious and cozy seating area</li>
              <li>Smart TV with streaming access</li>
              <li>High-speed Wi-Fi</li>
              <li>Warm, homey décor with natural light</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-3 font-serif">
              ★ Kitchen & Dining
            </h3>
            <p>
              Create delicious meals with ease in the fully equipped kitchen,
              complete with modern appliances and all the essentials for a
              convenient stay.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 ">
              <li>Full-size refrigerator, microwave, and stove</li>
              <li>Coffee maker, toaster, and cooking basics</li>
              <li>Dishes, cookware, and utensils</li>
              <li>Dining area for shared meals</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-3 font-serif">
              ★ Bedrooms
            </h3>
            <p>
              Unwind in style after exploring North Texas! Our spacious bedrooms
              are designed with comfort and relaxation in mind, offering cozy
              furnishings and modern touches for a restful stay. With a mix of
              king, queen, bunk, and flexible sleeping options, this home
              comfortably accommodates up to 12 guests.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 ">
              <li>Bedroom 1: King bed · Private bathroom</li>
              <li>Bedroom 2: Queen bed · Private bathroom</li>
              <li>Bedroom 3: 2 Bunk beds</li>
              <li>Bedroom 4: Air mattress + Couch</li>
              <li>Living Room: Sleeping option · Comfortable couch</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-3 font-serif">
              ★ Bathrooms
            </h3>
            <p>
              Refresh and unwind in a serene, spa-inspired setting designed for
              ultimate relaxation. Each bathroom features modern fixtures, a
              sleek walk-in shower, and a deep soaking tub perfect for melting
              away the day’s stress. Soft lighting, plush towels, and premium
              toiletries create a soothing, hotel-like experience.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3 font-serif">
              ★ Outdoor Area
            </h3>
            <p>
              Enjoy Texas sunsets and peaceful country views from the outdoor
              patio. Fire up the grill for a BBQ or relax with a cup of coffee
              in the morning breeze.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Covered patio with seating</li>
              <li>BBQ grill</li>
              <li>Spacious yard</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-10 mb-3 font-serif">
              Book Your Getaway
            </h3>
            <p>
              More than just a place to stay, this is your personal
              retreat—crafted for comfort, style, and ease. Reserve your escape
              today and enjoy the perfect balance of modern living and prime
              location.
            </p>

            <h3 className="text-2xl font-semibold mt-10 mb-3 font-serif">
              Guest Access
            </h3>
            <p>
              Enjoy the comfort and convenience of self check-in. One day prior
              to arrival, you’ll receive an email with instructions and answers
              to any last-minute questions. The home is exclusively yours for
              the duration of your stay—relax, unwind, and make yourself at
              home.
            </p>

            <h3 className="text-2xl font-semibold mt-10 mb-3 font-serif">
              ★ Concierge Services
            </h3>
            <p>
              Concierge services are available for an additional fee and must be
              arranged in advance of your arrival.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Catered meals</li>
              <li>S’more basket</li>
              <li>Champagne & Strawberries</li>
              <li>Customized charcuterie board</li>
              <li>Birthday cake or special dessert</li>
              <li>Theme-specific decorated cookies</li>
              <li>Theme-specific party decorations</li>
              <li>Customized T-shirts or merchandise</li>
              <li>Event planning</li>
              <li>Private wine tour</li>
              <li>Limo service</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
