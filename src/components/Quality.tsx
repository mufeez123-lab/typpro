"use client";

import Image from "next/image";

interface PillarItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PILLARS: PillarItem[] = [
  {
    number: "01",
    title: "Our Vision",
    description:
      "To be the UAE's most trusted corporate advisory and business setup partner, inspiring entrepreneurs and global enterprises to establish, innovate, and lead in world-class commercial ecosystems.",
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
        {/* Eye contour for forward-looking vision */}
        <path d="M4 24C9.5 15 16.5 10 24 10C31.5 10 38.5 15 44 24C38.5 33 31.5 38 24 38C16.5 38 9.5 33 4 24Z" />
        {/* Iris */}
        <circle cx="24" cy="24" r="7.5" strokeWidth="2" />
        {/* Focal pupil */}
        <circle cx="24" cy="24" r="3" fill="#d8232a" />
        {/* Perspective / aspiration rays */}
        <line x1="24" y1="4" x2="24" y2="7" strokeWidth="2" />
        <line x1="37" y1="9" x2="35" y2="11" strokeWidth="1.8" />
        <line x1="11" y1="9" x2="13" y2="11" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Our Mission",
    description:
      "To streamline every facet of company formation, government compliance, and PRO services with transparent guidance, rapid execution, and customized solutions that turn bold ambitions into reality.",
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
        {/* Bullseye target rings */}
        <circle cx="22" cy="26" r="16" strokeWidth="2" />
        <circle cx="22" cy="26" r="10" strokeWidth="1.8" />
        <circle cx="22" cy="26" r="4" fill="#d8232a" />
        {/* Targeted arrow */}
        <line x1="22" y1="26" x2="42" y2="6" strokeWidth="2.4" />
        <path d="M34 6H42V14" strokeWidth="2.2" />
        <line x1="37" y1="11" x2="42" y2="6" strokeWidth="2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Our Core Values",
    description:
      "Built on uncompromising integrity, client-first dedication, operational excellence, and absolute transparency—fostering enduring partnerships that drive sustainable business growth.",
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
        {/* Faceted diamond symbolizing enduring values and excellence */}
        <polygon points="12,12 36,12 43,21 24,40 5,21" strokeWidth="2" />
        <line x1="5" y1="21" x2="43" y2="21" strokeWidth="1.8" />
        <line x1="12" y1="12" x2="19" y2="21" strokeWidth="1.6" />
        <line x1="36" y1="12" x2="29" y2="21" strokeWidth="1.6" />
        <line x1="19" y1="21" x2="24" y2="40" strokeWidth="1.6" />
        <line x1="29" y1="21" x2="24" y2="40" strokeWidth="1.6" />
        <line x1="24" y1="12" x2="24" y2="21" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function Quality() {
  return (
    <section
      id="quality"
      className="relative flex w-full items-center justify-center overflow-hidden py-20"
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
            Our Vision, Mission &amp; Values
          </h2>

          <p className="mx-auto mt-4 max-w-[640px] text-[13.5px] font-normal leading-[1.65] text-white/90">
            Guided by strong principles and a forward-looking vision, we empower entrepreneurs and global enterprises to build enduring, high-impact businesses across Dubai and the UAE.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3 mx-auto max-w-[1000px]">
          {PILLARS.map((item) => (
            <div
              key={item.number}
              className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[6px] bg-white p-7 shadow-[0_16px_45px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(0,0,0,0.32)] sm:min-h-[380px] sm:p-8 lg:min-h-[310px]"
            >
              {/* Top-Right Red Curved Corner Badge */}
              <div
                aria-hidden="true"
                className="absolute right-2 top-2 flex h-14 w-14 items-center justify-center rounded-bl-[44px] rounded-tr-[8px] bg-[#d70000] text-[16px] font-bold text-white shadow-sm transition-colors duration-200 group-hover:bg-[#c62828]"
              >
                <span>{item.number}</span>
              </div>

              {/* Top Left Red Line Icon */}
              <div className="flex h-14 w-14 items-center justify-start">
                {item.icon}
              </div>

              {/* Bottom Content: Title & Description */}
              <div className="mt-auto pt-6">
                {/* Card Title */}
                <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.015em] text-[#161a28]">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="mt-3 text-[13px] font-normal leading-[1.65] text-[#555a6d]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
