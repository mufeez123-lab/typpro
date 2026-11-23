"use client";

import Link from "next/link";
import React from "react";

interface CountryItem {
  name: string;
  flag: React.ReactNode;
}

// Crisp, lightweight circular SVG flags
const AfghanistanFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect x="0" y="0" width="10.67" height="32" fill="#000000" />
    <rect x="10.67" y="0" width="10.66" height="32" fill="#d3202a" />
    <rect x="21.33" y="0" width="10.67" height="32" fill="#007a36" />
    <circle cx="16" cy="16" r="4.5" fill="none" stroke="#ffffff" strokeWidth="1" />
    <path d="M14.5 17h3M16 14v4" stroke="#ffffff" strokeWidth="0.9" strokeLinecap="round" />
  </svg>
);

const BrazilFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect width="32" height="32" fill="#009c3b" />
    <polygon points="16,4.5 28,16 16,27.5 4,16" fill="#ffdf00" />
    <circle cx="16" cy="16" r="6.5" fill="#002776" />
    <path d="M10 16.5 C13 14 19 14.5 22 17" stroke="#ffffff" strokeWidth="1.2" fill="none" />
  </svg>
);

const AustraliaFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect width="32" height="32" fill="#00008b" />
    {/* Union Jack Canton */}
    <rect x="0" y="0" width="16" height="16" fill="#00247d" />
    <path d="M0 0L16 16M16 0L0 16" stroke="#ffffff" strokeWidth="2.5" />
    <path d="M0 0L16 16M16 0L0 16" stroke="#cc142b" strokeWidth="1.2" />
    <path d="M8 0V16M0 8H16" stroke="#ffffff" strokeWidth="4" />
    <path d="M8 0V16M0 8H16" stroke="#cc142b" strokeWidth="2" />
    {/* Commonwealth Star */}
    <circle cx="8" cy="24" r="3" fill="#ffffff" />
    {/* Southern Cross */}
    <circle cx="24" cy="7" r="1.3" fill="#ffffff" />
    <circle cx="21" cy="13" r="1.3" fill="#ffffff" />
    <circle cx="27" cy="15" r="1.3" fill="#ffffff" />
    <circle cx="24" cy="23" r="1.3" fill="#ffffff" />
    <circle cx="25.5" cy="18" r="0.9" fill="#ffffff" />
  </svg>
);

const ColombiaFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect x="0" y="0" width="32" height="16" fill="#fcd116" />
    <rect x="0" y="16" width="32" height="8" fill="#003893" />
    <rect x="0" y="24" width="32" height="8" fill="#ce1126" />
  </svg>
);

const AustriaFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect x="0" y="0" width="32" height="10.67" fill="#ed2939" />
    <rect x="0" y="10.67" width="32" height="10.66" fill="#ffffff" />
    <rect x="0" y="21.33" width="32" height="10.67" fill="#ed2939" />
  </svg>
);

const NewZealandFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect width="32" height="32" fill="#00247d" />
    {/* Union Jack Canton */}
    <rect x="0" y="0" width="16" height="16" fill="#00247d" />
    <path d="M0 0L16 16M16 0L0 16" stroke="#ffffff" strokeWidth="2.5" />
    <path d="M0 0L16 16M16 0L0 16" stroke="#cc142b" strokeWidth="1.2" />
    <path d="M8 0V16M0 8H16" stroke="#ffffff" strokeWidth="4" />
    <path d="M8 0V16M0 8H16" stroke="#cc142b" strokeWidth="2" />
    {/* Southern Cross red stars */}
    <circle cx="24" cy="7" r="1.4" fill="#cc142b" stroke="#ffffff" strokeWidth="0.5" />
    <circle cx="21" cy="13" r="1.4" fill="#cc142b" stroke="#ffffff" strokeWidth="0.5" />
    <circle cx="27" cy="15" r="1.4" fill="#cc142b" stroke="#ffffff" strokeWidth="0.5" />
    <circle cx="24" cy="23" r="1.6" fill="#cc142b" stroke="#ffffff" strokeWidth="0.5" />
  </svg>
);

const ChinaFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect width="32" height="32" fill="#de2910" />
    {/* Big Star */}
    <polygon points="6.5,2 7.7,5.5 11.2,5.5 8.4,7.5 9.5,11 6.5,8.8 3.5,11 4.6,7.5 1.8,5.5 5.3,5.5" fill="#ffde00" />
    {/* 4 Small Stars */}
    <circle cx="12" cy="4" r="0.9" fill="#ffde00" />
    <circle cx="14" cy="6.5" r="0.9" fill="#ffde00" />
    <circle cx="14" cy="9.5" r="0.9" fill="#ffde00" />
    <circle cx="12" cy="12" r="0.9" fill="#ffde00" />
  </svg>
);

const UsaFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect width="32" height="32" fill="#bf0a30" />
    <path d="M0 2.46h32M0 7.38h32M0 12.3h32M0 17.22h32M0 22.14h32M0 27.06h32" stroke="#ffffff" strokeWidth="2.46" />
    <rect width="15" height="15" fill="#002868" />
    <circle cx="4" cy="4" r="0.8" fill="#ffffff" />
    <circle cx="8" cy="4" r="0.8" fill="#ffffff" />
    <circle cx="12" cy="4" r="0.8" fill="#ffffff" />
    <circle cx="6" cy="7.5" r="0.8" fill="#ffffff" />
    <circle cx="10" cy="7.5" r="0.8" fill="#ffffff" />
    <circle cx="4" cy="11" r="0.8" fill="#ffffff" />
    <circle cx="8" cy="11" r="0.8" fill="#ffffff" />
    <circle cx="12" cy="11" r="0.8" fill="#ffffff" />
  </svg>
);

const UkFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect width="32" height="32" fill="#012169" />
    <path d="M0 0L32 32M32 0L0 32" stroke="#ffffff" strokeWidth="5.5" />
    <path d="M0 0L32 32M32 0L0 32" stroke="#c8102e" strokeWidth="2.4" />
    <path d="M16 0V32M0 16H32" stroke="#ffffff" strokeWidth="8" />
    <path d="M16 0V32M0 16H32" stroke="#c8102e" strokeWidth="4.8" />
  </svg>
);

const FranceFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect x="0" y="0" width="10.67" height="32" fill="#002654" />
    <rect x="10.67" y="0" width="10.66" height="32" fill="#ffffff" />
    <rect x="21.33" y="0" width="10.67" height="32" fill="#ed2939" />
  </svg>
);

const BulgariaFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect x="0" y="0" width="32" height="10.67" fill="#ffffff" />
    <rect x="0" y="10.67" width="32" height="10.66" fill="#00966e" />
    <rect x="0" y="21.33" width="32" height="10.67" fill="#d62612" />
  </svg>
);

const CanadaFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect x="0" y="0" width="8" height="32" fill="#ff0000" />
    <rect x="8" y="0" width="16" height="32" fill="#ffffff" />
    <rect x="24" y="0" width="8" height="32" fill="#ff0000" />
    {/* Stylized Maple Leaf */}
    <path
      d="M16 7L17.5 12L20.5 11L19 14.5L22 16L18.5 17.5L19 21L16.5 19.5L16 25L15.5 19.5L13 21L13.5 17.5L10 16L13 14.5L11.5 11L14.5 12Z"
      fill="#ff0000"
    />
  </svg>
);

const GermanyFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect x="0" y="0" width="32" height="10.67" fill="#000000" />
    <rect x="0" y="10.67" width="32" height="10.66" fill="#dd0000" />
    <rect x="0" y="21.33" width="32" height="10.67" fill="#ffce00" />
  </svg>
);

const MalaysiaFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect width="32" height="32" fill="#cc0000" />
    <path d="M0 2.3h32M0 6.9h32M0 11.5h32M0 16.1h32M0 20.7h32M0 25.3h32M0 29.9h32" stroke="#ffffff" strokeWidth="2.3" />
    <rect width="16" height="16" fill="#010066" />
    <circle cx="8" cy="8" r="4.5" fill="#ffcc00" />
    <circle cx="9.2" cy="8" r="3.8" fill="#010066" />
    <polygon points="10,6.5 10.5,8 12,8 10.8,9 11.2,10.5 10,9.5 8.8,10.5 9.2,9 8,8 9.5,8" fill="#ffcc00" />
  </svg>
);

const ThailandFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect x="0" y="0" width="32" height="5.33" fill="#a51931" />
    <rect x="0" y="5.33" width="32" height="5.33" fill="#f4f5f8" />
    <rect x="0" y="10.66" width="32" height="10.68" fill="#2d2a4a" />
    <rect x="0" y="21.34" width="32" height="5.33" fill="#f4f5f8" />
    <rect x="0" y="26.67" width="32" height="5.33" fill="#a51931" />
  </svg>
);

const CambodiaFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect x="0" y="0" width="32" height="8" fill="#032ea1" />
    <rect x="0" y="8" width="32" height="16" fill="#e00025" />
    <rect x="0" y="24" width="32" height="8" fill="#032ea1" />
    {/* Angkor Wat silhouette */}
    <path d="M11 20h10v-3h-1.5l-0.5-3h-1.5l-0.5 3h-2l-0.5-4.5h-1.5l-0.5 4.5h-2l-0.5-3h-1.5l-0.5 3h-1.5z" fill="#ffffff" />
  </svg>
);

const UaeFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect x="0" y="0" width="32" height="10.67" fill="#00732f" />
    <rect x="0" y="10.67" width="32" height="10.66" fill="#ffffff" />
    <rect x="0" y="21.33" width="32" height="10.67" fill="#000000" />
    <rect x="0" y="0" width="8.5" height="32" fill="#ff0000" />
  </svg>
);

const SpainFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect x="0" y="0" width="32" height="8" fill="#aa151b" />
    <rect x="0" y="8" width="32" height="16" fill="#f1bf00" />
    <rect x="0" y="24" width="32" height="8" fill="#aa151b" />
    <circle cx="10" cy="16" r="3" fill="#aa151b" />
  </svg>
);

const SwitzerlandFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect width="32" height="32" fill="#d52b1e" />
    <rect x="13" y="7" width="6" height="18" fill="#ffffff" rx="1" />
    <rect x="7" y="13" width="18" height="6" fill="#ffffff" rx="1" />
  </svg>
);

const JapanFlag = () => (
  <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 rounded-full border border-black/10 shadow-inner">
    <rect width="32" height="32" fill="#ffffff" />
    <circle cx="16" cy="16" r="7.5" fill="#bc002d" />
  </svg>
);

// Marquee Row 1 Items (Moving to the LEFT)
const ROW_1_COUNTRIES: CountryItem[] = [
  { name: "Afghanistan", flag: <AfghanistanFlag /> },
  { name: "Brazil", flag: <BrazilFlag /> },
  { name: "Australia", flag: <AustraliaFlag /> },
  { name: "Colombia", flag: <ColombiaFlag /> },
  { name: "Austria", flag: <AustriaFlag /> },
  // { name: "New Zealand", flag: <NewZealandFlag /> },
  { name: "China", flag: <ChinaFlag /> },
  { name: "USA", flag: <UsaFlag /> },
  // { name: "United Kingdom", flag: <UkFlag /> },
  { name: "France", flag: <FranceFlag /> },
  { name: "Switzerland", flag: <SwitzerlandFlag /> },
  { name: "Japan", flag: <JapanFlag /> },
];

// Marquee Row 2 Items (Moving to the RIGHT)
const ROW_2_COUNTRIES: CountryItem[] = [
  { name: "Brazil", flag: <BrazilFlag /> },
  { name: "Bulgaria", flag: <BulgariaFlag /> },
  { name: "Canada", flag: <CanadaFlag /> },
  { name: "Germany", flag: <GermanyFlag /> },
  { name: "Malaysia", flag: <MalaysiaFlag /> },
  { name: "Thailand", flag: <ThailandFlag /> },
  { name: "Cambodia", flag: <CambodiaFlag /> },
  { name: "UAE", flag: <UaeFlag /> },
  { name: "Spain", flag: <SpainFlag /> },
  { name: "Austria", flag: <AustriaFlag /> },
  { name: "Australia", flag: <AustraliaFlag /> },
  // { name: "New Zealand", flag: <NewZealandFlag /> },
];

