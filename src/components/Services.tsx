"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const SERVICES: ServiceCard[] = [
  {
    id: "pro-visa-services",
    title: "PRO & Visa Services",
    description:
      "End-to-end visa and immigration clearance, Emirates ID processing, and MOHRE labour approvals for investors, employees, and families.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",
    href: "#contact",
  },
  {
    id: "business-licensing",
    title: "Business Licensing",
    description:
      "Commercial, industrial, and professional trade license applications, renewals, activity additions, and statutory amendments.",
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=900&q=80",
    href: "#contact",
  },
  {
    id: "tax-accounting",
    title: "Tax & Accounting",
    description:
      "Expert corporate tax filing, VAT registration, bookkeeping, and advisory ensuring full compliance with UAE FTA regulations.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=900&q=80",
    href: "#contact",
  },
  {
    id: "corporate-services",
    title: "Corporate Services & Clearing",
    description:
      "Swift government document clearing, corporate legal documentation, ministry transaction approvals, and business center support.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    href: "#contact",
  },
  {
    id: "free-zone-setup",
    title: "Free Zone Company Formation",
    description:
      "Tax-efficient incorporation in top UAE Free Zones with 100% foreign ownership, flexible desk options, and zero currency restrictions.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    href: "#contact",
  },
  {
    id: "golden-visa",
    title: "UAE Golden Visa Solutions",
    description:
      "10-year self-sponsored residency for real estate investors, business owners, professionals, and their family members.",
    image:
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=900&q=80",
    href: "#contact",
  },
];

export default function Services() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Scroll to next slide
  const scrollNext = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const card = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 24 : 330;

    if (scrollLeft + clientWidth >= scrollWidth - 25) {
      // Loop smoothly back to the first card
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  // Scroll to previous slide
  const scrollPrev = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const card = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 24 : 330;

    if (scrollLeft <= 15) {
      // Loop back to the end
      sliderRef.current.scrollTo({
        left: scrollWidth - clientWidth,
        behavior: "smooth",
      });
    } else {
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  // Scroll directly to a specific slide index
  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 24 : 330;
    sliderRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    setActiveIndex(index);
  };

  // Auto-slide effect every 3.5 seconds when not hovered/paused
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      scrollNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Track active slide index based on scroll position
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft } = sliderRef.current;
    const card = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 24 : 330;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, newIndex), SERVICES.length - 1));
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f3f4f8] py-20 sm:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        {/* Top Header Row */}
        <div className="flex flex-col mx-auto max-w-[1100px] gap-6 md:flex-row md:items-start md:justify-between lg:gap-12">
          {/* Left Heading */}
          <div className="">
            <h2 className="text-[28px] font-semibold leading-[1.22] tracking-[-0.025em] text-[#191c28] sm:text-[34px] md:text-[38px] lg:text-[32px]">
              Why Choose TYPPRO
              <br />
              for Business Setup in the UAE?
            </h2>
          </div>

          {/* Right Description & Controls */}
          <div className="flex max-w-[440px] flex-col justify-between gap-6 md:pt-2">
            <p className="text-[13.5px] font-normal leading-[1.68] text-[#5b6074] sm:text-[14px]">
              From setup to growth, we are your all-in-one partner for
              establishing and running a successful business in the UAE.
            </p>

     
          </div>
        </div>

        {/* Carousel / Auto-slider Row */}
        <div
          className="relative mt-12 sm:mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Scrollable Track */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-0 overflow-x-auto pb-6 pt-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{
              scrollSnapType: "x mandatory",
            }}
          >
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="group flex w-[86%] shrink-0 flex-col justify-between rounded-[18px]   p-4  transition-all duration-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(27.8%-16px)] sm:p-3"
                style={{
                  scrollSnapAlign: "start",
                }}
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[7px] bg-[#eef1f6]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 28vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    unoptimized
                  />
                </div>

                {/* Card Content Section */}
                <div className="flex flex-1 flex-col justify-between pt-5">
                  <div>
                    <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-[#191c28] sm:text-[18px]">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-[12.8px] font-normal leading-[1.6] text-[#63687c] sm:text-[13.2px]">
                      {service.description}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-6 pt-1">
                    <Link
                      href={service.href}
                      className="group/link inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#191c28] transition-colors hover:text-[#d70000] sm:text-[11.5px]"
                    >
                      <span>READ MORE</span>
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover/link:translate-x-1"
                      >
                        &gt;
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Pagination */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {SERVICES.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                onClick={() => scrollToIndex(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className={`h-2 transition-all duration-300 rounded-full ${
                  activeIndex === dotIndex
                    ? "w-7 bg-[#191c28]"
                    : "w-2 bg-[#cbd2e1] hover:bg-[#9aa2b6]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
