"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Business Setup", href: "#business-setup" },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Contact us", href: "#contact" },
];

function TypproLogo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center focus:outline-none"
      aria-label="TYPPRO Home"
    >
      <Image
        src="/images/typpro-logo.png"
        alt="TYPPRO Logo"
        width={1024}
        height={652}
        priority
        className="h-[46px] w-auto object-contain transition-opacity duration-200 group-hover:opacity-90 sm:h-[62px]"
      />
    </Link>
  );
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/25">
      <div className="mx-auto flex h-[86px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-14">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <TypproLogo />
        </div>

        {/* Center: Primary Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeLink === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveLink(item.label)}
                className="group relative flex h-[86px] items-center text-[13px] font-medium tracking-[0.01em] text-white/95 transition-colors hover:text-white"
              >
                <span>{item.label}</span>
                {/* Subtle bottom hairline indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-white transition-all duration-200 ${
                    isActive
                      ? "w-5 opacity-100"
                      : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-90"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right: Golden Visa & Phone CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#golden-visa"
            className="inline-flex h-[40px] items-center gap-2 rounded-full bg-white px-5 text-[12.5px] font-semibold tracking-[0.005em] text-[#1c1c1c] shadow-sm transition-all duration-200 hover:bg-white/90 hover:shadow-md"
          >
            {/* Minimal visa/ID card icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#222222]"
              aria-hidden="true"
            >
              <rect x="2" y="5" width="20" height="14" rx="2.5" />
              <line x1="2" y1="10" x2="22" y2="10" />
              <line x1="6" y1="15" x2="10" y2="15" />
            </svg>
            <span>Golden Visa</span>
          </Link>

          <a
            href="tel:+971568204558"
            className="inline-flex h-[40px] items-center rounded-full border border-white/80 bg-white/[0.04] px-5 text-[12.5px] font-medium tracking-[0.02em] text-white backdrop-blur-[2px] transition-all duration-200 hover:border-white hover:bg-white/15"
          >
            +971 56 820 4558
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileOpen && (
        <div className="border-t border-white/20 bg-[#9b0f19]/95 px-6 pb-6 pt-4 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveLink(item.label);
                  setMobileOpen(false);
                }}
                className="py-1.5 text-[15px] font-medium text-white/90 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/20 pt-5 md:hidden">
            <Link
              href="#golden-visa"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-[40px] items-center gap-2 rounded-full bg-white px-5 text-[13px] font-semibold text-[#1c1c1c]"
            >
              <span>Golden Visa</span>
            </Link>
            <a
              href="tel:+971568204558"
              className="inline-flex h-[40px] items-center rounded-full border border-white/80 px-5 text-[13px] font-medium text-white"
            >
              +971 56 820 4558
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
