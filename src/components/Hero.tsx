import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#b5121d]"
    >
      {/* Background Artwork: Crimson Fluted Glass & Handshake Silhouette */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero-bg.jpg"
          alt="Business partners shaking hands in crimson-lit office"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle depth gradient on left for crisp text legibility without hiding ribbed blinds */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#8f0c16]/35 via-transparent to-transparent"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-28 sm:px-10 md:pb-20 md:pt-32 lg:px-14">
        <div className="max-w-[780px]">
          <h1 className="text-[40px] font-medium leading-[1.08] tracking-[-0.028em] text-white sm:text-[54px] md:text-[62px] lg:text-[82px] xl:text-[76px]">
            Helping you build and
            <br />
            protect your wealth
            <span className="text-[#5d0c14]">.</span>
          </h1>

          <p className="mt-5 max-w-[640px] text-[13.5px] font-normal leading-[1.6] tracking-[0.005em] text-white/90 sm:text-[14.5px] md:text-[15px]">
            Award-winning, financial planning rooted in trust, insight, and
            lasting relationships.
          </p>

          {/* Hero CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
            {/* Primary Solid White CTA */}
            <Link
              href="#services"
              className="group inline-flex h-[42px] w-full items-center justify-between bg-white px-3 text-[14px] font-medium text-[#b5121d] shadow-[0_6px_20px_rgba(90,8,15,0.2)] transition-all duration-200 hover:bg-white/95 hover:shadow-[0_10px_28px_rgba(90,8,15,0.28)] sm:w-[250px]"
            >
              <span>How we can help</span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.65"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#c8102e] transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="14 6 20 12 14 18" />
              </svg>
            </Link>

            {/* Secondary Transparent Bordered CTA */}
            <Link
              href="#contact"
              className="group inline-flex h-[42px] w-full items-center justify-between  border border-white/75 bg-white/[0.04] px-5 text-[13px] font-medium text-white backdrop-blur-[2px] transition-all duration-200 hover:border-white hover:bg-white/15 sm:w-[262px]"
            >
              <span>Talk to our experts?</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/95 transition-transform duration-200 group-hover:scale-105"
                aria-hidden="true"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <line x1="8" y1="9" x2="16" y2="9" />
                <line x1="8" y1="13" x2="13" y2="13" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
