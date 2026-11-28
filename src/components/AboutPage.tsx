"use client";

import Link from "next/link";
import React, { useState } from "react";
import WhyChooseUs from "./WhyChooseUs";
import Stack from "./Stack";
import BusinessSetup from "./BusinessSetup";
import Setup from "./Setup";

export interface AboutProps {
  extraClassName?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}




const FAQS: FaqItem[] = [
  {
    question: "How can consulting help my business grow?",
    answer:
      "Our specialized UAE business setup and PRO consulting simplifies company formation, ensures 100% legal compliance with DET and Free Zone authorities, expedites investor visas and corporate banking approvals, and saves up to 40% in operational setup costs.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in commercial trading, professional consultancy, industrial manufacturing, e-commerce, digital technology, tourism, freight forwarding, and general trading across Dubai Mainland, Abu Dhabi, and over 40 UAE Free Zones.",
  },
  {
    question: "How long does a typical consulting project take?",
    answer:
      "Initial trade name reservation and initial approvals can be secured within 24 to 48 hours. Full trade licensing, Ejari office registration, and establishment card issuance typically take 3 to 5 business days.",
  },
  {
    question: "How much does business consulting cost?",
    answer:
      "Our transparent packages start from AED 9,500 for Free Zone setups and AED 14,500 for Mainland entities, inclusive of government fees, name reservation, initial approvals, and virtual desk tenancy with zero hidden fees.",
  },
];

