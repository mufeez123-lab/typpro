"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  BUSINESS_SETUP_MENU,
  SERVICES_MENU,
  RESOURCES_DROPDOWN,
  MenuColumn,
} from "./navData";

interface NavLinkItem {
  label: string;
  href: string;
  type: "link" | "mega" | "dropdown";
  columns?: MenuColumn[];
}

const NAV_ITEMS: NavLinkItem[] = [
  { label: "Home", href: "/", type: "link" },
  { label: "About", href: "/about", type: "link" },
  {
    label: "Business Setup",
    href: "/#business-setup",
    type: "mega",
    columns: BUSINESS_SETUP_MENU,
  },
  {
    label: "Services",
    href: "/#services",
    type: "mega",
    columns: SERVICES_MENU,
  },
  {
    label: "Resources",
    href: "#resources",
    type: "dropdown",
  },
  { label: "Contact Us", href: "/contact", type: "link" },
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
        className="h-[46px] sm:h-[62px] w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
      />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState(() => {
    const matched = NAV_ITEMS.find((item) => item.href === pathname);
    return matched ? matched.label : "Home";
  });
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    "Business Setup": false,
    Services: false,
    Resources: false,
  });

  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection matching printlabdubai.com sticky slide-down animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 160) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setHoveredMenu(label);
  };

  const handleMouseLeave = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
    }
    leaveTimerRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 180);
  };

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setHoveredMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    };
  }, []);

  const toggleMobileAccordion = (label: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isSubpage = pathname !== "/";

  return (
    <header
      className={
        isSticky
          ? "fixed inset-x-0 top-0 z-50 bg-[#d70000] shadow-[0_8px_30px_rgba(0,0,0,0.18)] border-b border-[#b50000] animate-navbar-slide-down"
          : isSubpage
          ? "absolute inset-x-0 top-0 z-40 bg-[#d70000] border-b border-white/20 shadow-sm"
          : "absolute inset-x-0 top-0 z-40 bg-transparent border-b border-white/25"
      }
    >
      <div className="relative mx-auto flex h-[86px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-14">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <TypproLogo />
        </div>

        {/* Center: Primary Navigation with Mega Menu & Dropdown */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-8"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeLink === item.label;
            const isHovered = hoveredMenu === item.label;
            const hasFlyout = item.type === "mega" || item.type === "dropdown";

            return (
              <div
                key={item.label}
                className={item.type === "dropdown" ? "relative" : undefined}
                onMouseEnter={() => {
                  if (hasFlyout) handleMouseEnter(item.label);
                  else handleMouseLeave();
                }}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.label);
                    setHoveredMenu(null);
                  }}
                  className={`group relative flex h-[86px] items-center gap-1.5 text-[13px] font-medium tracking-[0.01em] ${
                    isHovered || isActive ? "text-white" : "text-white/95 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>

                  {/* Dropdown / Mega Menu Chevron Caret */}
                  {hasFlyout && (
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${
                        isHovered
                          ? "rotate-180 text-white"
                          : "text-white/70 group-hover:text-white"
                      }`}
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}

                  {/* Hairline indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-white transition-all duration-200 ${
                      isActive || isHovered
                        ? "w-6 opacity-100"
                        : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-90"
                    }`}
                  />
                </Link>

                {/* =========================================================
                    DESKTOP: RESOURCES DROPDOWN (Image 4)
                   ========================================================= */}
                {item.type === "dropdown" && isHovered && (
                  <div
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                    className="absolute left-1/2 top-[82px] z-50 w-72 -translate-x-1/2 pt-2 animate-in fade-in slide-in-from-top-2 duration-150 transition-all duration-300"
                  >
                    {/* Hover Bridge */}
                    <div className="absolute -top-3 left-0 right-0 h-3" />

                    <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                      <div className="space-y-1">
                        {RESOURCES_DROPDOWN.map((res) => (
                          <Link
                            key={res.title}
                            href={res.href}
                            onClick={() => {
                              setHoveredMenu(null);
                              setActiveLink(item.label);
                            }}
                            className="group/res flex items-start gap-3 rounded-xl p-2.5 text-slate-700 transition-all duration-150 hover:bg-[#faf6f6] hover:translate-x-1"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f4f5f7] text-slate-500 transition-colors group-hover/res:bg-[#b5121d]/10 group-hover/res:text-[#b5121d]">
                              {res.icon}
                            </span>
                            <div className="flex flex-col">
                              <span className="text-[13px] font-semibold text-[#1a1112] transition-colors group-hover/res:text-[#b5121d]">
                                {res.title}
                              </span>
                              {res.description && (
                                <span className="text-[11px] text-slate-500">
                                  {res.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Golden Visa & Phone CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#golden-visa"
            className="inline-flex h-[38px] items-center gap-2 rounded-full bg-white px-5 text-[12.5px] font-semibold tracking-[0.005em] text-[#1c1c1c] shadow-sm transition-all duration-200 hover:bg-white/90 hover:shadow-md"
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
              <line x1="10" y1="10" x2="22" y2="10" />
              <line x1="6" y1="15" x2="10" y2="15" />
            </svg>
            <span>Golden Visa</span>
          </Link>

          <a
            href="tel:+971568204558"
            className="inline-flex h-[38px] font-bold items-center rounded-full border border-white/80 bg-white/[0.04] px-5 text-[13px] font-medium tracking-[0.02em] text-white backdrop-blur-[2px] transition-all duration-200 hover:border-white hover:bg-white/15"
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

      {/* ===================================================================
          DESKTOP: MEGA MENU FLYOUT (Image 1 reference design)
          Centered relative to the navbar header
         =================================================================== */}
      {(hoveredMenu === "Business Setup" || hoveredMenu === "Services") && (
        <div
          onMouseEnter={() => {
            if (hoveredMenu) handleMouseEnter(hoveredMenu);
          }}
          onMouseLeave={handleMouseLeave}
          className="absolute left-1/2 top-[82px] z-50 w-[calc(100vw-3rem)] max-w-[1360px] -translate-x-1/2 pt-2 transition-all duration-300"
        >
          {/* Hover Bridge to keep cursor connected between header and menu */}
          <div className="absolute -top-3 left-0 right-0 h-3" />

          {/* Mega Menu White Card Container */}
          <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-[0_24px_60px_-10px_rgba(0,0,0,0.22)] lg:p-7">
            {(() => {
              const currentItem = NAV_ITEMS.find((i) => i.label === hoveredMenu);
              const columns = currentItem?.columns || [];

              return (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                  {columns.map((col, idx) => (
                    <div
                      key={col.category + idx}
                      className="flex flex-col justify-between rounded-xl  bg-[#F8F9FA] p-4.5 transition-colors hover:border-slate-300/80 lg:p-1.5"
                    >
                      <div>
                        {/* Category Heading Box (Refer to Image 1) */}
                        <div className="mb-3.5 flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                          <h3 className="text-[13.5px] font-bold tracking-tight text-[#1a1112]">
                            {col.category}
                          </h3>
                        </div>

                        {/* List of services / formation items with icons */}
                        <ul className="space-y-1">
                          {col.items.map((subItem) => (
                            <li key={subItem.title}>
                              <Link
                                href={subItem.href}
                                onClick={() => {
                                  setHoveredMenu(null);
                                  if (currentItem) setActiveLink(currentItem.label);
                                }}
                                className="group/item flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium text-slate-700 transition-all duration-400 hover:translate-x-2  hover:text-[#b5121d] "
                              >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center text-slate-400 transition-colors group-hover/item:text-[#b5121d]">
                                  {subItem.icon}
                                </span>
                                <span className="flex-1 leading-snug">
                                  {subItem.title}
                                </span>
                                {subItem.badge && (
                                  <span className="rounded-full bg-[#b5121d]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#b5121d]">
                                    {subItem.badge}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ===================================================================
          MOBILE: DRAWER WITH ACCORDION SECTIONS
         =================================================================== */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-86px)] overflow-y-auto border-t border-white/20 bg-[#9b0f19]/95 px-6 pb-8 pt-4 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => {
              if (item.type === "mega") {
                const isExpanded = mobileExpanded[item.label];
                return (
                  <div
                    key={item.label}
                    className="border-b border-white/10 py-1"
                  >
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(item.label)}
                      className="flex w-full items-center justify-between py-2 text-left text-[15px] font-semibold text-white"
                    >
                      <span>{item.label}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {isExpanded && item.columns && (
                      <div className="space-y-4 pb-3 pt-2">
                        {item.columns.map((col) => (
                          <div
                            key={col.category}
                            className="rounded-lg bg-black/15 p-3"
                          >
                            <h4 className="mb-2 text-[12px] font-bold uppercase tracking-wider text-white/80">
                              {col.category}
                            </h4>
                            <ul className="space-y-1">
                              {col.items.map((sub) => (
                                <li key={sub.title}>
                                  <Link
                                    href={sub.href}
                                    onClick={() => {
                                      setActiveLink(item.label);
                                      setMobileOpen(false);
                                    }}
                                    className="flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[13px] text-white/90 transition hover:bg-white/10 hover:text-white"
                                  >
                                    <span className="shrink-0 text-white/70">
                                      {sub.icon}
                                    </span>
                                    <span>{sub.title}</span>
                                    {sub.badge && (
                                      <span className="rounded bg-white/20 px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.type === "dropdown") {
                const isExpanded = mobileExpanded[item.label];
                return (
                  <div
                    key={item.label}
                    className="border-b border-white/10 py-1"
                  >
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(item.label)}
                      className="flex w-full items-center justify-between py-2 text-left text-[15px] font-semibold text-white"
                    >
                      <span>{item.label}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {isExpanded && (
                      <div className="rounded-lg bg-black/15 p-3 pb-2 pt-2">
                        <ul className="space-y-1">
                          {RESOURCES_DROPDOWN.map((res) => (
                            <li key={res.title}>
                              <Link
                                href={res.href}
                                onClick={() => {
                                  setActiveLink(item.label);
                                  setMobileOpen(false);
                                }}
                                className="flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[13px] text-white/90 transition hover:bg-white/10 hover:text-white"
                              >
                                <span className="shrink-0 text-white/70">
                                  {res.icon}
                                </span>
                                <div>
                                  <div className="font-medium">{res.title}</div>
                                  {res.description && (
                                    <div className="text-[11px] text-white/60">
                                      {res.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.label);
                    setMobileOpen(false);
                  }}
                  className="border-b border-white/10 py-2 text-[15px] font-medium text-white/90 transition hover:text-white"
                >
                  {item.label}
                </Link>
              );
            })}
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
