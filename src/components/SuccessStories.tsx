"use client";

import Link from "next/link";
import React from "react";

interface Review {
  id: string;
  name: string;
  initial: string;
  avatarBg: string;
  rating: number;
  text: string;
  source: string;
}

const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Nicholas Yau",
    initial: "N",
    avatarBg: "bg-[#4a4440]",
    rating: 5,
    text: "Good job Shivani! Fast and efficient. Got my visa!!!",
    source: "Google review",
  },
  {
    id: "rev-2",
    name: "Tehseen",
    initial: "T",
    avatarBg: "bg-[#2563eb]",
    rating: 5,
    text: "Best service ever, Sharihan and the dubiz team did an exceptional job! Wonderful service, quick responses and very quick turn around. Would highly recommend!",
    source: "Google review",
  },
  {
    id: "rev-3",
    name: "Mohammed Khan",
    initial: "M",
    avatarBg: "bg-[#16a34a]",
    rating: 5,
    text: "The team at Dubiz, especially Harun Shah, did a great job helping me with my resident visa and EID. They were professional, helpful and guided me smoothly through the process.",
    source: "Google review",
  },
  {
    id: "rev-4",
    name: "Sarah Jenkins",
    initial: "S",
    avatarBg: "bg-[#9333ea]",
    rating: 5,
    text: "Flawless company registration experience in Dubai! Sharihan provided transparent guidance and helped our business obtain all commercial permits without delay.",
    source: "Google review",
  },
  {
    id: "rev-5",
    name: "Alexander Wright",
    initial: "A",
    avatarBg: "bg-[#ea580c]",
    rating: 5,
    text: "Dubiz made corporate bank account opening effortless. Incredibly responsive consultants who truly understand UAE corporate compliance. Top tier service!",
    source: "Google review",
  },
  {
    id: "rev-6",
    name: "Fatima Al-Rashid",
    initial: "F",
    avatarBg: "bg-[#0891b2]",
    rating: 5,
    text: "Superb execution from start to finish. Transparent pricing, zero hidden charges, and residency visas issued in record time for our entire family.",
    source: "Google review",
  },
];

// Google 4-color "G" logo
const GoogleGIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

// Trustpilot Green Star Icon
const TrustpilotStarIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2L14.7 8.3L21.6 8.9L16.4 13.5L18 20.3L12 16.7L6 20.3L7.6 13.5L2.4 8.9L9.3 8.3L12 2Z"
      fill="#00B67A"
    />
  </svg>
);

