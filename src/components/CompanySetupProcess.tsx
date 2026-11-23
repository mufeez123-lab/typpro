"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: React.ReactNode;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Finalize Business Activity",
    description:
      "Select from DET-approved activities or a combination that suits you. Share your business idea with our experts and they will suggest the appropriate business activity.",
  },
  {
    number: "02",
    title: "Pick Right Jurisdiction",
    description:
      "You can start on either UAE mainland, free zone, or offshore, based on your specific needs. Each jurisdiction offers unique benefits.",
  },
  {
    number: "03",
    title: "Decide Legal Structure",
    description:
      "Choose the appropriate structure, such as LLC, Sole Proprietorship, FZC, FZE, or another option. Structure impacts the ownership and taxation of business.",
  },
  {
    number: "04",
    title: "Register Trade Name",
    description:
      "Your company name should be unique and compliant with UAE regulations. You can tell us your favorite options and most suitable will get registered.",
  },
  {
    number: "05",
    title: "Choose Office Space",
    description:
      "Lease the right workspace for your business and complete the Ejari registration. Dubiz Business Setup business centers offer luxurious office space at prime locations.",
  },
  {
    number: "06",
    title: "Apply For Trade License",
    description: (
      <>
        We will get your <span className="font-semibold text-[#e04f2d]">NOC</span> if UAE
        resident from DET or free zone along with other external approvals for business
        license, ensuring smooth application.
      </>
    ),
  },
  {
    number: "07",
    title: "Get Your Visa",
    description:
      "Next, we will get your residency visa. This includes medical tests and Emirates ID processing. You can then sponsor your family and staff.",
  },
  {
    number: "08",
    title: "Set Up Banking",
    description:
      "Dubiz Business Setup has partnered with the best UAE banks. We will open your corporate bank account and get you operational faster.",
  },
];

