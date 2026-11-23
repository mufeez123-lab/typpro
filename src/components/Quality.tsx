"use client";

import Image from "next/image";

interface BookingStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BOOKING_STEPS: BookingStep[] = [
  {
    number: "01",
    title: "Search & Select an aircraft",
    description:
      "Use a private jet booking platform or app to input your travel details including departure, destination, date.",
    icon: (
      <svg
        className="h-16 w-16 text-[#d8232a] transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Magnifying lens */}
        <circle cx="21" cy="21" r="13" />
        {/* Handle */}
        <line x1="31" y1="31" x2="43" y2="43" strokeWidth="2.6" />
        {/* Jet Airplane inside the lens */}
        <path
          d="M21 13L23 18.5L28.5 19.5L24 23L25.5 28.5L21 25.5L16.5 28.5L18 23L13.5 19.5L19 18.5L21 13Z"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Customize & Confirm Your Trip",
    description:
      "Customize experience by selecting onboard amenities, catering, or special requests the pricing confirm",
    icon: (
      <svg
        className="h-16 w-16 text-[#d8232a] transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Passport booklet */}
        <rect x="9" y="10" width="21" height="29" rx="3" />
        {/* Emblem / Globe inside passport */}
        <circle cx="19.5" cy="23" r="5" strokeWidth="1.6" />
        <path d="M14.5 23H24.5" strokeWidth="1.4" />
        <path
          d="M19.5 18C21 19.5 21.5 21.3 21.5 23C21.5 24.7 21 26.5 19.5 28"
          strokeWidth="1.4"
        />
        <path
          d="M19.5 18C18 19.5 17.5 21.3 17.5 23C17.5 24.7 18 26.5 19.5 28"
          strokeWidth="1.4"
        />
        {/* Boarding ticket extending out */}
        <path
          d="M26 14H37C38.1 14 39 14.9 39 16V33C39 34.1 38.1 35 37 35H26"
          strokeWidth="1.8"
          strokeDasharray="2.5 2.5"
        />
        <line x1="30" y1="21" x2="35" y2="21" strokeWidth="1.6" />
        <line x1="30" y1="26" x2="35" y2="26" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Payment & Flight Confirmation",
    description:
      "Once you've selected your private jet and finalized the details of your trip, the next step is to complete",
    icon: (
      <svg
        className="h-16 w-16 text-[#d8232a] transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Handshake & Confirmation Payment */}
        <rect x="15" y="8" width="18" height="12" rx="2" strokeWidth="1.8" />
        <line x1="15" y1="12.5" x2="33" y2="12.5" strokeWidth="1.6" />
        <circle cx="28" cy="16.5" r="1.2" fill="currentColor" />
        {/* Hands clasping */}
        <path
          d="M10 32L17 25L23.5 29.5L29 25L37 31"
          strokeWidth="2"
        />
        <path
          d="M16 26L12.5 29.5L18 35L23 31"
          strokeWidth="1.8"
        />
        <path
          d="M31 27L34.5 30.5L29 36L24 32"
          strokeWidth="1.8"
        />
        <path d="M7 35L11.5 30.5" strokeWidth="2" />
        <path d="M41 34.5L36.5 30" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Quality() {
  return (
    <section
      id="quality"
      className="relative flex  w-full items-center justify-center overflow-hidden py-24 sm:py-28 lg:py-32"
    >
     {/* Sticky Parallax Background */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-0 select-none bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=2200&q=85')`,
    backgroundAttachment: "fixed",
  }}
>
  <Image
    src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=2200&q=85"
    alt="Private jet flying through clouds"
    fill
    priority
    sizes="100vw"
    className="sr-only"
    unoptimized
  />
  {/* Dark atmospheric overlay for high contrast */}
  <div
    aria-hidden="true"
    className="absolute inset-0 bg-gradient-to-b from-[#080f1a]/75 via-[#0b1422]/65 to-[#080e18]/85"
  />
</div>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Top Centered Header */}
        <div className="mx-auto max-w-[780px] text-center">
          <h2 className="text-[34px] font-medium leading-[1.18] tracking-[-0.02em] text-white sm:text-[42px] md:text-[48px] lg:text-[50px]">
            Easy Way to Book Private Jet
          </h2>

          <p className="mx-auto mt-4 max-w-[640px] text-[13.5px] font-normal leading-[1.65] text-white/90 ">
            Booking a private jet has become easier and more accessible than ever,
            thanks to advancements in technology and the rise of on-demand.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3 mx-auto max-w-[1000px]">
          {BOOKING_STEPS.map((step) => (
            <div
              key={step.number}
              className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[6px] bg-white p-7 shadow-[0_16px_45px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(0,0,0,0.32)] sm:min-h-[380px] sm:p-8 lg:min-h-[280px]"
            >
              {/* Top-Right Red Curved Corner Badge */}
              <div
                aria-hidden="true"
                className="absolute right-2 top-2 flex h-14 w-14 items-center justify-center rounded-bl-[44px] rounded-tr-[8px] bg-[#e03a3e] text-[16px] font-bold text-white shadow-sm transition-colors duration-200 group-hover:bg-[#c62828]"
              >
                <span>{step.number}</span>
              </div>

              {/* Top Left Red Line Icon */}
              <div className="flex h-14 w-14 items-center justify-start">
                {step.icon}
              </div>

              {/* Bottom Content: Title & Description */}
              <div className="mt-auto pt-6">
                {/* Card Title */}
                <h3 className="text-[15px] font-semibold leading-snug tracking-[-0.015em] text-[#161a28] ">
                  {step.title}
                </h3>

                {/* Card Description */}
                <p className="mt-3 text-[13px] font-normal leading-[1.65] text-[#555a6d]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