export default function SuccessStories() {
  return (
    <section
      id="success-stories"
      className="relative overflow-hidden bg-[#fafbfe] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Top Header Row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* Top Left: Pill Badge */}
          <div className="flex items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <span className="text-[12.5px] font-semibold tracking-tight text-[#141724]">
                7890 + Success Stories
              </span>
            </div>
          </div>

          {/* Top Right: Explanatory Quote Paragraph */}
          <div className="max-w-[480px]">
            <p className="text-[13.5px] font-normal leading-[1.72] text-[#555a6d] sm:text-[14px]">
              Valuable feedback like this is what pushes us to do even better. For every
              successful business setup in Dubai done by us, we feel immense joy knowing
              we've helped dreams become reality.
            </p>
          </div>
        </div>

        {/* Reviews Showcase Row */}
        <div className="mt-12 flex flex-col gap-6 lg:mt-14 lg:flex-row lg:items-stretch">
          {/* Left Static Summary Card: Google / Trustpilot Rating Box */}
          <div className="flex w-full flex-col justify-between rounded-[20px] border border-gray-100 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:p-8 lg:w-[320px] lg:shrink-0">
            <div>
              {/* Google Brand Header */}
              <div className="flex items-center justify-center gap-1">
          <img className="absolute h-25 w-25 " alt="Google logo"
            src="images/Google_2015_logo.svg"/>
              </div>

              {/* Card Headline */}
              <h3 className="mt-8 text-[17px] font-bold text-center leading-snug tracking-tight text-[#141724]">
                Leading Business Setup
                <br />
                Consultants in Dubai
              </h3>

              {/* Rating Block: Number 5 + Stars + Review Count */}
              <div className="mt-5 flex items-center gap-4 rounded-[12px] bg-[#f8fafc] p-4">
                <span className="text-[44px] font-bold leading-none tracking-tight text-[#141724]">
                  5
                </span>
                <div className="flex flex-col items-center">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Reviews Count */}
                  <span className="mt-1 text-[12px] font-medium text-gray-500">
                    245+ Google reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Review Us */}
            <div className="mt-6 space-y-3">
              {/* Google Button */}
              <Link
                href="#contact"
                className="flex w-full items-center justify-center gap-2.5  border border-gray-400 bg-white py-2.5 text-[13px] font-semibold text-[#141724]  transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
              >
                <GoogleGIcon className="h-4 w-4" />
                <span>Review us on Google</span>
              </Link>

              {/* Trustpilot Button */}
              <Link
                href="#contact"
                className="flex w-full items-center justify-center gap-2  border border-gray-400 bg-white py-2.5 text-[13px] font-semibold text-[#141724]  transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
              >
                <span>Review us on</span>
                <TrustpilotStarIcon className="h-4 w-4" />
                <span className="font-bold tracking-tight">Trustpilot</span>
              </Link>
            </div>
          </div>

          {/* Right Continuous Marquee Showcase */}
          <div className="relative flex-1 overflow-hidden">
            {/* Left & Right Soft Fade Gradient Masks */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-10 sm:w-16 bg-gradient-to-r from-[#fafbfe] to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-10 sm:w-16 bg-gradient-to-l from-[#fafbfe] to-transparent"
            />

            {/* Seamless Infinite Marquee Track */}
            <div className="flex overflow-hidden py-2 select-none">
              <div className="animate-marquee-reviews flex items-stretch gap-5">
                {/* Set 1 */}
                {REVIEWS.map((rev) => (
                  <div
                    key={`orig-${rev.id}`}
                    className="flex w-[310px] sm:w-[340px] shrink-0 flex-col justify-between rounded-[20px] border border-gray-100 bg-white p-7 shadow-[0_6px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] cursor-pointer"
                  >
                    <div>
                      {/* Card Top: Quotation Mark + 5 Stars */}
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-[38px] leading-none text-[#d6dbe6]">
                          “
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="mt-4 text-[13.5px] font-normal leading-[1.68] text-[#333a4d]">
                        {rev.text}
                      </p>
                    </div>

                    {/* Card Bottom: Avatar & Author Row */}
                    <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-5">
                      {/* Avatar Circle */}
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white ${rev.avatarBg}`}
                      >
                        {rev.initial}
                      </div>

                      {/* Author Info */}
                      <div className="flex flex-col">
                        <span className="text-[14.5px] font-semibold tracking-tight text-[#141724]">
                          {rev.name}
                        </span>
                        <div className="mt-0.5 flex items-center gap-1.5 text-[11.5px] font-medium text-gray-400">
                          <GoogleGIcon className="h-3 w-3" />
                          <span>{rev.source}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Set 2 (for seamless loop) */}
                {REVIEWS.map((rev) => (
                  <div
                    key={`dup-${rev.id}`}
                    className="flex w-[310px] sm:w-[340px] shrink-0 flex-col justify-between rounded-[20px] border border-gray-100 bg-white p-7 shadow-[0_6px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] cursor-pointer"
                  >
                    <div>
                      {/* Card Top: Quotation Mark + 5 Stars */}
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-[38px] leading-none text-[#d6dbe6]">
                          “
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="mt-4 text-[13.5px] font-normal leading-[1.68] text-[#333a4d]">
                        {rev.text}
                      </p>
                    </div>

                    {/* Card Bottom: Avatar & Author Row */}
                    <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-5">
                      {/* Avatar Circle */}
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white ${rev.avatarBg}`}
                      >
                        {rev.initial}
                      </div>

                      {/* Author Info */}
                      <div className="flex flex-col">
                        <span className="text-[14.5px] font-semibold tracking-tight text-[#141724]">
                          {rev.name}
                        </span>
                        <div className="mt-0.5 flex items-center gap-1.5 text-[11.5px] font-medium text-gray-400">
                          <GoogleGIcon className="h-3 w-3" />
                          <span>{rev.source}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
