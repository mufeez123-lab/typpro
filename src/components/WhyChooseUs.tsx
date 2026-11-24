"use client";

import Image from "next/image";
import Counter from "./Counter";

const STATS = [
  {
    value: "10K+",
    label: "SUCCESSFUL BUSINESSES SETUP ACROSS UAE",
    icon: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#9e1422]"
        aria-hidden="true"
      >
        <circle
          cx="16"
          cy="16"
          r="11.5"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="5.5"
          ry="11.5"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeDasharray="1.8 1.8"
        />
        <path
          d="M5 16H27"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeDasharray="1.8 1.8"
        />
        <path
          d="M7.2 10.5C10 12 13 12.6 16 12.6C19 12.6 22 12 24.8 10.5"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeLinecap="round"
        />
        <path
          d="M7.2 21.5C10 20 13 19.4 16 19.4C19 19.4 22 20 24.8 21.5"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "FOREIGN OWNERSHIP & FAST-TRACK APPROVALS",
    icon: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#9e1422]"
        aria-hidden="true"
      >
        {/* Document / certificate sheet */}
        <path
          d="M17.5 25.5H7.5C6.95 25.5 6.5 25.05 6.5 24.5V6.5C6.5 5.95 6.95 5.5 7.5 5.5H21.5C22.05 5.5 22.5 5.95 22.5 6.5V14"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Certificate text lines */}
        <line
          x1="10"
          y1="10.5"
          x2="18.5"
          y2="10.5"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="14.5"
          x2="17"
          y2="14.5"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="18.5"
          x2="14.5"
          y2="18.5"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        {/* Award seal & ribbons */}
        <circle
          cx="22"
          cy="19"
          r="3.8"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <path
          d="M20 22.4V28L22 26.8L24 28V22.4"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: "15+",
    label: "YEARS OF PRO & LICENSING EXPERIENCE",
    icon: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#9e1422]"
        aria-hidden="true"
      >
        <path
          d="M16 3.5L25 7.5V15C25 21 16 26.5 16 26.5C16 26.5 7 21 7 15V7.5L16 3.5Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M12 15L15 18L20 12"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: "4.9/5",
    label: "RATED 4.9★ BY 2,500+ GLOBAL ENTREPRENEURS",
    icon: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#9e1422]"
        aria-hidden="true"
      >
        <path
          d="M16 5.2L19.05 11.75L26.2 12.6L20.9 17.5L22.3 24.6L16 21.05L9.7 24.6L11.1 17.5L5.8 12.6L12.95 11.75L16 5.2Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-white py-18"
    >
      {/* Dotted World Map Background (map2.svg already carries built-in 0.08 opacity) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[150px] z-0 flex items-start justify-center select-none sm:top-[170px]"
      >
        <div className="relative h-full w-full max-w-[1160px]">
          <Image
            src="/images/map2.svg"
            alt=""
            width={1288}
            height={805}
            className="mx-auto h-auto w-full object-contain object-top"
          />
        </div>
      </div>

      {/* Section Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        {/* Top Two-Column Intro */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Left Eyebrow */}
          <div className="lg:col-span-6 lg:pt-2">
            <div className="inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-[5px] w-[5px] rounded-full bg-[#9e1422]"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#9e1422]">
                WHY CHOOSE US.
              </span>
            </div>
          </div>

          {/* Right Heading & Copy */}
          <div className="lg:col-span-6">
            <h2 className="text-[30px] font-medium leading-[1.18] tracking-[-0.02em] text-[#9e1422] sm:text-[34px] lg:text-[36px]">
              Empowering Your Business Vision in the UAE.
            </h2>

            <p className="mt-5 max-w-[675px] text-[14px] font-normal leading-[1.68] text-[#222222] sm:text-[14.5px]">
              At TYPPRO, we streamline your company formation journey from initial activity selection to full trade licensing, residency visa issuance, and corporate banking support. With comprehensive expertise across Dubai Mainland, Abu Dhabi, Sharjah, Ajman, and premier UAE Free Zones, we provide transparent guidance and complete peace of mind.
            </p>
          </div>
        </div>

        {/* Bottom 4-Column Metrics Row */}
        <div className="mx-auto mt-20 grid max-w-[1240px] grid-cols-1 gap-10 text-center sm:mt-24 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:mt-28 lg:pb-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center"
            >
              {/* Floating White Circular Icon Badge
              <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white shadow-[0_12px_36px_rgba(15,23,42,0.08)] transition-transform duration-300 group-hover:-translate-y-1">
                {stat.icon}
              </div> */}

              {/* Large Crimson Stat Figure */}
              <p className="mt-7 text-[44px] font-medium leading-none tracking-[-0.02em] text-[#9e1422] sm:text-[48px] lg:text-[52px]">
                <Counter value={stat.value} />
              </p>

              {/* Uppercase Crimson Caption */}
              <p className="mt-3.5 text-[10.5px] font-medium uppercase tracking-[0.06em] text-[#9e1422] sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
