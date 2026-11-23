import Image from "next/image";
import Link from "next/link";

const ABOUT_PILLARS = [
  {
    line1: "Customer",
    line2: "Service",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top conversation bubbles */}
        <path
          d="M11 8H21C22.1 8 23 8.9 23 10V15C23 16.1 22.1 17 21 17H15L12 19.5V17H11C9.9 17 9 16.1 9 15V10C9 8.9 9.9 8 11 8Z"
          stroke="white"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M23 11.5H29C30.1 11.5 31 12.4 31 13.5V18C31 19.1 30.1 20 29 20H28V22.5L25 20H21"
          stroke="#d91e2a"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Left person */}
        <circle cx="14" cy="24.5" r="2.8" stroke="white" strokeWidth="1.4" />
        <path
          d="M8.5 33C8.5 30 10.9 28 14 28C17.1 28 19.5 30 19.5 33"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Right person */}
        <circle cx="26" cy="24.5" r="2.8" stroke="white" strokeWidth="1.4" />
        <path
          d="M20.5 33C20.5 30 22.9 28 26 28C29.1 28 31.5 30 31.5 33"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    line1: "Operational",
    line2: "Excellence",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Gear outline */}
        <path
          d="M17.5 6.5H22.5L23.4 10C24.5 10.4 25.5 10.9 26.4 11.6L29.8 10.4L32.3 14.7L29.6 17.1C29.8 18 29.9 19 29.9 20C29.9 21 29.8 22 29.6 22.9L32.3 25.3L29.8 29.6L26.4 28.4C25.5 29.1 24.5 29.6 23.4 30L22.5 33.5H17.5L16.6 30C15.5 29.6 14.5 29.1 13.6 28.4L10.2 29.6L7.7 25.3L10.4 22.9C10.2 22 10.1 21 10.1 20C10.1 19 10.2 18 10.4 17.1L7.7 14.7L10.2 10.4L13.6 11.6C14.5 10.9 15.5 10.4 16.6 10L17.5 6.5Z"
          stroke="white"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        {/* Inner precision wrench/emblem in crimson */}
        <circle cx="20" cy="20" r="5.5" stroke="#d91e2a" strokeWidth="1.4" />
        <path
          d="M20 17.2V22.8M17.5 20H22.5"
          stroke="#d91e2a"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    line1: "Safety &",
    line2: "Security",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Padlock shackle */}
        <path
          d="M14 17V13C14 9.7 16.7 7 20 7C23.3 7 26 9.7 26 13V17"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Padlock body */}
        <path
          d="M21 32H11.5C10.1 32 9 30.9 9 29.5V19.5C9 18.1 10.1 17 11.5 17H28.5C29.9 17 31 18.1 31 19.5V22"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Keyhole */}
        <circle cx="20" cy="23.5" r="1.8" stroke="white" strokeWidth="1.4" />
        <line
          x1="20"
          y1="25.3"
          x2="20"
          y2="28"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Crimson security shield badge */}
        <path
          d="M28.5 23.5L33 25.2V28.6C33 31.1 31 33 28.5 34C26 33 24 31.1 24 28.6V25.2L28.5 23.5Z"
          fill="#0a0a0a"
          stroke="#d91e2a"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M26.7 28.8L28 30.1L30.5 27.5"
          stroke="#d91e2a"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Mission Copy, CTAs & Pillars */}
          <div className="lg:col-span-6">
            <div className="mb-4 inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-[5px] w-[5px] rounded-full bg-[#d91e2a]"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#d91e2a]">
                ABOUT US.
              </span>
            </div>

            <h2 className="text-[36px] font-semibold leading-[1.12] tracking-[-0.025em] text-white sm:text-[44px] lg:text-[50px]">
              UAE Business &amp; Wealth,
              <br />
              Perfected Our
              <br />
              Mission and Legacy
            </h2>

            <p className="mt-6 max-w-[520px] text-[14.5px] font-normal leading-[1.72] text-white/70 sm:text-[15px]">
              Experience clarity and confidence like never before with TYPPRO,
              your premier UAE business setup and wealth advisory partner.
              Whether you&apos;re launching a company or expanding across the
              region, we offer unparalleled expertise, privacy, and efficiency
              to help you reach your goals with ease.
            </p>

            {/* Dual CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex h-[46px] items-center gap-2 rounded-[6px] bg-[#c8102e] px-6 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:bg-[#a60d26]"
              >
                <span>LEARN MORE</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>

              <Link
                href="#business-setup"
                className="group inline-flex h-[46px] items-center gap-2 rounded-[6px] border border-white/25 bg-transparent px-6 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:border-white/60 hover:bg-white/5"
              >
                <span>EXPLORE SERVICES</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>

            {/* Bottom 3 Feature Pillars */}
            <div className="mt-14 grid max-w-[500px] grid-cols-3 gap-6 sm:gap-8">
              {ABOUT_PILLARS.map((pillar) => (
                <div key={pillar.line1} className="flex flex-col items-start">
                  <div className="mb-4">{pillar.icon}</div>
                  <p className="text-[14px] font-medium leading-[1.35] text-white sm:text-[15px]">
                    {pillar.line1}
                    <br />
                    {pillar.line2}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Portrait Image + Floating Glass Stat Card */}
          <div className="lg:col-span-6 lg:flex lg:justify-end">
            <div className="relative aspect-[4/4.5] w-full max-w-[500px] overflow-hidden rounded-[14px] bg-[#161616]">
              <Image
                src="/images/about-portrait.jpg"
                alt="TYPPRO corporate advisor in Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-top"
              />

              {/* Subtle bottom scrim so floating badge reads cleanly */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 to-transparent"
              />

              {/* Floating Frosted Glass Stat Card (Bottom-Left) */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 rounded-[12px] border border-white/15 bg-black/45 px-5 py-4 backdrop-blur-md shadow-[0_14px_36px_rgba(0,0,0,0.35)] sm:right-auto sm:min-w-[275px]">
                {/* Thin white outline landmark/global icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 33H33"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 33V16L20 10L30 16V33"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 33V23H25V33"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 17H24M20 7V10"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[24px] font-bold leading-tight tracking-[-0.015em] text-white sm:text-[26px]">
                    20,000+
                  </p>
                  <p className="mt-0.5 text-[12.5px] font-normal text-white/80">
                    Clients &amp; setups completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
