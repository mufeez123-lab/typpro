import Image from "next/image";
import Link from "next/link";

interface SetupCard {
  title: string;
  description: string;
  image: string;
  href: string;
  spanClass: string;
}

const BUSINESS_SETUP_CARDS: SetupCard[] = [
  {
    title: "Mainland Company Formation",
    description:
      "Defining vision, mission, and long-term growth strategies.",
    image: "/images/business-setup/setup-1.webp",
    href: "#contact",
    spanClass: "lg:col-span-7",
  },
  {
    title: "Free Zone Business Setup",
    description:
      "Tax-efficient jurisdictions, rapid company registration",
    image: "/images/business-setup/setup-2.webp",
    href: "#contact",
    spanClass: "lg:col-span-5",
  },
  {
    title: "Offshore Company Setup",
    description:
      "Asset protection, international trade structuring",
    image: "/images/business-setup/setup-3.webp",
    href: "#contact",
    spanClass: "lg:col-span-5",
  },
  {
    title: "PRO & Corporate Licensing",
    description:
      "End-to-end visa processing, Emirates ID",
    image: "/images/business-setup/setup-4.webp",
    href: "#contact",
    spanClass: "lg:col-span-7",
  },
];



export default function BusinessSetup() {
  return (
    <section
      id="business-setup"
      className="relative bg-[#faf6f6] py-20 sm:py-24 lg:py-[112px]"
    >
      <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-14">
        {/* Top Header Row: Heading Left + CTA Right */}
        <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-[5px] w-[5px] rounded-full bg-[#9e1422]"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#9e1422]">
                BUSINESS SETUP.
              </span>
            </div>

            <h2 className="mt-3 text-[34px] font-medium leading-[1.15] tracking-[-0.025em] text-[#1a1112] sm:text-[42px] lg:text-[48px]">
              Tailored Solutions for Your <br/> Business
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              href="#services"
              className="inline-flex h-[42px] items-center justify-center rounded-[8px] bg-[#9e1422] px-6 text-[14px] font-medium text-white shadow-[0_8px_22px_rgba(158,20,34,0.22)] transition-all duration-200 hover:bg-[#820f1b] hover:shadow-[0_12px_28px_rgba(158,20,34,0.3)]"
            >
              More Services
            </Link>
          </div>
        </div>

        {/* Asymmetric 2x2 Bento Grid (59% / 41% on Row 1, 41% / 59% on Row 2) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">
          {BUSINESS_SETUP_CARDS.map((card) => (
            <article
              key={card.title}
              className={`group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[15px] bg-[#1e0a0c] sm:min-h-[430px] lg:min-h-[390px] ${card.spanClass}`}
            >
              {/* Full-bleed background photography */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Base dark gradient scrim */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#190507]/90 via-[#190507]/35 to-transparent transition-opacity duration-500"
              />

              {/* Hover-from-bottom deep crimson gradient layer */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-[#7d0d18]/95 via-[#4b080f]/75 to-transparent transition-transform duration-500 ease-out group-hover:translate-y-0"
              />

              {/* Bottom-aligned card content with smooth upward lift on hover */}
              <div className="relative z-10 p-7 transition-transform duration-500 ease-out group-hover:-translate-y-3 sm:px-9 lg:px-10">
                <h3 className="text-[22px] font-medium leading-[1.25] tracking-[-0.015em] text-white sm:text-[26px]">
                  {card.title}
                </h3>

                <p className="mt-2.5 max-w-[460px] text-[14px] font-normal leading-[1.6] text-white/80 sm:text-[15px]">
                  {card.description}
                </p>

                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <div className="pt-5 translate-y-3 transition-transform duration-500 ease-out group-hover:translate-y-0">
                      <Link
                        href={card.href}
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-white transition-colors duration-200 hover:text-white/85"
                      >
                        <span>Learn More</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="8 7 17 7 17 16" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Second Asymmetric Bento Grid (Smaller Box First: 41% / 59%, then 59% / 41%) */}
      
      </div>
    </section>
  );
}