export default function About({ extraClassName = "" }: AboutProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div id="About" className={`w-full  text-[#111827] ${extraClassName}`}>
      {/* =========================================================================
          SECTION 1: Top Hero Header
          ========================================================================= */}
      <section className=" px-6 pt-10 pb-12 sm:px-22 sm:pt-14  h-[58vh]  bg-[#d70000] -mt-[120px]">
        {/* Small uppercase tag with diagonal arrow */}
      

        {/* 2-Column Header Grid */}
        <div className="mt-38 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12 lg:items-start">
          {/* Main Large Headline */}
          <div className="lg:col-span-6 ">
              <Link
          href="#form"
          className="inline-flex items-center mt-[-24px] group absolute gap-1.5 text-[12px] font-bold tracking-wider text-white uppercase hover:opacity-80 transition-opacity"
        >
          <span>ABOUT US</span>
          <svg
            className="h-3.5 w-3.5 group-hover:rotate-45 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7V15" />
          </svg>
        </Link>
            <h1 className="text-[32px] font-bold leading-[1.18] tracking-[-0.03em] text-white sm:text-[38px] ">
              We are a creative digital agency shaping meaningful experiences
            </h1>
          </div>

          {/* Right Explanatory Paragraph */}
          <div className="lg:col-span-5 lg:pt-2 items-center">
            <p className="text-[13.5px] font-normal leading-[1.7] text-white sm:text-[14.5px] mt-5">
              We blend strategy, creativity, and technology to help brands grow, connect, and
              stand out in an ever-evolving digital world.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: Automatically moving horizontal image gallery
          ========================================================================= */}
      <section
        aria-label="Our team and creative process"
        className="w-full overflow-hidden  py-0"
      >
        <div className="flex  w-full items-center overflow-hidden sm:h-[82vh]">
          <div className="gallery-auto-track flex w-max">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-4 pr-4 sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-6"
                aria-hidden={copy === 1}
              >
                <figure className="relative h-[48vh] w-[82vw] shrink-0 overflow-hidden rounded-[12px] sm:h-[68vh] sm:w-[58vw] lg:w-[39vw]">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=85"
                    alt={copy === 0 ? "Creative team collaborating around a table" : ""}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </figure>

                <figure className="relative h-[48vh] w-[82vw] shrink-0 overflow-hidden rounded-[12px] sm:h-[68vh] sm:w-[58vw] lg:w-[39vw]">
                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1500&q=85"
                    alt={copy === 0 ? "Modern creative studio workspace" : ""}
                    className="h-full w-full object-cover grayscale"
                    loading="lazy"
                  />
                </figure>

                <figure className="relative h-[48vh] w-[82vw] shrink-0 overflow-hidden rounded-[12px] sm:h-[68vh] sm:w-[58vw] lg:w-[39vw]">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=85"
                    alt={copy === 0 ? "Team sharing ideas in a creative meeting" : ""}
                    className="h-full w-full object-cover grayscale"
                    loading="lazy"
                  />
                </figure>

                <figure className="relative h-[48vh] w-[82vw] shrink-0 overflow-hidden rounded-[12px] sm:h-[68vh] sm:w-[58vw] lg:w-[39vw]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1500&q=85"
                    alt={copy === 0 ? "Colleagues working together on a project" : ""}
                    className="h-full w-full object-cover grayscale"
                    loading="lazy"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .gallery-auto-track {
            animation: gallery-auto-scroll 38s linear infinite;
            will-change: transform;
          }

          .gallery-auto-track:hover {
            animation-play-state: paused;
          }

          @keyframes gallery-auto-scroll {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              transform: translate3d(-50%, 0, 0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .gallery-auto-track {
              animation: none;
            }
          }
        `}</style>
      </section>

      {/* =========================================================================
          SECTION 3: Interactive Google Map + SEND A MESSAGE Form Box
          ========================================================================= */}       

      {/* =========================================================================
          SECTION 3: Our Strength - Government Departments
          ========================================================================= */}

      {/* =========================================================================
          SECTION 3: Our Strength - Government Departments Auto Marquee
          ========================================================================= */}
<section
        id="form"
        className="w-full overflow-hidden bg-white px-6 py-7 pb-10 sm:px-10  lg:px-12"
      >
        <div className="mx-auto max-w-[1500px]">

          {/* Section Heading */}
          <div className="text-center">
          

            <h2 className="mx-auto mt-3 max-w-[1250px] text-[25px] font-semibold leading-tight tracking-[-0.02em] text-[#111111] sm">
              Trusted PRO Services Partner Across All Dubai &amp; UAE Government Departments
            </h2>
          </div>

          {/* Auto Scrolling Logos */}
          <div className="relative mt-14 w-full overflow-hidden lg:mt-20">

          <div className="logo-marquee flex w-max items-center">

  {/* First Logo Group */}
  <div className="flex shrink-0 items-center gap-12 px-6 sm:gap-20 lg:gap-24">

    {[1, 2, 3, 4, 5, 6].map((logo) => (
      <div
        key={logo}
        className="flex min-w-[160px] items-center justify-center"
      >
        <img
          src={`/images/uae/${logo}.png`}
          alt={`UAE Government Department ${logo}`}
          className="h-[95px] w-[150px] object-contain"
          loading="lazy"
        />
      </div>
    ))}

  </div>

  {/* Duplicate Logo Group - Seamless Loop */}
  <div
    className="flex shrink-0 items-center gap-12 px-6 sm:gap-20 lg:gap-24"
    aria-hidden="true"
  >

    {[1, 2, 3, 4, 5, 6].map((logo) => (
      <div
        key={logo}
        className="flex min-w-[160px] items-center justify-center"
      >
        <img
          src={`/images/uae/${logo}.png`}
          alt=""
          className="h-[95px] w-[150px] object-contain"
          loading="lazy"
        />
      </div>
    ))}

  </div>

</div>
          </div>
        </div>

        {/* Marquee Animation */}
        <style jsx>{`
          .logo-marquee {
            animation: logo-scroll 30s linear infinite;
            will-change: transform;
          }

          .logo-marquee:hover {
            animation-play-state: paused;
          }

          @keyframes logo-scroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .logo-marquee {
              animation: none;
            }
          }
        `}</style>
      </section>


<WhyChooseUs />

      {/* Our Projects section directly after WhyChooseUs */}
      <OurProjects />


<Stack/>
<BusinessSetup/>
<Setup/>
      {/* =========================================================================
          SECTION 4: FAQ'S ("Everything You Need to Know") Accordion
          ========================================================================= */}
      <section className="mx-auto max-w-[800px] px-6 py-6">
        {/* Small label */}
        <span className="block text-center text-[12px] font-bold tracking-widest text-[#6b7280] uppercase">
          FAQ&apos;S
        </span>

        {/* Big Headline */}
        <h2 className="mt-2 text-center text-[28px] font-medium tracking-tight text-[#0f0c3d] sm:text-[34px] lg:text-[38px]">
          Everything You Need to Know
        </h2>

        {/* Accordion List */}
        <div className="mt-10 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "rounded-[14px] shadow-sm border border-transparent"
                    : "border-b border-[#e5e7eb]"
                }`}
              >
                {/* Header Button */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className={`flex w-full items-center justify-between text-left cursor-pointer transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "bg-[#d70000] p-5 font-semibold text-[15px] sm:text-[16px] text-white rounded-t-[14px]"
                      : "bg-transparent p-5 font-semibold text-[15px] sm:text-[16px] text-[#111827] rounded-t-[14px] hover:text-[#0d093b]"
                  }`}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-180 text-white" : "rotate-0 text-[#6b7280]"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={isOpen ? "2.5" : "2"}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Animated Dropdown Content */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="border-x border-b border-[#e5e7eb] bg-white p-5 sm:p-6 text-[13.5px] leading-relaxed text-[#4b5563] rounded-b-[14px]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}


/* =========================================================================
   OUR PROJECTS - INTERACTIVE HORIZONTAL ACCORDION
   ========================================================================= */

type ProjectItem = {
  number: string;
  title: string;
  heading: string;
  description: string;
  image: string;
  href: string;
  panelClass: string;
};
const PROJECT_ITEMS: ProjectItem[] = [
  {
    number: "01.",
    title: "Our Mission",
    heading: "Delivering Excellence Through Innovation",
    description:
      "Our mission is to deliver reliable, high-quality industrial solutions through innovation, technical expertise and a commitment to excellence. We strive to understand our clients' needs, provide efficient solutions and build lasting relationships through trust, safety and professionalism.",
    image: "/images/mission.jpg",
    href: "/about/mission",
    panelClass: "project-panel-orange",
  },
  {
    number: "02.",
    title: "Our Vision",
    heading: "Building A Better Industrial Future",
    description:
      "Our vision is to become a trusted leader in industrial solutions, recognized for quality, innovation and customer satisfaction. We aim to shape the future of industries through advanced technologies, sustainable practices and continuous improvement.",
    image: "/images/vision.jpg",
    href: "/about/vision",
    panelClass: "project-panel-white",
  },
  {
    number: "03.",
    title: "Our Core Values",
    heading: "The Principles That Define Us",
    description:
      "Integrity, quality, safety, teamwork and customer commitment are at the heart of everything we do. We believe in maintaining transparency, delivering on our promises, empowering our people and creating long-term value for every client and partner.",
    image: "/images/core-values.jpg",
    href: "/about/core-values",
    panelClass: "project-panel-dark",
  },
];

function OurProjects() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="our-projects-section w-full overflow-hidden bg-[#d70000] px-5 py-16 sm:px-10 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[990px] grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.35fr] lg:items-stretch lg:gap-10">

        {/* Left: section introduction */}
        <div className="flex flex-col ">
          <div>
            <p className="flex items-center gap-2 text-[14px] font-semibold text-white">
              {/* <span className="h-4 w-[2px] bg-white" /> */}
              Our Project
            </p>

            <h2 className="mt-5 text-[38px] font-semibold  leading-[1.08] tracking-[-1.8px] text-white  ">
              Comprehensive
              <br />
              Industry Solution
            </h2>
          </div>

          <div className="mt-10 lg:mt-24">
            <p className="max-w-[510px] text-[14px] leading-[1.9] text-white sm:text-[15px]">
              We don&apos;t just deliver services — we deliver confidence. With
              decades of hands-on experience and a commitment to quality, we
              empower industries with reliable, efficient solutions.
            </p>

            <Link
              href="/projects"
              className="mt-12 inline-flex items-center group gap-2 rounded-[5px] bg-white px-5 py-1.5 text-[14px] font-bold text-[#d70000] transition-colors  "
            >
              View all Services
              <span className="flex h-9 w-9 items-center group-hover:rotate-45 transition-transform duration-300 justify-center rounded-[4px] bg-white text-[30px] group-hover:translate-x-1 font-normal text-[#d70000]">
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Right: expandable project panels */}
        <div className="project-accordion flex min-h-[440px] gap-1">
          {PROJECT_ITEMS.map((project, index) => {
            const isActive = activeProject === index;

            return (
              <article
                key={project.number}
                className={`project-panel ${project.panelClass} ${
                  isActive ? "is-active" : ""
                }`}
              >
                <button
                  type="button"
                  className="project-panel-tab"
                  onClick={() => setActiveProject(index)}
                  aria-expanded={isActive}
                  aria-label={`Show ${project.title}`}
                >
                  <span className="project-panel-number">{project.number}</span>
                  <span className="project-panel-vertical-title">
                    {project.title}
                  </span>
                </button>

                <div
                  className="project-panel-content"
                  aria-hidden={!isActive}
                >
                  <div className="project-panel-content-inner">
                    <h3>{project.heading}</h3>
                    <p>{project.description}</p>

                    <img
                      src={project.image}
                      alt={project.heading}
                      className="project-panel-image"
                      loading="lazy"
                    />

                    <Link href={project.href} className="project-panel-link">
                      View all Services
                      <span>↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .project-accordion {
          width: 100%;
          height: 546px;
          overflow: hidden;
        }

        .project-panel {
          position: relative;
          display: flex;
          flex: 0 0 86px;
          min-width: 0;
          height: 100%;
          overflow: hidden;
          border-radius: 11px;
          transition: flex 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .project-panel.is-active {
          flex: 1 1 0%;
        }

        .project-panel-orange {
          color: #d70000;
          background: white;
        }

        .project-panel-white {
          color: #171717;
          background: #fff;
        }

        .project-panel-dark {
          color: #fff;
          background: #242424;
        }

        .project-panel-tab {
          position: relative;
          display: flex;
          flex: 0 0 86px;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 27px 10px;
          border: 0;
          background: transparent;
          color: inherit;
          cursor: pointer;
        }

        .project-panel-number {
          font-size: 23px;
          font-weight: 500;
        }

        .project-panel-vertical-title {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 340px;
          transform: translate(-50%, -50%) rotate(-90deg);
          white-space: nowrap;
          text-align: center;
          font-size: 22px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .project-panel.is-active .project-panel-vertical-title {
          opacity: 0;
          pointer-events: none;
        }

        .project-panel-content {
          flex: 1;
          min-width: 0;
          overflow: hidden;
          visibility: hidden;
          opacity: 0;
          transition:
            opacity 300ms ease,
            visibility 0s linear 450ms;
        }

        .project-panel.is-active .project-panel-content {
          visibility: visible;
          opacity: 1;
          transition: opacity 350ms ease 180ms;
        }

        .project-panel-content-inner {
          width: 100%;
          min-width: 0;
          padding: 48px 35px 30px;
        }

        .project-panel-content h3 {
          max-width: 450px;
          font-size: clamp(23px, 2.2vw, 16px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -1px;
        }

        .project-panel-content p {
          max-width: 450px;
          margin-top: 20px;
          font-size: 15px;
          line-height: 1.7;
        }

        .project-panel-image {
          display: block;
          width: 100%;
          height: 200px;
          margin-top: 30px;
          border-radius: 10px;
          object-fit: cover;
        }

        .project-panel-link {
          display: inline-flex;
          align-items: center;
          gap: 22px;
          margin-top: 30px;
          padding: 8px 10px 8px 25px;
          border-radius: 5px;
          background: #fff;
          color: #171717;
          font-size: 14px;
          font-weight: 700;
          transition: background 250ms ease, color 250ms ease;
        }

        .project-panel-link span {
          display: flex;
          width: 36px;
          height: 36px;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
          background: #ff3d00;
          color: #fff;
          font-size: 24px;
        }

        .project-panel-link:hover {
          background: #171717;
          color: #fff;
        }

        @media (max-width: 1023px) {
          .project-accordion {
            height: 480px;
          }

          .project-panel-content-inner {
            padding: 35px 25px;
          }

          .project-panel-image {
            height: 180px;
          }
        }

        @media (max-width: 640px) {
          .project-accordion {
            height: auto;
            flex-direction: column;
            overflow: visible;
            gap: 8px;
          }

          .project-panel,
          .project-panel.is-active {
            flex: none;
            width: 100%;
            height: 65px;
            flex-direction: column;
            transition: height 600ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .project-panel.is-active {
            height: 440px;
          }

          .project-panel-tab {
            flex: 0 0 65px;
            width: 100%;
            min-height: 65px;
            flex-direction: row;
            justify-content: flex-start;
            gap: 20px;
            padding: 15px 20px;
          }

          .project-panel-number {
            font-size: 18px;
          }

          .project-panel-vertical-title {
            position: static;
            width: auto;
            transform: none;
            font-size: 15px;
            text-align: left;
          }

          .project-panel.is-active .project-panel-vertical-title {
            opacity: 1;
          }

          .project-panel-content {
            width: 100%;
            flex: 1;
          }

          .project-panel-content-inner {
            padding: 12px 20px 25px;
          }

          .project-panel-content h3 {
            font-size: 24px;
          }

          .project-panel-content p {
            margin-top: 12px;
            font-size: 13px;
          }

          .project-panel-image {
            height: 145px;
            margin-top: 20px;
          }

          .project-panel-link {
            margin-top: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-panel,
          .project-panel-content,
          .project-panel-link {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

