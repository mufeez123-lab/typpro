"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export interface EmptyLegDeal {
  id: string;
  from: string;
  to: string;
  image: string;
  description: string;
  pax: number;
  date: string;
  time: string;
  price: string;
  aircraft: string;
}

const DEALS: EmptyLegDeal[] = [
  {
    id: "pkg-1",
    from: "Dubai Mainland",
    to: "Commercial License",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Complete Dubai mainland LLC formation with 100% foreign ownership, virtual office Ejari, DED approvals, and 1 investor visa included.",
    pax: 1,
    date: "Mainland LLC",
    time: "24-48 Hours",
    price: "From AED 12,500",
    aircraft: "Commercial",
  },
  {
    id: "pkg-2",
    from: "UAE Free Zone",
    to: "Starter Package",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description:
      "Zero corporate tax under statutory threshold, 100% capital repatriation, flexible desk workspace, and fast-track registration.",
    pax: 2,
    date: "Free Zone FZE",
    time: "3-5 Days",
    price: "From AED 9,999",
    aircraft: "Free Zone",
  },
  {
    id: "pkg-3",
    from: "UAE Golden Visa",
    to: "10-Year Residency",
    image:
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80",
    description:
      "Long-term self-sponsored residency for real estate investors, entrepreneurs, and skilled executives with full family sponsorship.",
    pax: 10,
    date: "Self-Sponsored",
    time: "5-7 Days",
    price: "From AED 4,500",
    aircraft: "Residency",
  },
  {
    id: "pkg-4",
    from: "Corporate PRO",
    to: "Annual Clearance",
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Comprehensive government document clearing, MOHRE labour quotas, trade license renewal management, and banking coordination.",
    pax: 1,
    date: "Annual Retainer",
    time: "24/7 Support",
    price: "Custom Quote",
    aircraft: "PRO Support",
  },
];

