"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const FOOTER_COLUMNS = [
  {
    title: "Why Us",
    links: [
      { label: "Company Formation", href: "#business-setup" },
      { label: "Compliance & Trust", href: "#why-choose-us" },
      { label: "Golden Visa", href: "#home" },
      { label: "Client Benefits", href: "#about" },
      { label: "Partner Referrals", href: "#contact" },
    ],
  },
  {
    title: "Jurisdictions",
    links: [
      { label: "Dubai Mainland", href: "#business-setup" },
      { label: "UAE Free Zones", href: "#business-setup" },
      { label: "Offshore Setup", href: "#business-setup" },
      { label: "Abu Dhabi & Sharjah", href: "#business-setup" },
      { label: "GCC Expansion", href: "#services" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Business Setup", href: "#business-setup" },
      { label: "PRO & Visa Services", href: "#services" },
      { label: "Corporate Banking", href: "#services" },
      { label: "Tax & Accounting", href: "#services" },
      { label: "Wealth Advisory", href: "#about" },
    ],
  },
];

const BOTTOM_LINKS = [
  { label: "Contact Us", href: "#contact" },
  { label: "About Us", href: "#about" },
  { label: "Sitemap", href: "#home" },
  { label: "Privacy Policy", href: "#home" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative bg-[#d70000] px-4 pb-8 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
      <div className="mx-auto max-w-[1340px]">
        {/* Rounded White Card Container */}
        <div className="relative overflow-hidden rounded-[26px] bg-white px-7 py-12  sm:rounded-[32px] sm:px-11 sm:py-14 lg:px-14 lg:py-16">
          {/* Giant Pale-Blush Background Watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[22%] top-4 z-0 select-none text-[96px] font-bold leading-none tracking-[-0.03em] text-[#fdf2f2] sm:text-[145px] lg:top-6 lg:text-[185px]"
          >
            TYPPRO
          </div>

          {/* Main Card Grid */}
          <div className="relative z-10 grid grid-cols-1 items-start gap-11 lg:grid-cols-12 lg:gap-8">
            {/* Column 1: Logo, Tagline, Newsletter, Socials */}
            <div className="lg:col-span-3">
              <Link
                href="/"
                className="inline-flex items-center focus:outline-none"
                aria-label="TYPPRO Home"
              >
                <Image
                  src="/images/footer.png"
                  alt="TYPPRO Logo"
                  width={1024}
                  height={652}
                  className="h-[70px] w-auto object-contain "
                />
              </Link>

              <p className="mt-5 max-w-[265px] text-[13.5px] font-normal leading-[1.68] text-[#6b7280]">
                Premier UAE business setup, mainland &amp; free zone company formation, PRO document clearing, and Golden Visa advisory in Dubai.
              </p>

              {/* Newsletter */}
              <div className="mt-7">
                <h3 className="text-[15px] font-semibold text-[#111111]">
                  Newsletter
                </h3>

                <form
                  onSubmit={handleSubscribe}
                  className="mt-4 flex items-center justify-between gap-2 border-b border-[#e5e7eb] pb-2.5 focus-within:border-[#c8102e]"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (subscribed) setSubscribed(false);
                    }}
                    placeholder="Email address"
                    aria-label="Email address"
                    required
                    className="w-full bg-transparent text-[13px] text-[#111111] placeholder:text-[#9ca3af] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-[#c8102e] transition-colors hover:text-[#d70000]"
                  >
                    <span>{subscribed ? "SENT" : "SUBSCRIBE"}</span>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </form>

                {subscribed && (
                  <p className="mt-2 text-[12px] font-medium text-[#d70000]">
                    Thank you for subscribing.
                  </p>
                )}
              </div>

              {/* 4 Circular Social Icons */}
              <div className="mt-6 flex items-center gap-2.5">
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f6f7] text-[#1a1a1a] transition-colors duration-200 hover:bg-[#c8102e] hover:text-white"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                  </svg>
                </a>

                <a
                  href="#youtube"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f6f7] text-[#1a1a1a] transition-colors duration-200 hover:bg-[#c8102e] hover:text-white"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                  </svg>
                </a>

                <a
                  href="#pinterest"
                  aria-label="Pinterest"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f6f7] text-[#1a1a1a] transition-colors duration-200 hover:bg-[#c8102e] hover:text-white"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.017 2C6.486 2 2 6.486 2 12.017c0 4.242 2.636 7.868 6.356 9.318-.088-.792-.167-2.008.035-2.872.182-.78 1.172-4.969 1.172-4.969s-.299-.598-.299-1.482c0-1.388.805-2.425 1.807-2.425.852 0 1.264.64 1.264 1.407 0 .857-.546 2.139-.828 3.327-.236.995.499 1.807 1.48 1.807 1.777 0 3.143-1.874 3.143-4.579 0-2.394-1.72-4.068-4.177-4.068-2.845 0-4.515 2.134-4.515 4.34 0 .859.331 1.781.744 2.281a.3.3 0 0 1 .069.288c-.076.316-.244.995-.277 1.134-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.531 0 10.017-4.486 10.017-10.017C22.034 6.486 17.548 2 12.017 2z" />
                  </svg>
                </a>

                <a
                  href="#twitter"
                  aria-label="Twitter"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f6f7] text-[#1a1a1a] transition-colors duration-200 hover:bg-[#c8102e] hover:text-white"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Columns 2, 3, 4: Navigation Link Columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5 lg:pt-14">
              {FOOTER_COLUMNS.map((col) => (
                <div key={col.title}>
                  <h3 className="text-[15px] font-semibold text-[#111111]">
                    {col.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {col.links.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-[13.5px] font-normal text-[#6b7280] transition-colors duration-200 hover:text-[#c8102e]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Column 5: Vertical Store Pills + Contact & Working Hours */}
            <div className="flex flex-col items-start gap-7 sm:flex-row lg:col-span-4 lg:justify-end lg:gap-8">
              {/* Vertical App Store & Google Store Badges */}
        

              {/* Contact & Working Hours */}
              <div className="min-w-[195px]">
                <h3 className="text-[15px] font-semibold text-[#111111]">
                  Contact
                </h3>

                <ul className="mt-4 space-y-2.5 text-[13px] font-medium text-[#1f2937]">
                  <li>
                    <a
                      href="mailto:tpdclearing@gmail.com"
                      className="inline-flex items-center gap-2.5 transition-colors hover:text-[#c8102e]"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 text-[#c8102e]"
                        aria-hidden="true"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-10 6L2 7" />
                      </svg>
                      <span>tpdclearing@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+971568204558"
                      className="inline-flex items-center gap-2.5 transition-colors hover:text-[#c8102e]"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 text-[#c8102e]"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>+971 56 820 4558</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-[#c8102e]"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-[12px] leading-snug text-[#4b5563]">
                      Office 301–312, LEADER REAL ESTATE L.L.C, Al Souq Al Kabeer, Bur Dubai
                    </span>
                  </li>
                </ul>

                <h3 className="mt-7 text-[15px] font-semibold text-[#111111]">
                  Working Hours
                </h3>

                <ul className="mt-3.5 space-y-2.5 text-[13px] font-medium text-[#1f2937]">
                  <li className="flex items-center gap-2.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 text-[#c8102e]"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Mon - Friday: 08am-05pm</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 text-[#c8102e]"
                      aria-hidden="true"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>Sat-Sunday : Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Utility Bar */}
        <div className="mt-7 flex flex-col items-center justify-between gap-4 px-2 text-[12.5px] text-white sm:flex-row">
          <p>
            © Copyright{" "}
            <span className="font-medium text-white">2026</span> by TYPPRO.
            All rights reserved. Designed By <a href="https://growwiseagency.in/" className="font-bold text-[12.5px] text-white  transition-colors hover:text-white/60">GROWWISE AGENCY</a>.
          </p>

          <nav
            aria-label="Footer Utility Navigation"
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {BOTTOM_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