export default function ChartersBenefits() {
  return (
    <section
      id="charters-benefits"
      className="relative overflow-hidden bg-white py-20 "
    >
      <div className="mx-auto max-w-[1200px] px-6 text-center sm:px-10">
        {/* Main Section Heading */}
        <h2 className="text-[30px] font-semibold tracking-[-0.045em] text-[#141724] sm:text-[38px] lg:text-[44px]">
          Explore our Jetly Charters Benefits
        </h2>
      </div>

      {/* Marquee Wrapper with soft edge gradient masks */}
      <div className="relative mt-12 sm:mt-14 w-full overflow-hidden">
        {/* Left & Right Edge Vignette Fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 sm:w-28 lg:w-36 bg-gradient-to-r from-white via-white/80 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 sm:w-28 lg:w-36 bg-gradient-to-l from-white via-white/80 to-transparent"
        />

        {/* Row 1: Marquee to the LEFT */}
        <div className="flex overflow-hidden py-2">
          <div className="animate-marquee-left flex items-center gap-4 sm:gap-5">
            {/* Set 1 */}
            {ROW_1_COUNTRIES.map((item, idx) => (
              <div
                key={`r1-a-${idx}`}
                className="group flex items-center gap-3 rounded-full border border-[#e4e8f1] bg-white px-3 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ccd4e4] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] cursor-pointer select-none"
              >
                {item.flag}
                <span className="text-[14.5px] font-medium text-[#141724] transition-colors duration-200 group-hover:text-[#e03a3e] sm:text-[18px]">
                  {item.name}
                </span>
              </div>
            ))}

            {/* Set 2 (for seamless loop) */}
            {ROW_1_COUNTRIES.map((item, idx) => (
              <div
                key={`r1-b-${idx}`}
                className="group flex items-center gap-3 rounded-full border border-[#e4e8f1] bg-white px-3 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ccd4e4] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] cursor-pointer select-none"
              >
                {item.flag}
                <span className="text-[14.5px] font-medium text-[#141724] transition-colors duration-200 group-hover:text-[#e03a3e] sm:text-[18px]">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Marquee to the RIGHT */}
        <div className="mt-3.5  flex overflow-hidden py-2">
          <div className="animate-marquee-right flex items-center gap-4 sm:gap-5">
            {/* Set 1 */}
            {ROW_2_COUNTRIES.map((item, idx) => (
              <div
                key={`r2-a-${idx}`}
                className="group flex items-center gap-3 rounded-full border border-[#e4e8f1] bg-white px-3 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ccd4e4] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] cursor-pointer select-none"
              >
                {item.flag}
                <span className="text-[14.5px] font-medium text-[#141724] transition-colors duration-200 group-hover:text-[#e03a3e] sm:text-[18px]">
                  {item.name}
                </span>
              </div>
            ))}

            {/* Set 2 (for seamless loop) */}
            {ROW_2_COUNTRIES.map((item, idx) => (
              <div
                key={`r2-b-${idx}`}
                className="group flex items-center gap-3 rounded-full border border-[#e4e8f1] bg-white px-3 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ccd4e4] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] cursor-pointer select-none"
              >
                {item.flag}
                <span className="text-[14.5px] font-medium text-[#141724] transition-colors duration-200 group-hover:text-[#e03a3e] sm:text-[18px]">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action CTA Buttons */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 px-6 sm:mt-14 sm:gap-5">
        {/* Red CTA Button */}
        <Link
          href="#services"
          className="inline-flex items-center gap-2 rounded-[6px] bg-[#e03a3e] px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-wider text-white shadow-[0_6px_20px_rgba(224,58,62,0.35)] transition-all duration-200 hover:bg-[#c62828] hover:shadow-[0_8px_24px_rgba(224,58,62,0.45)]"
        >
          <span>EXPLORE SERVICES</span>
          <span aria-hidden="true">&gt;</span>
        </Link>

        {/* Outline CTA Button */}
        <Link
          href="#about"
          className="inline-flex items-center gap-2 rounded-[6px] border border-[#141724] bg-white px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-wider text-[#141724] shadow-sm transition-all duration-200 hover:bg-[#141724] hover:text-white"
        >
          <span>LEARN MORE</span>
          <span aria-hidden="true">&gt;</span>
        </Link>
      </div>
    </section>
  );
}
