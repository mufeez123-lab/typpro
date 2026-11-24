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
    title: "Select Activity & Jurisdiction",
    description:
      "Choose between Dubai/UAE Mainland, Free Zone, or Offshore tailored to your commercial activities with 100% foreign ownership guidance.",
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
        <circle cx="21" cy="21" r="13" />
        <line x1="31" y1="31" x2="43" y2="43" strokeWidth="2.6" />
        <rect x="14" y="14" width="14" height="14" rx="2" strokeWidth="1.6" />
        <line x1="18" y1="18" x2="24" y2="18" strokeWidth="1.5" />
        <line x1="18" y1="22" x2="22" y2="22" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Document Clearing & Approvals",
    description:
      "We reserve your trade name, draft the MOA, and submit your documentation for initial approvals with government departments.",
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
        <rect x="9" y="8" width="30" height="32" rx="3" />
        <line x1="16" y1="16" x2="32" y2="16" strokeWidth="1.8" />
        <line x1="16" y1="22" x2="32" y2="22" strokeWidth="1.8" />
        <line x1="16" y1="28" x2="26" y2="28" strokeWidth="1.8" />
        <path d="M28 26L32 30L40 22" stroke="#d8232a" strokeWidth="2.4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "License Issuance & Residency Visa",
    description:
      "Receive your official trade license, corporate establishment card, and complete your Emirates ID and residence visa processing smoothly.",
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
        <rect x="8" y="10" width="32" height="28" rx="3" strokeWidth="1.8" />
        <circle cx="18" cy="22" r="5" strokeWidth="1.6" />
        <path d="M12 32C12 28.5 15 27 18 27C21 27 24 28.5 24 32" strokeWidth="1.6" />
        <line x1="28" y1="18" x2="36" y2="18" strokeWidth="1.6" />
        <line x1="28" y1="23" x2="34" y2="23" strokeWidth="1.6" />
        <line x1="28" y1="28" x2="36" y2="28" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function Quality() {
  return (
    <section
      id="quality"
      className="relative flex  w-full items-center justify-center overflow-hidden py-20"
    >
     {/* Sticky Parallax Background */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-0 select-none bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=85')`,
    backgroundAttachment: "fixed",
  }}
>
  <Image
    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=85"
    alt="Dubai business skyline"
    fill
    priority
    sizes="100vw"
    className="sr-only"
    unoptimized
  />
  {/* Dark atmospheric overlay for high contrast */}
  <div
    aria-hidden="true"
    className="absolute inset-0 bg-gradient-to-b from-[#080f1a]/85 via-[#0b1422]/80 to-[#080e18]/90"
  />
</div>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Top Centered Header */}
        <div className="mx-auto max-w-[780px] text-center">
          <h2 className="text-[34px] font-medium leading-[1.18] tracking-[-0.02em] text-white sm:text-[42px] md:text-[48px] lg:text-[50px]">
            3 Simple Steps to Launch Your UAE Business
          </h2>

          <p className="mx-auto mt-4 max-w-[640px] text-[13.5px] font-normal leading-[1.65] text-white/90 ">
            From choosing your ideal business structure to receiving your trade license and residency visa, we make business setup in the UAE fast, reliable, and completely stress-free.
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