export default function EmptyLegs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % DEALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + DEALS.length) % DEALS.length);
  };

  useEffect(() => {
    if (isPaused) return;

    autoSlideRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [isPaused, currentIndex]);

  const currentDeal = DEALS[currentIndex];

  return (
    <section
      id="empty-legs"
      className="relative overflow-hidden bg-white py-20 "
    >
      <div className="relative z-10 mx-auto max-w-[1090px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, Copy & Dotted World Map with Glowing Pins */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <h2 className="text-[34px] font-semibold leading-[1.14] tracking-[-0.025em] text-[#141724] sm:text-[42px] ">
                Popular Business
                <br />
                Setup Packages &amp;
                <br />
                Special Offers
              </h2>

              <p className="mt-5 max-w-[480px] text-[13px] font-normal leading-[1.72] text-[#555a6d] sm:text-[14px]">
                Take advantage of our transparent, all-inclusive company formation and licensing packages tailored to your commercial goals in Dubai and across the UAE.
              </p>
            </div>

            {/* Dotted World Map Illustration with Pins */}
            <div className="relative mt-10 h-[240px] w-full max-w-[620px] select-none sm:h-[280px]">
              {/* Semi-transparent Dotted Map Vector */}
              <div className="absolute inset-0 flex items-center justify-center opacity-85">
                <Image
                  src="/images/map2.svg"
                  alt="Global Flight Routes World Map"
                  fill
                  className="object-contain object-left"
                />
              </div>

              {/* Glowing Interactive Flight Pins */}
              {/* Pin 1: North America (Red) */}
              <div
                className="group/pin absolute left-[18%] top-[38%] -translate-x-1/2 -translate-y-full cursor-pointer transition-transform duration-300 hover:scale-125"
                title="New York"
              >
                <div className="relative flex flex-col items-center">
                  <svg
                    width="26"
                    height="34"
                    viewBox="0 0 24 32"
                    fill="none"
                    className="drop-shadow-[0_6px_10px_rgba(234,56,76,0.35)]"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37 18.63 0 12 0Z"
                      fill="#ea384c"
                    />
                    <circle cx="12" cy="12" r="5" fill="white" />
                  </svg>
                  <div className="h-1.5 w-3.5 rounded-full bg-[#ea384c] blur-[2px] opacity-70" />
                </div>
              </div>

              {/* Pin 2: South America (Orange/Amber) */}
              <div
                className="group/pin absolute left-[32%] top-[68%] -translate-x-1/2 -translate-y-full cursor-pointer transition-transform duration-300 hover:scale-125"
                title="Sao Paulo"
              >
                <div className="relative flex flex-col items-center">
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    fill="none"
                    className="drop-shadow-[0_6px_10px_rgba(245,158,11,0.35)]"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37 18.63 0 12 0Z"
                      fill="#f59e0b"
                    />
                    <circle cx="12" cy="12" r="5" fill="white" />
                  </svg>
                  <div className="h-1.5 w-3.5 rounded-full bg-[#f59e0b] blur-[2px] opacity-70" />
                </div>
              </div>

              {/* Pin 3: Europe (Purple) */}
              <div
                className="group/pin absolute left-[54%] top-[34%] -translate-x-1/2 -translate-y-full cursor-pointer transition-transform duration-300 hover:scale-125"
                title="London / Paris"
              >
                <div className="relative flex flex-col items-center">
                  <svg
                    width="26"
                    height="34"
                    viewBox="0 0 24 32"
                    fill="none"
                    className="drop-shadow-[0_6px_10px_rgba(139,92,246,0.4)]"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37 18.63 0 12 0Z"
                      fill="#8b5cf6"
                    />
                    <circle cx="12" cy="12" r="5" fill="white" />
                  </svg>
                  <div className="h-1.5 w-3.5 rounded-full bg-[#8b5cf6] blur-[2px] opacity-70" />
                </div>
              </div>

              {/* Pin 4: Middle East / Africa (Blue) */}
              <div
                className="group/pin absolute left-[45%] top-[54%] -translate-x-1/2 -translate-y-full cursor-pointer transition-transform duration-300 hover:scale-125"
                title="Dubai / Nairobi"
              >
                <div className="relative flex flex-col items-center">
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    fill="none"
                    className="drop-shadow-[0_6px_10px_rgba(59,130,246,0.35)]"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37 18.63 0 12 0Z"
                      fill="#3b82f6"
                    />
                    <circle cx="12" cy="12" r="5" fill="white" />
                  </svg>
                  <div className="h-1.5 w-3.5 rounded-full bg-[#3b82f6] blur-[2px] opacity-70" />
                </div>
              </div>

              {/* Pin 5: Asia Pacific / Australia (Cyan/Blue) */}
              <div
                className="group/pin absolute left-[78%] top-[72%] -translate-x-1/2 -translate-y-full cursor-pointer transition-transform duration-300 hover:scale-125"
                title="Sydney"
              >
                <div className="relative flex flex-col items-center">
                  <svg
                    width="26"
                    height="34"
                    viewBox="0 0 24 32"
                    fill="none"
                    className="drop-shadow-[0_6px_10px_rgba(99,102,241,0.4)]"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37 18.63 0 12 0Z"
                      fill="#6366f1"
                    />
                    <circle cx="12" cy="12" r="5" fill="white" />
                  </svg>
                  <div className="h-1.5 w-3.5 rounded-full bg-[#6366f1] blur-[2px] opacity-70" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Owl Carousel / Flight Deal Stage */}
          <div
            className="lg:col-span-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* The Flight Deal Card */}
            <div className="overflow-hidden rounded-[6px] p-1 border border-[#e8ecf4] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300">
              {/* Top Card Image: Setup Package Featured Image */}
              <div className="relative aspect-[19/10] w-full rounded-[6px]  overflow-hidden bg-[#eef1f6]">
                <Image
                  src={currentDeal.image}
                  alt={`${currentDeal.from} - ${currentDeal.to} setup package`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  unoptimized
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8">
                {/* Route Row: London ----------- [Globe+Plane] ----------- Sydney */}
                <div className="flex items-center justify-between gap-3">
                  {/* Origin City */}
                  <span className="text-[16px] font-bold tracking-tight text-[#141724] sm:text-[17px]">
                    {currentDeal.from}
                  </span>

                  {/* Connecting Line with Globe & Plane Icon */}
                  <div className="relative flex flex-1 items-center justify-center">
                    <div className="h-[1px] w-full bg-[#e3e7f0]" />
                    <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-white px-1 text-[#e03a3e]">
                      <svg
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M3.6 9h16.8M3.6 15h16.8" />
                        <path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                        {/* Mini Airplane Silhouette */}
                        <path
                          d="M10.5 13.5L12 7.5L13.5 13.5L18.5 14.5L12 16.5L5.5 14.5Z"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Destination City */}
                  <span className="text-[16px] font-bold tracking-tight text-[#141724] sm:text-[17px]">
                    {currentDeal.to}
                  </span>
                </div>

                {/* Flight Tagline Description */}
                <p className="mt-5 text-[12px] font-normal leading-[1.65] text-[#60657b] ">
                  {currentDeal.description}
                </p>

                {/* Metadata Row: Pax, Date, Time */}
                <div className="mt-2 flex flex-wrap items-center gap-4 text-[12.5px] font-medium text-[#646a80] sm:gap-6">
                  {/* Pax */}
                  <div className="inline-flex items-center gap-1.5">
                    <svg
                      className="h-4 w-4 text-[#8a91a5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>Visas: {currentDeal.pax}</span>
                  </div>

                  {/* Date */}
                  <div className="inline-flex items-center gap-1.5">
                    <svg
                      className="h-4 w-4 text-[#8a91a5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>{currentDeal.date}</span>
                  </div>

                  {/* Time */}
                  <div className="inline-flex items-center gap-1.5">
                    <svg
                      className="h-4 w-4 text-[#8a91a5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{currentDeal.time}</span>
                  </div>
                </div>

                {/* Bottom Row: Price + Book Now Button */}
                <div className="mt-7 flex items-center justify-between border-t border-[#f0f3f8] pt-6">
                  {/* Price */}
                  <span className="text-[20px] font-bold tracking-tight text-[#141724] sm:text-[22px]">
                    {currentDeal.price}
                  </span>

                  {/* Book Now Button */}
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[#d70000] px-6 py-2.5 text-[12.5px] font-bold uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(224,58,62,0.35)] transition-all duration-200 hover:bg-[#c62828] hover:shadow-[0_6px_18px_rgba(224,58,62,0.45)]"
                  >
                    <span>ENQUIRE NOW</span>
                    <span aria-hidden="true">&gt;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination Dots with Custom Center Target Indicator */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Deal"
                className="p-1 text-[#8a91a5] hover:text-[#d8232a] transition-colors"
              >
                <span className="sr-only">Previous</span>
              </button>

              {DEALS.map((deal, idx) => {
                const isActive = idx === currentIndex;

                return (
                  <button
                    key={deal.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to deal ${idx + 1}`}
                    className="flex items-center justify-center focus:outline-none"
                  >
                    {isActive ? (
                      /* Active indicator: ring with center red dot (as seen in screenshot) */
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#d8232a]/40 bg-white">
                        <span className="h-2 w-2 rounded-full bg-[#d8232a]" />
                      </span>
                    ) : (
                      /* Inactive dot */
                      <span className="h-2 w-2 rounded-full bg-[#cbd2e1] transition-colors duration-200 hover:bg-[#9aa2b6]" />
                    )}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Deal"
                className="p-1 text-[#8a91a5] hover:text-[#d8232a] transition-colors"
              >
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