export default function CompanySetupProcess() {
  const [activeTab, setActiveTab] = useState<"passenger" | "cargo">("passenger");
  const [departure, setDeparture] = useState("USA");
  const [destination, setDestination] = useState("Germany");
  const [date, setDate] = useState("01 February 2025");
  const [passengers, setPassengers] = useState("Pax");

  return (
    <section className="relative w-full bg-[#d70000]">
      {/* Top White Strip Background (so the top portion of the banner rests on white) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 h-[240px] sm:h-[280px] lg:h-[300px] bg-white"
      />

      <div className="relative z-10 mx-auto max-w-[1140px] px-6 pt-6 sm:px-10 sm:pt-10 lg:px-12 lg:pt-12 pb-24 sm:pb-32">
        {/* PART 1: Top Hero / Flight Booking Banner with Overhanging Widget */}
        <div className="relative w-full">
          {/* Banner Main Container */}
          <div className="relative min-h-[460px] sm:min-h-[480px] lg:min-h-[470px] w-full overflow-hidden rounded-[10px] ">
            {/* Background Photography: Luxury Jet Cabin */}
            <div className="pointer-events-none absolute inset-0 z-0 select-none">
              <Image
                src="/images/contact-bg-1.jpg"
                alt="Passenger enjoying luxury private jet flight"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
                unoptimized
              />
              {/* Dark warm gradient scrim for legibility */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#d70000]/100 via-[#d70000]/20 to-black/20"
              />
            </div>

            {/* Left Column Content: Play Button, Heading, CTA */}
            <div className="relative z-10 flex min-h-[460px] sm:min-h-[480px] lg:min-h-[470px] flex-col justify-center p-8 sm:p-12 lg:w-[60%] lg:p-14">
              {/* Play Button */}
              <button
                type="button"
                aria-label="Watch video"
                className="group/play mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-white/30 focus:outline-none"
              >
                <svg
                  className="ml-0.5 h-5 w-5 fill-[#e03a3e] text-[#e03a3e] transition-transform duration-200 group-hover/play:scale-110"
                  viewBox="0 0 24 24"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>

              {/* Banner Heading */}
              <h3 className="max-w-[460px] text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[44px]">
                Exclusive Travel
                <br />
                Awaits – Book a
                <br />
                Private Jet Now
              </h3>

              {/* Get Started Button */}
              <div className="mt-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-[6px] bg-white px-7 py-3 text-[13px] font-bold uppercase tracking-wider text-[#d70000] hover:text-white shadow-[0_6px_20px_rgba(224,58,62,0.4)] transition-all duration-200 hover:bg-[#d70000] hover:shadow-[0_8px_24px_rgba(224,58,62,0.5)]"
                >
                  <span>GET STARTED</span>
                  <span aria-hidden="true">&gt;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Floating White Booking Widget (protruding past the bottom of the banner on desktop) */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:right-8 lg:top-8 lg:w-[380px] lg:z-20">
            <div className="w-full rounded-[16px] bg-white p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] text-[#141724]">
              {/* Tabs: Passenger | Cargo */}
              <div className="flex items-center border-b border-[#edf0f5]">
                <button
                  type="button"
                  onClick={() => setActiveTab("passenger")}
                  className={`relative pb-3 text-[14px] font-semibold transition-colors duration-200 ${
                    activeTab === "passenger"
                      ? "text-[#141724]"
                      : "text-[#8a91a5] hover:text-[#141724]"
                  }`}
                >
                  <span>Passenger</span>
                  {activeTab === "passenger" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#e03a3e]" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("cargo")}
                  className={`ml-8 relative pb-3 text-[14px] font-semibold transition-colors duration-200 ${
                    activeTab === "cargo"
                      ? "text-[#141724]"
                      : "text-[#8a91a5] hover:text-[#141724]"
                  }`}
                >
                  <span>Cargo</span>
                  {activeTab === "cargo" && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#e03a3e]" />
                  )}
                </button>
              </div>

              {/* Form Fields Stack */}
              <div className="mt-5 space-y-3.5">
                {/* Departure */}
                <div className="relative rounded-[8px] border border-[#e2e8f0] bg-white px-3.5 py-2 transition-colors focus-within:border-[#e03a3e]">
                  <label className="block text-[11px] font-medium text-[#717b96]">
                    Departure
                  </label>
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={departure}
                      onChange={(e) => setDeparture(e.target.value)}
                      className="w-full text-[13.5px] font-medium text-[#141724] focus:outline-none"
                    />
                    <svg
                      className="h-4 w-4 shrink-0 text-[#8a91a5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Destination */}
                <div className="relative rounded-[8px] border border-[#e2e8f0] bg-white px-3.5 py-2 transition-colors focus-within:border-[#e03a3e]">
                  <label className="block text-[11px] font-medium text-[#717b96]">
                    Destination
                  </label>
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full text-[13.5px] font-medium text-[#141724] focus:outline-none"
                    />
                    <svg
                      className="h-4 w-4 shrink-0 text-[#8a91a5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Date */}
                <div className="relative rounded-[8px] border border-[#e2e8f0] bg-white px-3.5 py-2 transition-colors focus-within:border-[#e03a3e]">
                  <label className="block text-[11px] font-medium text-[#717b96]">
                    Date
                  </label>
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full text-[13.5px] font-medium text-[#141724] focus:outline-none"
                    />
                    <svg
                      className="h-4 w-4 shrink-0 text-[#8a91a5]"
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
                  </div>
                </div>

                {/* Passengers */}
                <div className="relative rounded-[8px] border border-[#e2e8f0] bg-white px-3.5 py-2 transition-colors focus-within:border-[#e03a3e]">
                  <label className="block text-[11px] font-medium text-[#717b96]">
                    Passengers
                  </label>
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full text-[13.5px] font-medium text-[#141724] focus:outline-none"
                    />
                    <svg
                      className="h-4 w-4 shrink-0 text-[#8a91a5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-[8px] bg-[#e03a3e] py-3.5 text-[13.5px] font-bold uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(224,58,62,0.35)] transition-all duration-200 hover:bg-[#c62828] hover:shadow-[0_6px_18px_rgba(224,58,62,0.45)]"
              >
                <span>SEARCH NOW</span>
                <span aria-hidden="true">&gt;</span>
              </button>
            </div>
          </div>
        </div>

        {/* PART 2: Simplified Process of Company Setup in UAE (3x3 Grid) */}
        <div className="mt-20 sm:mt-24 lg:mt-28">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {/* Slot 1: Section Title Block */}
            <div className="flex flex-col justify-center pr-4">
              <h2 className="text-[28px] font-semibold leading-[1.18] tracking-[-0.025em] text-white sm:text-[30px] ">
                Simplified Process of
                <br />
                Company Setup in
                <br />
                UAE
              </h2>

              <p className="mt-4 max-w-[340px] text-[13.5px] font-normal leading-[1.68] text-white">
                If you choose our Dubai business setup services, this is how we will assist
                you:
              </p>
            </div>

            {/* Slots 2 - 9: Process Step Cards 01 to 08 */}
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="group flex flex-col justify-between rounded-[10px] border border-white/[0.07] bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-white/15  hover:shadow-xl sm:p-7"
              >
                <div>
                  {/* Card Top: Number (Orange-Red) + Diagonal Arrow (Top Right) */}
                  <div className="flex items-center justify-between">
                    <span className="text-[22px] font-bold text-[#d70000] sm:text-[24px]">
                      {step.number}
                    </span>

                    <span className="text-[#828ca4] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#d70000]">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </div>

                  {/* Card Title */}
                  <h4 className="mt-4 text-[15.5px] font-semibold leading-snug tracking-[-0.015em]  transition-colors duration-200 text-[#d70000] sm:text-[16px]">
                    {step.title}
                  </h4>

                  {/* Card Description */}
                  <p className="mt-2.5 text-[12.4px] font-normal leading-[1.68] text-[#d70000] sm:text-[12.8px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
